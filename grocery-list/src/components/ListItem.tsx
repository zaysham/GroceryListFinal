type ListItemProps = {
  item: string;
  onClick: (word: string) => void;
  decoration: string;
};

export default function ListItem({ item, onClick, decoration }: ListItemProps) {
  return (
    <>
      <button onClick={() => onClick(item)} className={decoration}>
        {item}
      </button>
    </>
  );
}
