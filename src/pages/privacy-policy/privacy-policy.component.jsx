import React from 'react';

import './privacy-policy.styles.scss';

const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy'>
      <div className='privacy-policy-wrapp'>
        <div className='title'>
          <span>Privacy Policy</span>
        </div>
        <div className='privacy-policy-content'>
          <p>
            Monakihome.com (“Monaki”) respects your privacy. We fully comply
            with the Dutch Data Protection Act (Wet Bescherming
            Persoonsgegevens) and the Dutch Telecommunications Act
            (Telecommunicatiewet). In this Privacy Policy you can read what kind
            of personal data we collect and how we store, protect and use your
            personal data.
          </p>
          <p>
            Furthermore, you can read for which purposes we will use your
            personal data and with whom your data will be shared.
          </p>
          <p className='pt-30'>
            <span>What does this Privacy Policy apply to?</span>
          </p>
          <p>
            This Privacy Policy applies to your use of the "Websites" www.@.nl
            and the mobile application "Apps" offered under the name @, and all
            products and services that we offer you via our Websites and Apps.
          </p>
          <p className='pt-30'>
            <span>Personal data</span>
          </p>
          <p>
            In this Privacy Policy, your "personal data" means information or
            pieces of information that could allow you to be identified as a
            person.
          </p>
          <p className='pt-30'>
            <span>Your consent</span>
          </p>
          <p>
            Monakihome.com will not collect, use or disclose your personal data
            without your prior consent. Therefore, we ask you to agree to this
            Privacy Policy before you can use our Websites or Apps.
          </p>
          <p className='pt-30'>
            <span>Which personal data do we process?</span>
          </p>
          <p>
            Your personal data may be collected in several ways, for example
            when you visit our Websites, register on our Websites, place an
            order, subscribe to the newsletter, fill out a form, contact us or
            use our services.
          </p>
          <p>
            We also process your IP address, the history of your transactions,
            payment details, browser language and – if you have given us
            permission – your geolocation.
          </p>
          <p>
            In addition we may also process non-personal data whenever you
            interact with our Websites. This data may include your browser name,
            the type of your computer and technical information about your means
            to connect to our Websites (such as the operating system and the
            utilized internet service providers).
          </p>
          <p className='pt-30'>
            <span>How do we use your personal data?</span>
          </p>
          <p>
            ♣ We use your email address to send you information and updates
            about your order. We may also send you information about topics that
            might be interesting for you. You can unsubscribe from these
            services at any time.
          </p>
          <p>
            ♣ We use the data about your browser language, your IP address and
            geolocation in order to address you in a language you speak and to
            show you content that relates to the country you reside in.
          </p>
          <p>
            ♣ In case of fraud, we will share your personal data with the victim
            in order to allow this person to file a report with the police. We
            will not share more data than necessary for the report, and we will
            notify you in advance when we are about to share your data for this
            purpose.
          </p>
          <p className='pt-30'>
            <span>Who do we share your personal data with?</span>
          </p>
          <p>
            Monakihome.com does not sell, trade, or rent personal data to third
            parties.
          </p>
          <p className='pt-30'>
            <span>Third-party service providers</span>
          </p>
          <p>
            In order to render our services, there are data that we will need to
            share with third-party service providers.
          </p>
          <p>
            For payments made via our websites, we use third-party services such
            as payment gateways and other payment transaction processors. These
            third parties are contractually obliged not to use said data for any
            other purpose than to effectuate the payment.
          </p>
          <p className='pt-30'>
            <span>Generic aggregated (non-personal) data</span>
          </p>
          <p>
            We may share generic aggregated data with our business partners,
            trusted affiliates and advertisers. In such case the data will be
            fully anonymized.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
