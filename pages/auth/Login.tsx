import { Form, Formik, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";
import { CREATE_USER } from "../../graphql/Mutations";
import { useLazyQuery, useMutation } from "@apollo/client";
import { VERIFY_PASSWORD_QUERY } from "../../graphql/Queries";

const INPUTS = [
  {
    name: "name",
    placeholder: "Name",
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
  },
];
function Login() {
  const [verifyPassword] = useLazyQuery(VERIFY_PASSWORD_QUERY);

  const router = useRouter();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password is too short - should be 8 characters minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
      .required("Required"),
  });

  return (
    <div className="flex items-center justify-center w-full h-screen font-roboto ">
      <div
        className="flex flex-col align-middle justify-center bg-white w-auto shadow-xl border-primary 
        border-[2px] rounded-[10px] p-14"
      >
        <h1 className="text-center font-bold text-2xl mb-10">Hello Friend!</h1>
        <Formik
          initialValues={{ name: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setFieldError }) => {
            verifyPassword({
              variables: { name: values.name, password: values.password },
              onCompleted: (res) => {
                if (!res.verifyPassword.userFound) {
                  setFieldError("name", "User not found");
                } else if (!res.verifyPassword.passwordCorrect) {
                  setFieldError("password", "Incorrect password");
                } else {
                  router.push("/");
                }
              },
            });
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col items-center gap-8">
              {INPUTS.map((input) => (
                <>
                  <div className="flex flex-col ">
                    <Field
                      {...input}
                      className="w-[370px] px-[14px] h-14 outline-none  bg-white border-primary border-[2px] rounded-[10px]"
                    />
                    <ErrorMessage name={input.name}>
                      {(msg) => (
                        <span className="text-xs text-red-600 font-semibold mt-[5px]">
                          {msg}
                        </span>
                      )}
                    </ErrorMessage>
                  </div>
                </>
              ))}
              <span className="text-myGray font-semibold text-sm">
                you don’t have an account?{" "}
                <span
                  onClick={() => router.push("/auth/Register")}
                  className="underline cursor-pointer"
                >
                  sign up
                </span>
              </span>
              <button
                type="submit"
                className="bg-black w-[370px] h-14 rounded-[10px]   text-xl text-white font-bold"
              >
                Sign in
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
