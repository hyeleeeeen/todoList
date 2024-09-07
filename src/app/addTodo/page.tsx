import TodoListPage from "../todolist/page";
import AddTodoModal from "../@modal/(.)addTodo/page";

export default function addTodo() {
  return (
    // 병렬 라우트
    <>
      <TodoListPage />
      <AddTodoModal />
    </>
  );
}
