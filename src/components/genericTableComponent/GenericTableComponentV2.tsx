import React from "react";

// Generic component can be used to represent a table of any elements
// TItem is used to Create strongly typed objects on the fly
interface TableProps<TItem> {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
}

export const Table = <TItem,>(props: TableProps<TItem>) => {
  return null;
};

const GenericTableComponentV2 = () => {
  return (
    <div>
      <Table
        items={[{ id: "1", firstName: "Samuel" }]}
        // renderItem picks up what we have passed to the table.
        renderItem={(item) => {
          return null;
        }}
      ></Table>
      <Table
        items={[{ id: "1", name: "TypeScript" }]}
        // renderItem picks up what we have passed to the table.
        renderItem={(item) => {
          return null;
        }}
      ></Table>
    </div>
  );
};

export default GenericTableComponentV2;
