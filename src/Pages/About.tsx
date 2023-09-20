import { useDarkMode } from "../utils/hooks/useDarkMode";
import useFetchDocument from "../utils/hooks/useFetchDocument";
import { ContactSet, Profile, SkillSet } from "../types";
import ProfileBox from "../Components/About/ProfileBox";
import useFetchCollection from "../utils/hooks/useFetchCollection";
import SkillContainer from "../Components/About/Skills/SkillContainer";
import ContactContainer from "../Components/About/Contacts/ContactsContainer";

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
  const {
    data: contactsData,
    loading: contactsLoading,
    error: contactsError,
  } = useFetchDocument<ContactSet>("/about", "contacts");

  return (
    <div
      className={`${
        darkMode ? "text-white bg-slate-500" : "text-gray-700"
      } transition-all duration-300 ease-in-out`}
    >
      <section>
        <section className="mt-16">
          <main className="flex flex-col-reverse xl:flex-row md:justify-between w-full">
            <section className="flex flex-col w-full p-10  ml-0 items-center lg:ml-32 lg:w-2/3 xl:w-3/5 2xl:ml-96">
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
              <section className="w-full flex flex-col 2xl:flex-row">
                <section className="mt-16 w-full 2xl:w-1/2">
                  {skillsLoading && <div>Loading skill data...</div>}
                  {skillsError && (
                    <div>
                      Failed to fetch skill data : {skillsError.message}
                    </div>
                  )}
                  {skillsData && <SkillContainer data={skillsData} />}
                </section>
                <section className="mt-16 w-full 2xl:w-1/2 2xl:ml-3">
                  {contactsLoading && <div>Loading contact data...</div>}
                  {contactsError && (
                    <div>
                      Failed to fetch skill data : {contactsError.message}
                    </div>
                  )}
                  {contactsData && <ContactContainer data={contactsData} />}
                </section>
              </section>
            </section>
            {profileData && (
              <img
                src={profileData.imgUrl}
                alt={profileData.imgUrl}
                className="rounded-xl object-cover min-w-[250px] m-6 h-[60vh] xl:w-1/5 xl:m-0 xl:h-2/3 xl:rounded-none xl:rounded-bl-[20%]"
              />
            )}
          </main>
        </section>
      </section>
    </div>
  );
}
