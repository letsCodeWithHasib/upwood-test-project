import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import getUserInfoFromToken from "../utils/jwtUtils";
import { setInfo } from "../redux/features/userSlice";

const UserRouteWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authStatus, sessionInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authStatus !== "SignedIn") {
      navigate("/auth");
    } else {
      const { idToken } = sessionInfo;
      const { given_name: firstName, family_name: lastName } =
        getUserInfoFromToken(idToken);
      dispatch(setInfo({ firstName, lastName }));
    }
  }, [authStatus]);
  return <>{children}</>;
};

export default UserRouteWrapper;
