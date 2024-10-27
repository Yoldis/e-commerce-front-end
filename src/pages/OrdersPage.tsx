import { TableOrderItems, TableComponent } from "../components";
import { useOrderStoreHook } from "../hooks";

export const OrdersPage = () => {
  const { orders } = useOrderStoreHook();

  return (
    <div className="animate__animated animate__fadeIn mb-16 ">
      <TableComponent
        title="Mis Ordenes"
        description="Revisa tus ordenes"
        tHead={["No. Orden", "Total", "Estatus", "Creado", "Acciones"]}
      >
        <>
          {orders.map((order) => (
            <TableOrderItems key={order.id} order={order} />
          ))}
        </>
      </TableComponent>
    </div>
  );
};
