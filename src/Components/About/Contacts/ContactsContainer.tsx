import { ContactMisc, Contact, ContactSet } from "../../../types";
import ContactsItem from "./ContactsItem";
import { contactsContainerStyle as style } from "./contactsComponents.css";

interface ContactContainerProps {
  data: ContactSet;
}

export default function ContactContainer({ data }: ContactContainerProps) {
  return (
    <section className={style.container}>
      <section className={style.title}>Contacts</section>
      <section className={style.listSection}>
        <ul className={style.list}>
          {data.data.map((contact: Contact | ContactMisc) => (
            <ContactsItem key={contact.title} contact={contact} />
          ))}
        </ul>
      </section>
    </section>
  );
}
