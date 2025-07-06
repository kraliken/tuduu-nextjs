import DueTodoList from "./DueTodoList"
import { Badge } from "./ui/badge"

const { Card, CardHeader, CardTitle, CardContent } = require("./ui/card")


const DueTodos = ({ title, todos }) => {

    const { development, work, personal } = todos

    const totalDue = Object.values(todos).reduce((acc, list) => acc + list.length, 0)

    return (
        <Card className="w-full shadow-none py-4 gap-4">
            <CardHeader>
                <CardTitle>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight  flex items-center gap-2">
                        {title}
                        <Badge variant="secondary">{totalDue}</Badge>
                    </h4>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {development.length > 0 && <DueTodoList category="Development" todos={development} />}
                {personal.length > 0 && <DueTodoList category="Personal" todos={personal} />}
                {work.length > 0 && <DueTodoList category="Work" todos={work} />}

            </CardContent>
        </Card>
    )
}

export default DueTodos