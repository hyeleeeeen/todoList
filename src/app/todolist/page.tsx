import styles from "./page.module.css";
import TodoList from "./(component)/TodoList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make your TodoList !",
  description: "My todoList",
};

export default function TodoListPage() {
  return (
    <main className={styles.main}>
      <TodoList />
    </main>
  );
}
