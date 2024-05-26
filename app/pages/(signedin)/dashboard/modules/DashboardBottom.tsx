import { createColumnHelper } from "@tanstack/react-table";
import { MessageData, PropertiesTable } from "@/app/lib/constants";
import Table from "@/app/components/tables/Table";

const DAshboardBottom = () => {
  const columnHelper = createColumnHelper();
  const columns = [
    {
      accessorKey: "serialNumber",
      header: "#",
      cell: ({ row }: any) => {
        const serialNumber = row.index + 1;
        return <span className="font-bold uppercase">{serialNumber}</span>;
      },
      enableHiding: false,
    },
    columnHelper.accessor("main", {
      header: "URL",
    }),
    columnHelper.accessor("stat", {
      header: "VIEWS",
    }),
  ];

  return (
    <div className="mt-12 flex flex-col justify-between gap-6 md:flex-row">
      <div className="w-full md:w-[50%]">
        <Table
          data={PropertiesTable}
          columns={columns}
          className="border-[1px] border-[rgba(0,0,0,0.1)]"
        />
      </div>
      <div className="w-full md:w-[50%]">
        <Table
          data={PropertiesTable}
          columns={columns}
          className="border-[1px] border-[rgba(0,0,0,0.1)]"
        />
      </div>
    </div>
  );
};

export default DAshboardBottom;
