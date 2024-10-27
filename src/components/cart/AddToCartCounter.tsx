import React from "react"
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5"


interface Props {
    counter:number,
    onCounter:(operation:string) => void,

    size:number,
    className?:React.StyleHTMLAttributes<HTMLButtonElement['className']>
}


export const AddToCartCounter = React.memo(({size, className, counter, onCounter}:Props) => {

    return (
      <div className="bg-gray-100 flex items-center rounded-full">
          <button onClick={() => onCounter('remove')} className={`${className?.className} active:scale-75 transition-all`}><IoRemoveSharp size={size} /></button>
          <span className="w-6 text-center ">{counter}</span>
          <button onClick={() => onCounter('add')} className={`${className?.className} active:scale-75 transition-all`}><IoAddSharp size={size} /></button>
      </div>
    )
  }
)
