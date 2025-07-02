"use client"

import { useState } from "react"
import PaginationControls from "./PaginationControls"
import TodoList from "./TodoList"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

const TodoListSection = ({ title, todos, paginateAfter = 2 }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const todosPerPage = paginateAfter
    const totalPages = Math.ceil(todos.length / todosPerPage)

    const startIndex = (currentPage - 1) * todosPerPage
    const currentTodos = todos.slice(startIndex, startIndex + todosPerPage)

    const todoHeightPx = 85
    const minHeight = paginateAfter * todoHeightPx

    console.log(minHeight);

    return (
        <Card className="w-full shadow-none py-4 gap-4">
            <CardHeader>
                <CardTitle>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{title}</h4>
                </CardTitle>
            </CardHeader>
            <CardContent style={{ minHeight: `${minHeight}px` }}>
                {/* <CardContent > */}
                <TodoList todos={currentTodos} />
            </CardContent>
            <CardFooter>
                <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </CardFooter>
        </Card>
    )

}

export default TodoListSection