

interface Props {
    title:string,
}

export const Title = ({title}:Props) => {

  return (
    <h1 className={`underline text-slate-700 text-xl font-bold`}>{title}</h1>
  )
}
