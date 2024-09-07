"use client";

import { useRouter } from "next/navigation";
import style from "./todoList.module.css";
import { TbHome } from "react-icons/tb";
import Todo from "./Todo";
import useTodoStore from "@/store/formdata";
import Link from "next/link";

export default function TodoList() {
  const router = useRouter();
  const onClickgohome = () => {
    router.push(`/`);
  };

  const todoList = useTodoStore((state) => state.todoList);

  return (
    <div className={style.container}>
      <header className={style.header}>
        <TbHome className={style.homeIcon} onClick={onClickgohome} />
        <h1>TodoList</h1>
        <Link href="/addTodo" className={style.addBtn}>
          +
        </Link>
      </header>

      <main className={style.main}>
        {todoList.length > 0 ? (
          <Todo todoList={todoList} />
        ) : (
          <p>할일을 추가해보세요!</p>
        )}
      </main>
    </div>
  );
}