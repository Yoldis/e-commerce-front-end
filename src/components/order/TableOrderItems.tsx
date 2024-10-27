import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { OrderInterface } from "../../interface";


interface Props {
    order:OrderInterface
}

export const TableOrderItems = ({order}:Props) => {
    const{isPaid, createdAt, unitTotal, total, id} = order;
    

  return (
    <tbody>
      <tr>
        <td className="p-4 border-b border-slate-200">
            <p className="text-sm font-semibold text-slate-700">{id?.split('-')[4]}</p>

        </td>
        <td className="p-4 border-b border-slate-200">
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-slate-700">Cantidad x({unitTotal})</p>
            <p className="text-sm text-slate-500">Total: $ {total}</p>
          </div>
        </td>
        <td className="p-4 border-b border-slate-200">
          <div className="w-max">
            <div className={`
                    relative grid items-center px-2 py-1 font-sans text-xs font-bold  uppercase rounded-md select-none whitespace-nowrap  ${isPaid ? 'text-green-900 bg-green-500/20' : 'text-red-900 bg-red-500/20'}
                `}>
              <span className="">{isPaid ? "Pagado" : "No pagado"}</span>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-slate-200">
          <p className="text-sm text-slate-500">{new Date(createdAt ?? '').toDateString()}</p>
        </td>
        <td className="p-4 border-b border-slate-200">
          <Link to={`/order?id=${id}`}
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <IoEyeSharp size={20} />
          </Link>
        </td>
      </tr>
    </tbody>
  );
};
