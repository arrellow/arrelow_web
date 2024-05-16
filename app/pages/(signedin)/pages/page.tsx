"use client";
import React from "react";
import Header from "../property/header";
import { MessageDataWithStats } from "@/app/lib/constants";
import { createColumnHelper } from "@tanstack/react-table";
import { MessageData } from "@/app/lib/constants";
import Table from "@/app/components/tables/Table";
import { getTableStatus } from "@/app/lib/table-status";
import { Badge } from "@/app/components/badge";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Pages = () => {
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
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }: any) => {
        const rowStatus = row.getValue("status");
        const statusInfo = getTableStatus(rowStatus as any);
        return (
          <Badge variant={statusInfo.variant as any}>{statusInfo.title}</Badge>
        );
      },
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }: any) => {
        return (
          <div className="flex space-x-2 text-[24px]">
            <button
              // onClick={() => editRow(row.original.id)} // Assuming each row has a unique 'id' field
              className="text-blue-600 hover:text-blue-800"
            >
              <FaRegEdit />
            </button>
            <button
              // onClick={() => deleteRow(row.original.id)}
              className="text-red-600 hover:text-red-800"
            >
              <FaTrash />
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="border-primary mx-auto w-[90%] border-[1px]">
      <Header />
      <Table data={MessageDataWithStats} columns={columns} className="" />
    </div>
  );
};

export default Pages;
