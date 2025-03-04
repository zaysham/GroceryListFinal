type ClearListProps = {
  onClick: () => void;
};

export default function ClearList({ onClick }: ClearListProps) {
  return (
    <>
      <button className="btn btn-danger mt-2 mb-3" onClick={onClick}>
        Delete List
      </button>
    </>
  );
}
