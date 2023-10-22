import { useState } from "react";
import { Contact, ContactMisc, ContactMiscData } from "../../../types";
import { motion } from "framer-motion";
import { contactsItemStyle, listItemStyle } from "./contactsComponents.css";

function ListItem({ title, children, isMisc = false }: ListItemProps) {
  const [isHovered, setHovered] = useState(false);
  if (!isMisc)
    return (
      <li className={listItemStyle.container}>
        <section className={listItemStyle.title}>{title}</section>
        <section className={listItemStyle.itemSection}>
          <motion.div
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            variants={textVariants}
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
            className={listItemStyle.motionDiv}
          >
            <motion.span
              variants={arrowVariants}
              className={listItemStyle.arrow}
            >
              ➔
            </motion.span>
            <span
              className={listItemStyle.text}
              onMouseOver={() => {
                setHovered(true);
              }}
              onMouseOut={() => {
                setHovered(false);
              }}
            >
              {children}
            </span>
          </motion.div>
        </section>
      </li>
    );
  return (
    <li className={listItemStyle.misc.container}>
      <section className={listItemStyle.misc.title}>{title}</section>
      <section className={listItemStyle.misc.itemSection}>{children}</section>
    </li>
  );
}

export default function ContactsItem({ contact }: ContactsItemProps) {
  if (isContact(contact)) {
    let content;
    switch (contact.type) {
      case CONTACT_TYPES.MAIL:
        content = <a href={`mailto:${contact.data}`}>{contact.subtitle}</a>;
        break;
      case CONTACT_TYPES.TEL:
        content = <a href={`tel:${contact.data}`}>{contact.subtitle}</a>;
        break;
      case CONTACT_TYPES.URL:
        content = (
          <a href={contact.data} target="_blank" rel="noopener noreferrer">
            {contact.subtitle}
          </a>
        );
        break;
      default:
        content = <section>{contact.subtitle}</section>;
    }
    return <ListItem title={contact.title}>{content}</ListItem>;
  }

  return (
    <ListItem title={contact.title} isMisc={true}>
      <ul className={contactsItemStyle.misc.list}>
        {contact.data.map((item: ContactMiscData) => (
          <li key={item.title} className={contactsItemStyle.misc.item}>
            <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={item.title}
                className={contactsItemStyle.misc.img}
              />
            </a>
          </li>
        ))}
      </ul>
    </ListItem>
  );
}

interface ContactsItemProps {
  contact: Contact | ContactMisc;
}

function isContact(data: Contact | ContactMisc): data is Contact {
  return "subtitle" in data;
}

const CONTACT_TYPES = {
  MAIL: "mail",
  TEL: "tel",
  URL: "url",
};

interface ListItemProps {
  title: string;
  children: React.ReactNode;
  isMisc?: boolean;
}

const arrowVariants = {
  hidden: { opacity: 0, x: -5 },
  visible: { opacity: 1, x: 0 },
};

const textVariants = {
  hidden: { x: 0 },
  visible: { x: 20 },
};
