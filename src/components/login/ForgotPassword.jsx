import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const ForgotPassword = () => {
  return (
    <div>
      <div>
        <div className="w-[450px] font-[Lexend Deca] flex flex-col items-center">
          {/* Logo at the top of the login form */}
          <img className="w-[200px]" src={logo} alt="Logo" />

          {/* User login form section */}
          <section className="w-full mt-7 border-t-[1px] border-[#999999]">
            <h2 className="text-2xl font-[Lexend Deca] font-bold mt-7">
              Forgot password
            </h2>
            <form className="flex flex-col gap-7 mt-7">
              {/* Email input field */}
              <label>
                <input
                  className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                  type="email"
                  placeholder="Email"
                  required
                />
              </label>
              {/* Button for login and link for forgotten details */}
              <div className="flex items-end">
                <button className="bg-[#0FB404] rounded-lg p-2 px-5 text-white">
                  Confirm
                </button>
              </div>
            </form>
          </section>

          {/* Invitation request section */}
          <section className="w-full mt-5">
            <p>
              If your email will be recognized in the system, you will recieve
              further instructions to reset your password in the email. If you
              don’t see an email from Upwood, please check your spam folder. If
              you haven’t recieved e-mail or forgot your e-mail address please
              contact Upwood support.
            </p>
            <div className="mt-5 flex flex-col gap-5">
              <button className="text-[#0FB404] rounded-lg p-2 px-5 border-[1px] border-[#0FB404] text-center w-[200px]">
                Contact Support
              </button>
              <Link
                className="text-[#6B6B6B] text-[16px] font-[Roboto] font-semibold"
                to="/auth"
              >
                BACK TO LOGIN
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
