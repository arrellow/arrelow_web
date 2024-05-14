import { createColumnHelper } from "@tanstack/react-table";
import { MessageData } from "@/app/lib/constants";
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
    columnHelper.accessor("messageHeader", {
      header: "Name Of Organizatiin",
    }),
    columnHelper.accessor("messageParagraph", {
      header: "Organization Description",
    }),
    columnHelper.accessor("messageRead", {
      header: "Organization Description",
    }),
  ];

  return (
    <div className="mt-12">
      <Table data={MessageData} columns={columns} />
    </div>
  );
};

export default DAshboardBottom;
