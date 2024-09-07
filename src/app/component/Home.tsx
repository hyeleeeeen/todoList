"use client";

import Link from "next/link";
import useTodoStore from "@/store/formdata";
import style from "./home.module.css";
import { RiCalendarTodoFill } from "react-icons/ri";
import type { Todo } from "@/model/store";

export default function HomeComponent() {
  const { todoList } = useTodoStore();

  const today: string = new Date().toISOString().split("T")[0];
  const filteredTodo: Todo[] = todoList.filter((todo) => todo.date === today);

  return (
    <main className={style.main}>
      <div className={style.container}>
        <h1>오늘의 할일</h1>
        <div className={style.todoBox}>
          {filteredTodo.length != 0 ? (
            filteredTodo.map((todo) => (
              <div key={todo.id} className={style.todo}>
                <RiCalendarTodoFill />
                <div className={style.todoContent}>{todo.content}</div>
              </div>
            ))
          ) : (
            <p>오늘의 할일이 없습니다.</p>
          )}
        </div>
        <Link href={`/todolist`} className={style.link}>
          MORE
        </Link>
      </div>
    </main>
  );
}
