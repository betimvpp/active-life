import { UserContext } from "@/Contexts/UserContext";
import { useContext } from "react";

export function useUserContext(){
  return useContext(UserContext);
}