
import { ChangeEvent } from "react";
import { useForm, useUserStoreHook} from "../hooks"
import { IoSaveSharp } from "react-icons/io5";
import { Title } from "../components";



interface FormInput {
    name:string,
    email:string
}


export const ProcfilePage = () => {
    const{user, loading, updateUserDispatch} = useUserStoreHook();
    const {isDirty, email, name, onChangeInput, setIsDirty} = useForm<FormInput>({email:user?.email?? '', name:user?.name ?? ''});

    const onSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateUserDispatch(name);
        setIsDirty(false);
    }

  return (
    <div className="bg-gray-200  animate__animated animate__fadeIn sm:py-12 min-h-screen">
      <div className="ml-4">
        <Title title="Datos de Usuario" />
      </div>
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form onSubmit={onSubmit} className="px-5 py-7">

            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Nombre
            </label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={onChangeInput}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />

            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
                readOnly={true}
                value={email}
                name="email"
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                onChange={onChangeInput}
            />


            <button
              disabled={loading || !isDirty}
              type="submit"
              className="transition duration-200 bg-sky-500 hover:bg-sky-600 focus:bg-sky-600 focus:shadow-sm focus:ring-4 focus:ring-sky-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center flex justify-center items-center"
            >
              <span className="inline-block mr-2">Guardar</span>
                <IoSaveSharp size={17}/>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
