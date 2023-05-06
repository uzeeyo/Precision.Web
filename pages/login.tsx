import { NextPage } from "next";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import ButtonOutline from "../components/ButtonOutline";
import Head from "next/head";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import router from "next/router";

const Login: NextPage = () => {
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const credentialsChanged: FormEventHandler = (
    e: FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.currentTarget.name]: e.currentTarget.value as string,
    });
  };

  const onSubmit: MouseEventHandler = (e) => {
    e.preventDefault();
    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((res) => {
      if (res.ok) {
        router.push("/dashboard");
      } else {
        //setInternalErrorHidden(false);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-[auto,_auto] bg-slate-800 md:min-w-[25rem] md:max-w-[50rem] mx-4 md:mx-auto rounded-lg overflow-hidden">
        <form className="flex flex-col p-8 ">
          <div className="mx-auto text-3xl font-ubuntu my-4 text-slate-200">
            Portal Login
          </div>
          <TextInput
            id="email"
            name="email"
            placeholder="E-Mail"
            className="mb-4"
            type="email"
            onChange={credentialsChanged}
          />
          <TextInput
            id="password"
            name="password"
            placeholder="Password"
            className="mb-8"
            type="password"
            onChange={credentialsChanged}
          />
          <div className="ml-auto mb-4">
            <label htmlFor="remember">Remember me?</label>
            <input id="remember" className="ml-4" type="checkbox" />
          </div>
          <ButtonOutline className="mx-auto mt-8" onClick={onSubmit}>
            Login
          </ButtonOutline>
        </form>
        <div className="relative">
          <div className="absolute bg-black bg-opacity-70 w-full h-full">
            <div className="m-auto flex flex-col items-center h-full justify-center py-8">
              <div className="text-3xl font-ubuntu mb-8">First time?</div>
              <ButtonOutline onClick={() => {}}>Sign Up</ButtonOutline>
            </div>
          </div>
          <img src="/images/soldering.jpg"></img>
        </div>
      </div>
    </>
  );
};

export default Login;
