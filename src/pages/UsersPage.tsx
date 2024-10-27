import { TableComponent, TableUsers } from "../components"
import { useUserStoreHook } from "../hooks"



export const UsersPage = () => {

    const{users} = useUserStoreHook();

  return (
    <div className="animate__animated animate__fadeIn mb-16 ">
          <TableComponent
            title="Usuarios"
            description="Todos los perfiles registrados"
            tHead={["Usuario", "Role"]}
        >
            <>
            {users.map((user) => (
                <TableUsers key={user.id} user={user} />
            ))}
        </>
      </TableComponent>
    </div>
  )
}
