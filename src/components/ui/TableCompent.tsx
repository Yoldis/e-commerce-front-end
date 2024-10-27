import { TableHeader } from "../order/TableHeader";

interface Props {
  title: string;
  description: string;
  tHead: string[];
  children: React.ReactNode;
}

export const TableComponent = ({ children, tHead, title,description }: Props) => {
  return (
    <div className="mx-5 my-3">
      <div className="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
            <p className="text-slate-500">{description}</p>
          </div>
        </div>
        <div className="p-0 overflow-scroll">
          <table className="w-full mt-4 text-left table-auto min-w-max">
            <TableHeader tHead={tHead} />
            {children}
          </table>
        </div>
      </div>
    </div>
  );
};
