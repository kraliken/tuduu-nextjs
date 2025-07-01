'use client';

import { createContext, useContext } from 'react';

const TodoContext = createContext();

export function TodoProvider({ children, todos, lists }) {
    return (
        <TodoContext.Provider value={{ todos, lists }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodos() {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error('useTodos must be used within a TodoProvider');
    }
    return context;
}