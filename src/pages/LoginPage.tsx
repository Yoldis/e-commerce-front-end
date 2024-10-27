import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import { loginSchema } from "../lib";
import { Link } from "react-router-dom";
import { useUserStoreHook } from "../hooks";

interface FormInput {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { email, password, onChangeInput } = useForm<FormInput>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormInput>({ email: "", password: "" });
  

  const { loginDispatch, loading } = useUserStoreHook();

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    setErrors({ email: "", password: "" });
    e.preventDefault();
    const resp = loginSchema.safeParse({ email, password });
    if (!resp.success) {
      const { fieldErrors } = resp.error.flatten();
      setErrors({
        email: fieldErrors.email ? fieldErrors.email[0] : "",
        password: fieldErrors.password ? fieldErrors.password[0] : "",
      });
      return;
    }

    loginDispatch(resp.data.email, resp.data.password);
    setErrors({ email: "", password: "" });
  };

  return (
    <div className="bg-gray-200  animate__animated animate__fadeIn sm:py-12 min-h-screen">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form onSubmit={onSubmit} className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <span className="text-red-500 text-xs font-semibold">
              {errors.email}
            </span>
            <input
              value={email}
              name="email"
              type="email"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              onChange={onChangeInput}
            />

            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <span className="text-red-500 text-xs font-semibold">
              {errors.password}
            </span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChangeInput}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />

            <button
              disabled={loading}
              type="submit"
              className="transition duration-200 bg-sky-500 hover:bg-sky-600 focus:bg-sky-600 focus:shadow-sm focus:ring-4 focus:ring-sky-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
          <div className="text-center text-sm font-semibold py-5">
            <h1 className="mb-3">No tienes cuenta?</h1>
            <Link
              to={"/auth/register"}
              className="text-sky-500 hover:underline hover:decoration-black transition-all ease-linear"
            >
              Registrate Aqui!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
