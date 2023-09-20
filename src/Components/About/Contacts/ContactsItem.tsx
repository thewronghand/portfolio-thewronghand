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
};

export default function ContactsItem({ contact }: ContactsItemProps) {
  if (isContact(contact)) {
    switch (contact.type) {
      case CONTACT_TYPES.MAIL:
        return (
          <section>
            <section>{contact.title}</section>
            <a href={`mailto:${contact.data}`}>{contact.subtitle}</a>
          </section>
        );
      case CONTACT_TYPES.TEL:
        return (
          <section>
            <section>{contact.title}</section>
            <a href={`tel:${contact.data}`}>{contact.subtitle}</a>
          </section>
        );
      default:
        return (
          <section>
            <section>{contact.title}</section>
            <section>{contact.subtitle}</section>
          </section>
        );
    }
  }
  return (
    <section>
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
    </section>
  );
}
