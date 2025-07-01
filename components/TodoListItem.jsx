import { categoryColor, statusColor } from "@/lib/constants";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator"
import TodoSheet from "./TodoSheet";
import { Button } from "./ui/button";
import { ChevronRight, Pencil } from "lucide-react";
import TodoForm from "./TodoForm";

const TodoListItem = ({ todo }) => {

    return (
        <div>
            <Separator />
            <div className="p-4 pl-6">
                <div className="flex items-center justify-between">
                    <h4 className="scroll-m-20 text-md font-semibold tracking-tight mb-3">
                        {todo.title}
                    </h4>
                    <TodoSheet
                        title="Task:"
                        trigger={
                            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        }
                    >
                        <TodoForm category={todo.category} todo={todo} />
                    </TodoSheet>

                </div>
                <div className="flex items-center gap-4">
                    <Badge className={categoryColor[todo.category]}>{todo.category}</Badge>
                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
                    <Badge className={statusColor[todo.status]}>{todo.status}</Badge>
                </div>
            </div>
        </div>
    )
}

export default TodoListItem