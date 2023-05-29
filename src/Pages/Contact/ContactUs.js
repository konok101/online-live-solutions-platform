import React from "react";
import Navigation from "../Shared/Navigation";

import ContactUsForm from "./FormContactUs";
import Footer from "../Shared/Footer";

const ContactUs = () => {

    return (
        <div
        
        style={{background: 'linear-gradient(to right,rgb(228,231,234), rgb(201,230,235))'}}>
            <Navigation></Navigation>
            <ContactUsForm></ContactUsForm>
          <Footer/>
           

        </div>
    );
};
export default ContactUs;