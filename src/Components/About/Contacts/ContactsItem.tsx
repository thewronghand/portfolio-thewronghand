import { Contact, ContactMisc, ContactMiscData } from "../../../types";

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

export default function ContactsItem({ contact }: ContactsItemProps) {
  if (isContact(contact)) {
    switch (contact.type) {
      case CONTACT_TYPES.MAIL:
        return (
          <li>
            <section>{contact.title}</section>
            <a href={`mailto:${contact.data}`}>{contact.subtitle}</a>
          </li>
        );
      case CONTACT_TYPES.TEL:
        return (
          <li>
            <section>{contact.title}</section>
            <a href={`tel:${contact.data}`}>{contact.subtitle}</a>
          </li>
        );
      case CONTACT_TYPES.URL:
        return (
          <li>
            <section>{contact.title}</section>
            <a href={contact.data} target="_blank" rel="noopener noreferrer">
              {contact.subtitle}
            </a>
          </li>
        );

      default:
        return (
          <li>
            <section>{contact.title}</section>
            <section>{contact.subtitle}</section>
          </li>
        );
    }
  }
  return (
    <li>
      <section>{contact.title}</section>
      <ul>
        {contact.data.map((item: ContactMiscData) => (
          <li key={item.title}>
            <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt={item.title} />
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
