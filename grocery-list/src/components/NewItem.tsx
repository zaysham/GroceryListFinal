import { useState } from "react";

type NewItemProps = {
  onClick: (item: string) => void;
};

export default function NewItem({ onClick }: NewItemProps) {
  const [itemValue, setItemValue] = useState("");

  function handleClick() {
    onClick(itemValue.trim());
    setItemValue("");
  }

  return (
    <>
      <div>
        <input
          id="newItemText"
          type="text"
          placeholder="New Item"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
        />
        <button onClick={handleClick} className="btn btn-success my-2 mx-3">
          Add Item
        </button>
      </div>
    </>
  );
}
