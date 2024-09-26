import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Login = () => {
  console.log(logo);
  return (
    <div>
      <div className="w-[450px] font-[Lexend Deca] flex flex-col items-center">
        {/* Logo at the top of the login form */}
        <img className="w-[200px]" src={logo} alt="Logo" />

        {/* User login form section */}
        <section className="w-full mt-7 border-y-[1px] border-[#999999]">
          <h2 className="text-2xl font-[Lexend Deca] font-bold mt-7">
            User login
          </h2>
          <form className="flex flex-col gap-3 mt-7">
            {/* Email input field */}
            <label>
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="email"
                placeholder="Email"
                required
              />
            </label>
            {/* Password input field */}
            <label>
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="password"
                placeholder="Password"
                required
              />
            </label>

            {/* Button for login and link for forgotten details */}
            <div className="flex items-end mb-5">
              <button className="bg-[#0FB404] rounded-lg p-2 px-5 text-white">
                Login
              </button>
              <Link
                className="text-[15px] text-[#6B6B6B] ml-3 font-semibold font-[Roboto]"
                to="forgot-password"
              >
                Forgot your login details?
              </Link>
            </div>
          </form>
        </section>

        {/* Invitation request section */}
        <section className="w-full mt-5">
          <h2 className="text-2xl font-[Lexend Deca] font-bold">
            Not a user? Request Invitation
          </h2>
          <form className="mt-5">
            {/* Input for entering email to request an invitation */}
            <label>
              <input
                className="shadow-sm py-1 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>

            {/* Checkbox for agreeing to marketing communications */}
            <label className="flex items-start gap-5 mt-5">
              <input type="checkbox" />
              <span className="ml-2 font-[Roboto] text-[14px]">
                By entering your email you agree to receive marketing
                communications from SIA Upwood. You can unsubscribe at any time.
                For more information, see our Privacy Policy.
              </span>
            </label>

            {/* Button to submit the invitation request */}
            <button className="bg-[#0FB404] rounded-lg p-2 px-5 text-white mt-5">
              Request Invitation
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
