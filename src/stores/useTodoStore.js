import { create } from "zustand";

// Define zustand store

export const useTodoStore = create((set) => ({
    ewans: [],

    addTodo: (todo) => set((state) => ({
        ewans: [...state.ewans, todo]
    })),

    removeTodo: (todo) => set((state) => ({ ewans: state.ewans.filter((item) => item !== todo) }))

}))