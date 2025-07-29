import { useContext } from "react"

import { AuthContext } from "@/contexts/auth"

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  return context;
}