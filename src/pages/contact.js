import React from "react";
import { ContactForm } from "../components/contactForm";

export const Contact = () => {
  return (
    <div className="m-5">
      {/* Header */}
      <div className='col-4 mx-auto text-center mb-5'>
        <h2 className="mb-4">
          Contáctanos
          <hr className="featurette-divider mt-3" />
        </h2>
      </div>

      {/* ContactForm */}
      <ContactForm />
    </div>
  );
};
