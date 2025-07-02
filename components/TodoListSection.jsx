"use client"

import { useState } from "react"
import PaginationControls from "./PaginationControls"
import TodoList from "./TodoList"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

const TodoListSection = ({ title, todos, allTodosCount, paginateAfter = 2 }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const todosPerPage = paginateAfter
    const totalPages = Math.ceil(todos.length / todosPerPage)

    const startIndex = (currentPage - 1) * todosPerPage
    const currentTodos = todos.slice(startIndex, startIndex + todosPerPage)

    const todoHeightPx = 93
    const minHeight = paginateAfter * todoHeightPx

    const isFiltered = todos.length === 0 && allTodosCount > 0
    const isEmpty = todos.length === 0 && allTodosCount === 0

    return (
        <Card className="w-full shadow-none py-4 gap-4">
            <CardHeader>
                <CardTitle>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{title}</h4>
                </CardTitle>
            </CardHeader>
            {isEmpty && (
                <CardContent>
                    <div className="w-full col-span-full flex justify-center py-8 text-gray-500">
                        {title === "Tomorrow" ? "No todos for tomorrow." : `No todos for ${title.toLowerCase()}. Add one above!`}
                    </div>
                </CardContent>
            )}
            {isFiltered && (
                <CardContent>
                    <div className="w-full col-span-full flex justify-center py-8 text-gray-500">
                        No todos match the current filter.
                    </div>
                </CardContent>
            )}
            {!isEmpty && !isFiltered && (
                <CardContent style={{ minHeight: `${minHeight}px` }}>
                    <TodoList todos={currentTodos} />
                </CardContent>
            )}
            {!isEmpty && !isFiltered && <CardFooter>
                <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </CardFooter>}
        </Card>
    )

}

export default TodoListSection