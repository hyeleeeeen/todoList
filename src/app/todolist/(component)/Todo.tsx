"use client";

import useTodoStore from "@/store/formdata";
import style from "./todo.module.css";
import type { Todo } from "@/model/store";

type Props = {
  todoList: Todo[];
};

export default function Todo({ todoList }: Props) {
  const { removeTodo, completedTodo } = useTodoStore();

  const toggleTodo = (id: number) => {
    completedTodo(id);
    console.log("Completed Todo ID:", id);
    console.log("Updated Todo List:", todoList); // 상태 변경 후의 목록 출력
  };

  const sortedTodoList = todoList?.slice().sort((a, b) => {
    // 우선적으로 완료되지 않은 항목이 위에 오도록 정렬
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }

    // 완료 상태가 동일한 경우, 날짜를 기준으로 오름차순 정렬
    const dateA = new Date(a.date || "").getTime();
    const dateB = new Date(b.date || "").getTime();
    return dateA - dateB;
  });

  return (
    <ul>
      {sortedTodoList?.map((todo) => (
        <li
          key={todo.id}
          className={todo.completed ? style.completedBox : style.todoBox}
        >
          <div className={style.contentBox} onClick={() => toggleTodo(todo.id)}>
            <div className={style.content}>{todo.content}</div>
            <div className={style.date}>
              {todo.date} {todo.date ? "종료" : ""}{" "}
            </div>
          </div>
          <div>
            <button
              onClick={() => removeTodo(todo.id)}
              className={style.deleteBtn}
            >
              삭제
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
