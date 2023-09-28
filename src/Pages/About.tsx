import { useDarkMode } from "../utils/hooks/useDarkMode";
import useFetchDocument from "../utils/hooks/useFetchDocument";
import { ContactSet, Profile, SkillSet } from "../types";
import ProfileBox from "../Components/About/ProfileBox";
import useFetchCollection from "../utils/hooks/useFetchCollection";
import SkillContainer from "../Components/About/Skills/SkillContainer";
import ContactContainer from "../Components/About/Contacts/ContactsContainer";
import { useCacheSkillImages } from "../utils/hooks/useCacheSkillImages";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../utils/hooks/useMediaQuery";
import { COLORS } from "../utils/constant";

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
  useCacheSkillImages(skillsData);
  const isSmallerThanXL = useMediaQuery("(max-width:1279px)");

  return (
    <AnimatePresence>
      <motion.div
        className={`${
          darkMode
            ? `${COLORS.DARK_MODE_BG} ${COLORS.DARK_MODE_TEXT}`
            : `${COLORS.LIGHT_MODE_BG} ${COLORS.LIGHT_MODE_TEXT}`
        } transition-all duration-300 ease-in-out pt-10 xl:pt-0 min-h-screen`}
        initial="hidden"
        animate="visible"
      >
        <motion.main className="flex flex-col-reverse xl:flex-row md:justify-between w-full">
          <motion.section
            className="flex flex-col w-full p-10 ml-0 items-center lg:ml-32 lg:w-2/3 xl:w-3/5 2xl:ml-96"
            variants={containerVariants}
          >
            <motion.section variants={itemVariants}>
              {profileError && (
                <div>Failed to fetch profile data : {profileError.message}</div>
              )}
              {!profileLoading && !profileError && profileData && (
                <ProfileBox description={profileData.description} />
              )}
            </motion.section>
            <motion.section
              className="w-full flex flex-col 2xl:flex-row"
              variants={containerVariants}
            >
              <motion.section
                className="mt-16 w-full 2xl:w-1/2"
                variants={itemVariants}
              >
                {skillsError && (
                  <div>Failed to fetch skill data : {skillsError.message}</div>
                )}
                {!skillsLoading && !skillsError && skillsData && (
                  <SkillContainer data={skillsData} />
                )}
              </motion.section>
              <motion.section
                className="mt-16 w-full 2xl:w-1/2"
                variants={itemVariants}
              >
                {contactsError && (
                  <div>
                    Failed to fetch skill data : {contactsError.message}
                  </div>
                )}
                {!contactsLoading && !contactsError && contactsData && (
                  <ContactContainer data={contactsData} />
                )}
              </motion.section>
            </motion.section>
          </motion.section>
          {profileData && (
            <motion.img
              src={profileData.imgUrl}
              alt={profileData.imgUrl}
              className="rounded-xl object-cover min-w-[250px] m-6 h-[60vh] xl:w-2/5 2xl:w-1/5 xl:m-0 xl:h-2/3 xl:rounded-none xl:rounded-bl-[20%]"
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: isSmallerThanXL ? 0.4 : 1.5,
                  duration: 0.7,
                  ...(isSmallerThanXL && {
                    type: "spring",
                    damping: 11,
                    stiffness: 100,
                  }),
                },
              }}
            />
          )}
        </motion.main>
      </motion.div>
    </AnimatePresence>
  );
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      staggerChildren: 0.7,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
