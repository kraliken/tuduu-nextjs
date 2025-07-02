"use client"

import TodoForm from "@/components/TodoForm";
import TodoSheet from "@/components/TodoSheet";
import { Badge } from "@/components/ui/badge";
import TodoListSection from "@/components/TodoListSection";
import { useTodos } from "@/context/TodoContext";

export default function Home() {

  const { todos } = useTodos();
  const { upcoming, stats } = todos

  return (
    <div className="pt-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-2 mb-6">
        <div className="flex items-center gap-2">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Upcoming
          </h2>
          <Badge variant="secondary">{upcoming.this_week.length}</Badge>

        </div>
        <TodoSheet title="New Task:" triggerLabel="Add New Task">
          <TodoForm />
        </TodoSheet>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
        <div className="sm:col-span-2">
          <TodoListSection title="Today" todos={upcoming.today} paginateAfter={2} />
        </div>
        <div className="">
          <TodoListSection title="Tomorrow" todos={upcoming.tomorrow} paginateAfter={2} />
        </div>
        <div className="">
          <TodoListSection title="This week" todos={upcoming.this_week} paginateAfter={2} />
        </div>
      </div>
    </div >
  );
}
