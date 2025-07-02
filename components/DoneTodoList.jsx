import { categoryColor } from "@/lib/constants"
import DoneTodoListItem from "./DoneTodoListItem"
import { Badge } from "./ui/badge"

const DoneTodoList = ({ category, todos }) => {
    return (
        <>
            <div className="flex items-center gap-3 mb-4" >
                <h6 className="text-lg font-semibold">{category}</h6>
                <Badge className={`w-4 h-4 ${categoryColor[category.toLowerCase()]} rounded-sm`}></Badge>
            </div>
            {todos.map(todo => (
                <DoneTodoListItem key={todo.id} todo={todo} />
            ))}
        </>
    )
}

export default DoneTodoList