import { useContext } from "react";
import { Context as AuthContext } from "../hook/context/AuthContext";

const { token } = useContext(AuthContext)


 export const Authorization = {
  headers: {
    Authorization: `Bearer ${token}`,
  }
}