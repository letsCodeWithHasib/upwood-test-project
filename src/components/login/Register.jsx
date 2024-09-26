import { Link } from "react-router-dom"; // Link component for navigation
import logo from "../../assets/logo.png"; // Importing the company logo

const Register = () => {
  return (
    <div className="flex justify-center  min-h-screen">
      {/* Container for the registration form */}
      <div className="w-[450px] font-[Lexend Deca] flex flex-col items-center">
        {/* Displaying the logo at the top of the form */}
        <img className="w-[200px]" src={logo} alt="Logo" />

        {/* Section for user registration form */}
        <section className="w-full mt-7 border-t-[1px] border-[#999999]">
          {/* Registration heading */}
          <h2 className="text-2xl font-bold mt-7">User Registration</h2>

          {/* Registration form */}
          <form className="flex flex-col gap-3 mt-7">
            {/* Input field for email */}
            <label>
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>

            {/* Input field for password */}
            <label>
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="password"
                placeholder="Enter your password"
                required
              />
            </label>

            {/* Input field to confirm password */}
            <label>
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="password"
                placeholder="Confirm password"
                required
              />
            </label>

            {/* Input field for investment amount */}
            <label>
              <p className="text-[16px] text-[#333333]">
                Desired investment amount $
              </p>
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="text"
                placeholder="Enter amount $"
                required
              />
            </label>

            {/* Checkbox for accepting terms and conditions */}
            <label className="flex items-center gap-2 mt-5">
              <input type="checkbox" required />
              <span className="font-[Roboto] text-[#6B6B6B] text-[14px]">
                I accept Terms & conditions...
              </span>
            </label>

            {/* Submit button to continue with wallet creation */}
            <label>
              <button
                type="submit"
                className="text-[#0FB404] uppercase font-[Roboto] text-sm font-bold"
              >
                Continue with digital wallet creation
              </button>
            </label>

            {/* Divider with "OR" for alternate wallet connection */}
            <div className="h-[1px] bg-[#999999] relative w-1/2">
              <p className="absolute top-[-10px] left-[45%] bg-white px-2">
                OR
              </p>
            </div>

            {/* Button for users who already have a Concordium wallet */}
            <label>
              <button
                type="button"
                className="text-[#0FB404] uppercase font-[Roboto] text-sm font-bold"
              >
                Connect if you have Concordium wallet
              </button>
            </label>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
