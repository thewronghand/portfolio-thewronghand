import { useEffect } from "react";
import { SkillSet } from "../../types";

const cacheImage = (url: string) => {
  const img = new Image();
  img.src = url;
};

const useCacheSkillImages = (data: SkillSet[]) => {
  useEffect(() => {
    const imageUrls = data.flatMap((skillSet) =>
      skillSet.data.map((skill) => skill.imgUrl)
    );
    imageUrls.forEach(cacheImage);
  }, [data]);
};

export default useCacheSkillImages;
