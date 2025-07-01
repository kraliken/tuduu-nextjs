import TodoListItem from "./TodoListItem"
import { Separator } from "./ui/separator"

const TodoList = ({ todos }) => {

    return (
        <>
            {todos.map(todo => {
                return (
                    <TodoListItem key={todo.id} todo={todo} />

                )
            })}
        </>
    )
}

export default TodoList