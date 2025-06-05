import React from "react";

const TableHead = () => {
  const tableHeads = ["Tickler", "Price", "Amount"];

  return (
    <thead className="text-xs uppercase bg-[#645f1a54] border-b border-[#645f1a88] text-neutral-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Crypto name
        </th>
        {tableHeads?.map((head) => (
          <th key={head} scope="col" className="px-3 py-3 text-center">
            {head}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
