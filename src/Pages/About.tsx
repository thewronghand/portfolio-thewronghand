import { useDarkMode } from "../utils/hooks/useDarkMode";
import useFetchDocument from "../utils/hooks/useFetchDocument";
import { Profile, SkillSet } from "../types";
import ProfileBox from "../Components/About/ProfileBox";
import useFetchCollection from "../utils/hooks/useFetchCollection";
import SkillContainer from "../Components/About/SkillContainer";

export default function About() {
  const darkMode = useDarkMode();
  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useFetchDocument<Profile>("/about", "profile");
  const {
    data: skillsData,
    loading: skillsLoading,
    error: skillsError,
  } = useFetchCollection<SkillSet>("skills");

  return (
    <div
      className={`${
        darkMode ? "text-white bg-slate-500" : "text-gray-700"
      } transition-all duration-300 ease-in-out`}
    >
      <section>
        <section className="mt-16">
          <main className="flex flex-col-reverse md:flex-row md:justify-between w-full">
            <section className="flex flex-col w-full p-10  ml-0 items-center md:ml-32 md:w-2/3">
              <section>
                {profileLoading && <div>Loading profile data...</div>}
                {profileError && (
                  <div>
                    Failed to fetch profile data : {profileError.message}
                  </div>
                )}
                {profileData && (
                  <ProfileBox description={profileData.description} />
                )}
              </section>
              <section>
                {skillsLoading && <div>Loading skill data...</div>}
                {skillsError && (
                  <div>Failed to fetch skill data : {skillsError.message}</div>
                )}
                {skillsData && <SkillContainer data={skillsData} />}
              </section>
            </section>
            {profileData && (
              <img
                src={profileData.imgUrl}
                alt={profileData.imgUrl}
                className="rounded-xl min-w-[250px] m-6 md:w-1/5 md:m-0 md:h-auto md:rounded-none md:rounded-bl-[20%]"
              />
            )}
          </main>
        </section>
      </section>
    </div>
  );
}
