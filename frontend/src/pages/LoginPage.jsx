import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react"


const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email:"",
    password:"",
  });
  const queryClient = useQueryClient();
  const {mutation} = useMutation();
  return (
    <div>LoginPage</div>
  )
}

export default LoginPage