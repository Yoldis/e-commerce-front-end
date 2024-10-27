import React from "react"
import { IoStar } from "react-icons/io5"



export const Star = React.memo(() => {
    return (
      <div className="flex gap-2 my-1">
          {
          Array(Math.floor(Math.random() * 5) + 1).fill(0).map((e, i) => (
              <IoStar key={e + i} className="text-yellow-400" /> 
          ))
          }
      </div>
    )
  }
)
