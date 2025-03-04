import ListItem from "./ListItem";

type ListCompleteProps = {
  completeList: string[];
  onClick: (word: string) => void;
};

export default function ListComplete({
  completeList,
  onClick,
}: ListCompleteProps) {
  const decoration = "btn btn-success text-decoration-line-through";

  const theList = completeList.map((item, index) => (
    <div key={index} className="d-grid gap-2 mb-2">
      <ListItem onClick={onClick} item={item} decoration={decoration} />
    </div>
  ));

  return (
    <>
      <h3>COMPLETED</h3>
      {theList}
    </>
  );
}
