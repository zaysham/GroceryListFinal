import "./List.css";
import ListRequired from "./ListRequired";
import ListComplete from "./ListComplete";
import NewItem from "./NewItem";
import ClearList from "./ClearList";
import { useState } from "react";

export default function List() {
  const requiredList: string[] = [
    //array of items required
    "Apples",
    "Bananas",
    "Bread",
    "Milk",
    "Eggs",
    "Cheese",
    "Chicken Breast",
    "Rice",
    "Pasta",
    "Tomatoes",
    "Lettuce",
    "Carrots",
    "Potatoes",
    "Onions",
    "Olive Oil",
    "Cereal",
    "Yogurt",
    "Orange Juice",
    "Peanut Butter",
    "Coffee",
  ];
  const completedList: string[] = []; //array of completed items

  const [required, setRequired] = useState(requiredList); //useState for required list
  const [completed, setCompleted] = useState(completedList); //useState for completed list

  function requiredClick(word: string) {
    //filter array to remove word from required array and into completed array
    const filteredList = required.filter((list) => list !== word); //create new filtered array, prevent mutation
    setRequired(filteredList);

    const copyCompleted = [...completed, word];
    setCompleted(copyCompleted);
  }

  function completedClick(word: string) {
    //filter array to remove word from completed array and into required array
    const filteredList = completed.filter((list) => list !== word); //create new filtered array, prevent mutation
    setCompleted(filteredList);

    const copyRequired = [...required, word];
    setRequired(copyRequired);
  }

  function addItem(item: string) {
    //if variable !null, add item into beginning of required list
    if (item) {
      const tempArray = [item, ...required];

      setRequired(tempArray);
    }
  }

  function deleteList() {
    //set both arrays to empty
    setRequired([]);
    setCompleted([]);
  }

  return (
    <>
      <div className="container rounded">
        {/* Component for new item */}
        <NewItem onClick={addItem} />

        {/* Component for deleting list */}
        <ClearList onClick={deleteList} />

        <div className="row">
          <div className="col mx-3 rounded firstCol mb-4">
            {/* Component for required list */}
            <ListRequired
              onClick={requiredClick}
              requiredList={required}
            />{" "}
          </div>

          <div className="col mx-3 rounded secondCol mb-4">
            {/* Component for completed list */}
            <ListComplete onClick={completedClick} completeList={completed} />
          </div>
        </div>
      </div>
    </>
  );
}
