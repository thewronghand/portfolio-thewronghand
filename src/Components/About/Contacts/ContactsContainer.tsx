import { ContactMisc, Contact, ContactSet } from "../../../types";
import ContactsItem from "./ContactsItem";

interface ContactContainerProps {
  data: ContactSet;
}

export default function ContactContainer({ data }: ContactContainerProps) {
  return (
    <section className="flex flex-col items-center mb-80 pl-2">
      <section className="text-5xl w-full mb-10 border-b-2 pb-5 cursor-default">
        Contacts
      </section>
      <section className="w-full px-6">
        <ul className="flex flex-wrap justify-between">
          {data.data.map((contact: Contact | ContactMisc) => (
            <ContactsItem key={contact.title} contact={contact} />
          ))}
        </ul>
      </section>
    </section>
  );
}
