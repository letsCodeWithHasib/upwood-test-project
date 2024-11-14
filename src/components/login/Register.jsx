import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp, verifyCode } from "../../redux/features/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    givenName: "",
    familyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    desiredAmount: "",
    verifyCode: "",
  });

  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //for controlled input
  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError(false);
  };

  // email validatino regex function
  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmitHandlerForActivation = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const { email, code } = formData;

    if (!isValidEmail(email)) {
      setError("Invalid email format."); // Set error message
      return;
    }
    try {
      // Dispatch the signUp action
      const user = await dispatch(verifyCode({ email, code }));
      if (user?.error) {
        setError("Invalid Code");
      } else {
        navigate("/auth/verification");
      }
    } catch (error) {
      // Handle any errors that occur during sign-up
      setRegistrationFailed(true); // Set the flag to indicate registration failure
    }
  };

  const onSubmitHandlerForRegistration = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword, givenName, familyName } =
      formData;

    if (!isValidEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const user = await dispatch(
        signUp({ email, password, givenName, familyName })
      );
      if (user?.error) {
        setError(user?.payload || "Registration failed. Please try again.");
      } else {
        setRegistered(true);
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="md:w-[450px] w-[90vw] font-[Lexend Deca] flex flex-col items-center">
        <img className="md:w-[200px] w-[150px]" src={logo} alt="Logo" />

        <section className="w-full mt-7 border-t-[1px] border-[#999999]">
          <h2 className="text-[20px] font-bold mt-5">
            {registered ? "Verify your email" : "User Registration"}
          </h2>

          {registered ? (
            <form
              onSubmit={onSubmitHandlerForActivation}
              className="flex flex-col gap-5 mt-5"
            >
              {/* Input field for email */}
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="email"
                placeholder="Registered Email"
                required
                onChange={onChangeHandler}
                name="email"
                value={formData.email}
              />
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="text"
                placeholder="Verification Code"
                required
                onChange={onChangeHandler}
                name="verifyCode"
                value={formData.verifyCode}
              />
              {error && <p className="text-[#ff0000] text-sm">{error}</p>}
              <button className="font-[Roboto] rounded-md text-white font-bold py-2 text-sm bg-green-500">
                Verify
              </button>
            </form>
          ) : (
            <form
              onSubmit={onSubmitHandlerForRegistration}
              className="flex flex-col gap-5 mt-7"
            >
              <fieldset>
                <input
                  className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={onChangeHandler}
                  name="email"
                  value={formData.email}
                  aria-label="Email"
                />
              </fieldset>
              <fieldset>
                <input
                  className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                  type="password"
                  placeholder="Enter your password"
                  required
                  onChange={onChangeHandler}
                  name="password"
                  value={formData.password}
                  aria-label="Password"
                />
              </fieldset>
              <fieldset>
                <input
                  className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                  type="password"
                  placeholder="Repeat your password"
                  required
                  onChange={onChangeHandler}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  aria-label="Confirm Password"
                />
              </fieldset>
              <label>
                <p className="text-md font-[Roboto]  text-[#6B6B6B]">
                  Desired investment amount € (optional)
                </p>
                <input
                  className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                  type="number"
                  placeholder="Enter amount $"
                  required
                  name="desiredAmount"
                  onChange={onChangeHandler}
                  value={formData.desiredAmount}
                  aria-label="Investment Amount"
                />
              </label>
              <fieldset className="flex items-center gap-2 mt-5">
                <input
                  type="checkbox"
                  required
                  aria-label="Terms and Conditions"
                />
                <span className="font-[Roboto] text-[#333333] text-[14px]">
                  I accept Terms & conditions...
                </span>
              </fieldset>
              {error && <p className="text-[#ff0000] text-sm">{error}</p>}
              <fieldset>
                <button
                  type="submit"
                  className="text-[#0FB404] uppercase font-[Roboto] text-sm font-bold"
                >
                  Continue with digital wallet creation
                </button>
              </fieldset>
              <div className="h-[1px] bg-[#999999] relative w-1/2">
                <p className="absolute top-[-10px] left-[50%] transform -translate-x-1/2 bg-white px-2">
                  OR
                </p>
              </div>

              <button
                type="button"
                className="text-[#0FB404] uppercase font-[Roboto] text-sm font-bold text-left"
              >
                Connect if you have Concordium wallet
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default Register;
