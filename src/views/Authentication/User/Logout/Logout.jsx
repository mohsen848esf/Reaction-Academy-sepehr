import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../../../core/context/UserContext";
import { logout } from "../../../../core/services/api/auth-student.api";

function Logout() {
  const { setUser, setToken } = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    logout();
    setUser(null);
    setToken(null);
    history.push("/");
  });

  return null;
}

export default Logout;
