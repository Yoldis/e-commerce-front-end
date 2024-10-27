


interface Props {
    sizes:string[],
    selectdsize:string,
    onSelectSize:(size:string) => void
}

export const SizesProduct = ({sizes, onSelectSize, selectdsize}:Props) => {
  
  return (
    <div className="flex gap-4 items-center flex-wrap">
        {
            sizes.map(size => (
            <button onClick={() => onSelectSize(size)} key={size} 
              className={`sm:flex-grow-0 flex-grow px-4 py-2 text-sm rounded-full transition-all ease-linear hover:bg-black hover:text-white active:scale-95 ${selectdsize === (size) ? 'bg-black text-white' : 'bg-gray-100'}`}>
                {size}</button>
            ))
        }
    </div>
  )
}
