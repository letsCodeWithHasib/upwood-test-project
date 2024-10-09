import { Link, useNavigate } from "react-router-dom"; // Link component for navigation
import logo from "../../assets/logo.png"; // Importing the company logo
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "../../redux/features/authSlice";

const Activate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    code: "",
  });

  const authStatus = useSelector((state) => state.auth.authStatus);
  useEffect(() => {
    if (authStatus === "Verified") {
      navigate("/auth/verification");
    }
  }, [authStatus]);

  function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  const [registrationFailed, setRegistrationFailed] = useState(false);

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex justify-center min-h-screen">
      {/* Container for the registration form */}
      <div className="md:w-[450px] w-[300px] font-[Lexend Deca] flex flex-col items-center">
        {/* Displaying the logo at the top of the form */}
        <img className="md:w-[200px] w-[150px]" src={logo} alt="Logo" />

        {/* Section for user registration form */}
        <section className="w-full mt-7 border-t-[1px] border-[#999999]">
          {/* Registration heading */}
          <h2 className="text-[20px] font-bold mt-7">User Validation</h2>

          {/* Registration form */}
        </section>
      </div>
    </div>
  );
};

export default Activate;
