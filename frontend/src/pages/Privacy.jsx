import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="max-w-[1200px] mx-auto pt-24 flex flex-col">
      <h1 className="text-2xl font-semibold p-2">
        Privacy Policy for AjaxClotheHouse.com
      </h1>
      <h2 className="text-xl font-[400] p-2">
        Effective Date: 15,November,2024
      </h2>
      <p className="text-md p-2 text-justify">
        At ajaxClotheHouse.com, we are committed to protecting your privacy.
        This Privacy Policy outlines how we collect, use, and safeguard your
        personal information when you visit our website or make a purchase.
      </p>
      <h2 className="text-xl font-[400] p-2">1. Information We Collect</h2>
      <h3 className="text-lg p-2">
        We collect the following types of information: :
      </h3>
      <p className="text-md p-2 text-justify">
        {" "}
        Personal Information: When you create an account, place an order, or
        contact us, we may collect your name, email address, shipping address,
        billing address, phone number, and payment information.
      </p>
      <p className="text-md p-2 text-justify">
        Non-Personal Information: We may collect non-personal information such
        as your IP address, browser type, and pages visited on our site to
        improve our services and enhance user experience.
      </p>

      <h2 className="text-xl font-[400] p-2">2. How We Use Your Information</h2>
      <p className="text-md p-2 text-justify">
        We use your information for various purposes, including:
      </p>
      <p className="text-md p-2 text-justify">
        Processing and fulfilling your orders.
      </p>
      <p className="text-md p-2 text-justify">
        Communicating with you about your order and our services.
      </p>
      <p className="text-md p-2 text-justify">
        Sending promotional materials, if you opt in to receive them.
      </p>

      <h2 className="text-xl font-[400] p-2">3. Order Exchanges and Refunds</h2>
      <p className="text-md p-2 text-justify">
        Please note our policy regarding exchanges and refunds:
      </p>
      <p className="text-md p-2 text-justify">
        Exchanges: You are entitled to a maximum of two exchanges per order. To
        initiate an exchange, please contact our customer service within 3 days
        of receiving your item. Refunds: We do not offer refunds on any
        purchases. Please choose carefully and refer to our size guide before
        placing an order.
      </p>

      <h2 className="text-xl font-[400] p-2">4. Data Security</h2>

      <p className="text-md p-2 text-justify">
        We take reasonable measures to protect your personal information. We use
        SSL (Secure Socket Layer) technology to encrypt your data during
        transmission. However, no method of transmission over the internet or
        electronic storage is completely secure. While we strive to protect your
        personal information, we cannot guarantee its absolute security.
      </p>

      <h2 className="text-xl font-[400] p-2">5. Cookies</h2>

      <p className="text-md p-2 text-justify">
        {" "}
        We use cookies to enhance your browsing experience. Cookies are small
        files placed on your device that help us understand how you interact
        with our site. You can choose to accept or decline cookies. If you
        decline, some features of our site may not function properly.
      </p>

      <h2 className="text-xl font-[400] p-2">6. Third-Party Disclosure</h2>

      <p className="text-md p-2 text-justify">
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties without your consent, except for trusted third
        parties who assist us in operating our website, conducting our business,
        or servicing you, as long as those parties agree to keep this
        information confidential.
      </p>

      <h2 className="text-xl font-[400] p-2">7. Your Rights</h2>

      <p className="text-md p-2 text-justify">You have the right to:</p>
      <p className="text-md p-2 text-justify">
        Access the personal information we hold about you.
      </p>
      <p className="text-md p-2 text-justify">
        Request correction of any inaccuracies in your personal information.
      </p>
      <p className="text-md p-2 text-justify">
        Opt-out of promotional communications at any time by following the
        unsubscribe instructions in our emails.
      </p>

      <h2 className="text-xl font-[400] p-2">
        8. Changes to This Privacy Policy
      </h2>

      <p className="text-md p-2 text-justify">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date. We encourage you to
        review this policy periodically for any changes.
      </p>

      <h2 className="text-xl font-[400] p-2">9. Contact Us</h2>

      <p className="text-md p-2 text-justify">
        If you have any questions about this Privacy Policy or our practices,
        please contact us at:
      </p>

      <p className="text-md p-2 text-justify">
        <Link>ajaxClotheHouse.com</Link>
      </p>
    </div>
  );
};

export default Privacy;
