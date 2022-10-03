interface Props {
  onChangePage(page: string): void;
}

function AdminNavBar({ onChangePage }: Props) {
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Question</button>
      <button onClick={() => onChangePage("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
