"use client";
import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { MessageData } from "@/app/lib/constants";
import Table from "@/app/components/tables/Table";
import Header from "./header";

const Property = () => {
  const columnHelper = createColumnHelper();
  const columns = [
    {
      accessorKey: "serialNumber",
      header: "ID",
      cell: ({ row }: any) => {
        const serialNumber = row.index + 1;
        return <span className="font-bold uppercase">{serialNumber}</span>;
      },
      enableHiding: false,
    },
    columnHelper.accessor("messageHeader", {
      header: "URL",
    }),
    columnHelper.accessor("messageParagraph", {
      header: "VIEWS",
    }),
  ];
  return (
    <main className="border-primary mx-auto w-[90%] border-[1px]">
      <Header />
      <section>
        <Table data={MessageData} columns={columns} />
      </section>
    </main>
  );
};

export default Property;
