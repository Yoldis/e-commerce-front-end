import { TableOrderAdminItems, TableComponent } from "../components";
import { useOrderStoreHook } from "../hooks";

export const OrdersAdminPage = () => {
  const { ordersAdmin } = useOrderStoreHook();

  return (
    <div className="animate__animated animate__fadeIn mb-16 ">
      <TableComponent
        title="Todas las Ordenes"
        description="Ordenes de todos los usuarios"
        tHead={["No. Orden", "Usuario", "Total", "Estatus", "Creado"]}
      >
        <>
          {ordersAdmin.map((order) => (
            <TableOrderAdminItems key={order.id} order={order} />
          ))}
        </>
      </TableComponent>
    </div>
  );
};
