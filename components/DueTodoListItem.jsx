import { categoryColor, statusColor } from "@/lib/constants";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator"
import TodoSheet from "./TodoSheet";
import { Button } from "./ui/button";
import { BadgeCheckIcon, ChevronRight, Clock, Pencil } from "lucide-react";
import TodoForm from "./TodoForm";

const DueTodoListItem = ({ todo }) => {


    return (
        <div>
            <Separator />
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <h4 className="scroll-m-20 text-md font-semibold tracking-tight mb-3">
                        {todo.title}
                    </h4>

                </div>
                <div className="flex items-center gap-4">

                    <Badge variant="secondary">
                        <Clock className="w-4 h-4" />
                        {new Date(todo.created_at).toLocaleDateString("hu-HU")}
                    </Badge>

                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
                    <Badge variant={`${todo.status === "backlog" ? "secondary" : todo.status === "progress" ? "secondary" : "outline"}`} >
                        {todo.status === "done" && <BadgeCheckIcon />}
                        {todo.status}
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default DueTodoListItem