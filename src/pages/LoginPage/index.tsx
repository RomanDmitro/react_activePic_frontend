import LoginComponent from "@/components/LoginComponent";

import { useAppDispatch } from "@/store";
import { SignInDataTypes } from "@/types";

import { signIn } from "@/store/authSlice";

function LoginPage() {
  const dispatch = useAppDispatch();

  const dispatchSignIn = (data: SignInDataTypes) => {
    dispatch(signIn(data));
  };

  return <LoginComponent dispatchSignIn={dispatchSignIn} />;
}

export default LoginPage;
