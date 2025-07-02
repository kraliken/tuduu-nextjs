import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator"
import { AlarmClockOff, BadgeCheckIcon, CalendarCheck, CalendarCog, } from "lucide-react";


const toLocalDateString = (date) => {
    return date.toLocaleDateString("hu-HU", {
        timeZone: "Europe/Budapest",
    })
}

const DoneTodoListItem = ({ todo }) => {

    const deadlineDateStr = toLocalDateString(new Date(todo.deadline))
    const completedDateStr = toLocalDateString(new Date(todo.completed_at))
    const isDelayed = completedDateStr > deadlineDateStr

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
                        <CalendarCog className="w-4 h-4" />
                        {new Date(todo.deadline).toLocaleDateString("hu-HU")}
                    </Badge>

                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>

                    <Badge variant="secondary">
                        <CalendarCheck className="w-4 h-4" />
                        {new Date(todo.completed_at).toLocaleDateString("hu-HU")}
                    </Badge>

                    <Badge variant={`${isDelayed ? "destructive" : "outline"}`} >
                        {isDelayed ? <AlarmClockOff /> : <BadgeCheckIcon />}
                        {todo.status}
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default DoneTodoListItem