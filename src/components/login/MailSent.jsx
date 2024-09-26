import React from "react"; // Importing React library
import check from "../../assets/check.png"; // Importing check icon for confirmation
import logo from "../../assets/logo.png"; // Importing logo for branding
import { Link } from "react-router-dom"; // Importing Link for navigation

const MailSent = () => {
  return (
    <div>
      {/* Main container for the notification with fixed width and flex layout */}
      <div className="w-[450px] font-[Lexend Deca] flex flex-col items-center">
        {/* Logo displayed at the top of the notification */}
        <img className="w-[200px]" src={logo} alt="Logo" />

        {/* Notification section with headings and check icon */}
        <section className="w-full flex items-center flex-col gap-5 mt-7 border-t-[1px] border-[#999999]">
          {/* Success icon indicating the invitation has been sent */}
          <img className="mt-5" src={check} alt="Check icon" />

          {/* Confirmation message for the invitation request */}
          <h2 className="mt-5 font-bold text-[20px] text-center">
            We have received your invitation <br /> request!
          </h2>

          {/* Instruction for the user to check their email */}
          <h2 className="mt-5 font-bold text-[20px] text-center">
            Please check your e-mail
          </h2>

          {/* Link to navigate back to the login page */}
          <Link
            className="text-[#6B6B6B] mt-5 text-center text-[16px] font-[Roboto] font-semibold"
            to="/" // Adjusted path to root for navigation
          >
            BACK TO LOGIN
          </Link>
        </section>
      </div>
    </div>
  );
};

export default MailSent;
