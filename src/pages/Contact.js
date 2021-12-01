import Fade from "react-reveal";

import Section from "../components/Section";
import ContactCard from "../components/ContactCard";
import { contactInfo } from "../data/ContactInfo";

/**
 * Contact detail page for Cyberia 2021 website.
 * Summarizing all contacts the participants can get in touch with.
 */
export default function Contact() {
  const contactList = contactInfo;

  const createContact = (contact) => (
    <ContactCard
      image={contact[0]}
      name={contact[1]}
      description={contact[2]}
      primaryLink={contact[3]}
      secondaryLink={contact[4]}
    />
  );

  return (
    <Section
      info={
        <>
          {contactList.map((contact, index) => {
            const currentContact = createContact(contact);

            return index % 2 === 0 
            ? <Fade key={index} top>
                {currentContact}
              </Fade>
            : <Fade key={index} bottom>
                {currentContact}
              </Fade>;
          })}
        </>
      }
      infoDisplayDirection="row"
      media="Contatcs Media"
      displayMedia="none"
    />
  );
}
