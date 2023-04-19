import React from "react";

interface TableProps {
  items: { id: string }[];
  renderItem: (item: { id: string }) => React.ReactNode;
}

export const Table = (props: TableProps) => {
  return null;
};

const GenericTableComponent = () => {
  return (
    <div>
      <Table
        items={[{ id: "1" }]}
        renderItem={(item) => {
          return null;
        }}
      ></Table>
    </div>
  );
};

export default GenericTableComponent;
