import useFetchDocument from "../utils/hooks/useFetchDocument";
import { ContactSet, Profile, SkillSet } from "../types";
import ProfileBox from "../Components/About/ProfileBox";
import useFetchCollection from "../utils/hooks/useFetchCollection";
import SkillContainer from "../Components/About/Skills/SkillContainer";
import ContactContainer from "../Components/About/Contacts/ContactsContainer";
import { useCacheSkillImages } from "../utils/hooks/useCacheSkillImages";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../utils/hooks/useMediaQuery";
import Background from "../Components/Global/Background";
import { aboutStyle as style } from "./pages.css";

export default function About() {
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
      <Background>
        <motion.div
          className={style.container}
          initial="hidden"
          animate="visible"
        >
          <motion.main className={style.main}>
            <motion.section
              className={style.profileSection}
              variants={containerVariants}
            >
              <motion.section variants={itemVariants}>
                {profileError && (
                  <div>
                    Failed to fetch profile data : {profileError.message}
                  </div>
                )}
                {!profileLoading && !profileError && profileData && (
                  <ProfileBox description={profileData.description} />
                )}
              </motion.section>
              <motion.section
                className={style.skillsAndContactsSection}
                variants={containerVariants}
              >
                <motion.section
                  className={style.skillsAndContactsChildren}
                  variants={itemVariants}
                >
                  {skillsError && (
                    <div>
                      Failed to fetch skill data : {skillsError.message}
                    </div>
                  )}
                  {!skillsLoading && !skillsError && skillsData && (
                    <SkillContainer data={skillsData} />
                  )}
                </motion.section>
                <motion.section
                  className={style.skillsAndContactsChildren}
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
                className={style.profileImage}
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
      </Background>
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
