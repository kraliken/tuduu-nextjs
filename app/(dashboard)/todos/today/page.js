"use client"

import { getTodos } from '@/lib/actions/todo.actions';
import PersonalTodos from '@/components/PersonalTodos';
import TodoSheet from '@/components/TodoSheet';
import TodoForm from '@/components/TodoForm';
import { Suspense } from 'react';
import TodosLoading from '../../loading';
import TodoFilter from '@/components/TodoFilter';
import { Badge } from '@/components/ui/badge';
import TodoListSection from '@/components/TodoListSection';
import { useTodos } from '@/context/TodoContext';

const TodayTodosPage = () => {

    const { todos } = useTodos();
    const { upcoming, stats } = todos


    return (
        <div className="pt-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-2">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Today
                    </h2>
                    <Badge variant="secondary">{upcoming.today.length}</Badge>

                </div>
                <TodoSheet title="New Task:" triggerLabel="Add New Task">
                    <TodoForm />
                </TodoSheet>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                    <TodoListSection title="Today" todos={upcoming.today} />
                </div>


            </div>
        </div >
    );
};

export default TodayTodosPage;