import TodoList from "./TodoList"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const TodoListSection = ({ title, todos }) => {

    return (
        <Card className="w-full shadow-none">
            <CardHeader>
                <CardTitle>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{title}</h4>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <TodoList todos={todos} />
            </CardContent>
        </Card>
    )

}

export default TodoListSection