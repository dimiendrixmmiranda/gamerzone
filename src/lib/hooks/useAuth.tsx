import { useContext } from "react";
import Auth from "../context/Auth";

const useAuth = () => useContext(Auth);

export default useAuth;