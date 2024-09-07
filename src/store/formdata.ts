import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { TodoStore } from "@/model/store"


// Zustand 스토어 생성
const useTodoStore = create<TodoStore>()(
    persist(
        (set) => ({
            todoList: [],
            addTodo: (todo) => set((prev) => ({ todoList: [...prev.todoList, todo] })),
            removeTodo: (id) =>
                set((prev) => ({ todoList: prev.todoList.filter((todo) => todo.id !== id) })),
            completedTodo: (id) =>
                set((prev) => ({
                    todoList: prev.todoList.map((todo) =>
                        todo.id === id ? { ...todo, completed: !todo.completed } : todo
                    ),
                })),
        }),
        {
            name: 'todo-storage',
            storage: createJSONStorage(() => localStorage), // createJSONStorage 사용
        }
    )
);

export default useTodoStore;
