import { categoryColor } from "@/lib/constants"
import DoneTodoListItem from "./DoneTodoListItem"
import DueTodoListItem from "./DueTodoListItem"
import { Badge } from "./ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { ChevronDown } from "lucide-react"

const DueTodoList = ({ category, todos }) => {
    return (
        <Collapsible className="group/collapsible">
            <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">

                <div className="flex items-center gap-3" >
                    <h6 className="text-lg font-semibold">{category}</h6>
                    <Badge className={`w-4 h-4 ${categoryColor[category.toLowerCase()]} rounded-sm`}></Badge>
                </div>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
                {todos.map(todo => (
                    <DueTodoListItem key={todo.id} todo={todo} />
                ))}
            </CollapsibleContent>

        </Collapsible>
    )
}

export default DueTodoList