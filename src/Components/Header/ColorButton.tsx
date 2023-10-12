import { useEffect, useRef, useState } from "react";
import { COLOR_SCHEMES } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { setColorScheme } from "../../redux/slices/colorSchemeSlice";
import { useDarkMode } from "../../utils/hooks/useDarkMode";
import { useColorScheme } from "../../utils/hooks/useColorScheme";
import { createPortal } from "react-dom";

export default function ColorButton() {
  const darkMode = useDarkMode();
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const colorButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSchemeClick = (schemeName: string) => {
    dispatch(
      setColorScheme(COLOR_SCHEMES[schemeName as keyof typeof COLOR_SCHEMES])
    );
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (colorButtonRef.current === event.target) return; // 컬러버튼을 클릭한 경우 이벤트 핸들러를 실행하지 않음
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      <button
        ref={colorButtonRef}
        onClick={toggleModal}
        className=" font-young-serif pt-1 cursor-pointer"
      >
        Color
      </button>
      {isOpen &&
        createPortal(
          <section
            ref={modalRef}
            className="font-young-serif fixed z-50 top-12 right-24 flex flex-col p-2 px-4 rounded-lg shadow-md"
            style={{
              color: darkMode ? colorScheme.DARK.TEXT : colorScheme.LIGHT.TEXT,
              background: darkMode ? colorScheme.DARK.BG : colorScheme.LIGHT.BG,
            }}
          >
            {Object.entries(COLOR_SCHEMES).map(
              ([schemeName, schemeDetails]) => (
                <button
                  key={schemeName}
                  onClick={() => handleSchemeClick(schemeName)}
                >
                  {schemeDetails.TITLE}
                </button>
              )
            )}
          </section>,
          document.getElementById("modal-root") as HTMLElement
        )}
    </section>
  );
}
