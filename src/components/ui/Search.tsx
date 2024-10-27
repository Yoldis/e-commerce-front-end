import { IoCloseSharp, IoSearchSharp } from "react-icons/io5"
import { useForm } from "../../hooks"
import React, { useEffect } from "react";


interface Props {
    onDispatchSearch:(search:string) => void
}

export const Search = React.memo(({ onDispatchSearch }:Props) => {
    const{search, onChangeInput, onResetInput} = useForm<{search:string}>({search:''});

    useEffect(() => {
        onDispatchSearch(search)
    }, [search]);

  return (
    <div className="bg-gray-100 sm:w-[450px] px-2 flex items-center gap-2 rounded-full">
        <div>
            <IoSearchSharp size={25} className="text-gray-400" />
        </div>
        <input
            value={search}
            onChange={onChangeInput}
            name="search"
            type="text"
            className="w-full bg-gray-100 p-2 outline-none rounded-full"
            placeholder="Buscar producto"
        />
        {
            search && 
                <button onClick={() => onResetInput()}>
                    <IoCloseSharp size={20}/>
                </button>
        }
  </div>
  )
})
