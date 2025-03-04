import ListItem from "./ListItem";

type ListRequiredProps = {
  requiredList: string[];
  onClick: (word: string) => void;
};

export default function ListRequired({
  requiredList,
  onClick,
}: ListRequiredProps) {
  const decoration = "btn btn-primary";

  const theList = requiredList.map((item, index) => (
    <div key={index} className="d-grid gap-2 mb-2">
      <ListItem
        onClick={() => onClick(item)}
        item={item}
        decoration={decoration}
      />
    </div>
  ));

  return (
    <>
      <h3>REQUIRED</h3>
      {theList}
    </>
  );
}
