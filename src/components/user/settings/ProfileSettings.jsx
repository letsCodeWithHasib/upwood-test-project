import { Link } from "react-router-dom";
import profile from "../../../assets/profile.png";
import QueryBox from "../common/QueryBox";

const ProfileSettings = () => {
  return (
    <div className="mt-5 p-7  shadow-2xl rounded-2xl">
      <div className="flex justify-evenly">
        <div className="flex flex-col items-center w-[300px]">
          <h3 className="font-lexend font-bold text-lg text-center">
            Profile Settings
          </h3>
          <img className="" src={profile} alt="" />
          <Link>
            <button className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Change Profile Picture
            </button>
          </Link>
          <div className="gap-2 mt-5 flex flex-col">
            <button className="font-[Roboto] font-bold text-[16px]">
              John Carter
            </button>
            <button className="font-[Roboto] font-bold text-[16px]">
              John@gmail.com
            </button>
          </div>
          <div className="flex flex-col items-center mt-10 gap-2">
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Change email address
            </Link>
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Change profile password
            </Link>
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Account second with 2FA
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center w-[300px]">
          <h3 className="font-lexend font-bold text-lg text-center">
            Legal entity
          </h3>
          <img src={profile} alt="" />
          <Link className="">
            <button className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Change company logo
            </button>
          </Link>
          <div className="gap-2 mt-5 flex flex-col">
            <button className="font-[Roboto] font-bold text-[16px]">
              SIA Upwood
            </button>
            <button className="font-[Roboto] font-bold text-[16px]">
              Reg. no. 12345678
            </button>
          </div>
          <div className="flex flex-col items-center mt-10 gap-2">
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Change email address
            </Link>
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Add another entity members{" "}
            </Link>
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Download account settings
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[60px] flex gap-7 justify-center">
        <QueryBox
          boxData={{
            heading: "Account",
            query: "How to add legal entity to account?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Wallet",
            query: "How to add legal entity wallet?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Investments",
            query: "How to invest as legal entity?",
          }}
        />
      </div>
    </div>
  );
};

export default ProfileSettings;
