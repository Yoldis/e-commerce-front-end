import { UserInterface } from "../../interface"


interface Props {
    user:UserInterface
}

export const TableUsers = ({user}:Props) => {

  return (
    <tbody>
      <tr>
        <td className="p-4 border-b border-slate-200">
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-slate-700">{user.name}</p>
              <p className="text-sm text-slate-500">{user.email}</p>
            </div>

        </td>
        <td className="p-4 border-b border-slate-200">
          <p className="text-sm text-slate-500">{user.role}</p>
        </td>
      </tr>
    </tbody>
  )
}
