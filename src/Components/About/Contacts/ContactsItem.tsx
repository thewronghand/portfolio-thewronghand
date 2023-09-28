import { useState } from "react";
import { Contact, ContactMisc, ContactMiscData } from "../../../types";
import { motion } from "framer-motion";

function ListItem({ title, children, isMisc = false }: ListItemProps) {
  const [isHovered, setHovered] = useState(false);
  if (!isMisc)
    return (
      <li className="flex items-center mx-2">
        <section className="mr-2 text-3xl py-4 pr-2 border-r-2 cursor-default min-w-[98px]">
          {title}
        </section>
        <section className="text-xl min-w-[206px]">
          <motion.div
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            variants={textVariants}
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
            className="flex items-center"
          >
            <motion.span
              variants={arrowVariants}
              className="absolute left-[-1.5rem] text-xl text-blue-400"
            >
              ➔
            </motion.span>
            <span
              className="text-lg lg:text-xl"
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
    <li className="flex items-center mx-2">
      <section className="mr-2 text-3xl py-4 pr-2 border-r-2 cursor-default min-w-[98px]">
        {title}
      </section>
      <section className="text-xl min-w-[206px]">{children}</section>
    </li>
  );
}

export default function ContactsItem({ contact }: ContactsItemProps) {
  if (isContact(contact)) {
    let content;
    switch (contact.type) {
      case CONTACT_TYPES.MAIL:
        content = (
          <a
            className="hover:text-blue-400 transition-all ease-in-out"
            href={`mailto:${contact.data}`}
          >
            {contact.subtitle}
          </a>
        );
        break;
      case CONTACT_TYPES.TEL:
        content = (
          <a
            className="hover:text-blue-400 transition-all ease-in-out"
            href={`tel:${contact.data}`}
          >
            {contact.subtitle}
          </a>
        );
        break;
      case CONTACT_TYPES.URL:
        content = (
          <a
            className="hover:text-blue-400 transition-all ease-in-out"
            href={contact.data}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.subtitle}
          </a>
        );
        break;
      default:
        content = (
          <section className="hover:text-blue-400 transition-all ease-in-out">
            {contact.subtitle}
          </section>
        );
    }
    return <ListItem title={contact.title}>{content}</ListItem>;
  }

  return (
    <ListItem title={contact.title} isMisc={true}>
      <ul className="flex">
        {contact.data.map((item: ContactMiscData) => (
          <li
            key={item.title}
            className="w-8 h-8 mx-[2px] hover:-translate-y-1 ease-in-out transition-all active:translate-y-0"
          >
            <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt={item.title} />
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
