
// TodoList 아이템의 타입 정의
export interface Todo {
    id: number;
    content: string;
    completed: boolean; // 완료여부
    date: string | null;
}

// Zustand 스토어의 타입 정의
export interface TodoStore {
    todoList: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (id: number) => void;
    completedTodo: (id: number) => void; // 완료여부
}