import styles from "./page.module.css";
import TodoList from "./(component)/TodoList";


export default function TodoListPage() {
  return (
    <main className={styles.main}>
      <TodoList />
    </main>
  );
}
