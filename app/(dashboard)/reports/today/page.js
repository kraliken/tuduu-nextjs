import DoneTodos from "@/components/DoneTodos"
import DueTodayTodos from "@/components/DueTodayTodos"
import { Badge } from "@/components/ui/badge"
import { getTodayTodos } from "@/lib/actions/todo.actions"

function areAllArraysEmpty(obj) {
    return Object.values(obj).every(arr => Array.isArray(arr) && arr.length === 0);
}

const TodayReportPage = async () => {

    const { done_today, due_today } = await getTodayTodos()

    return (
        <div className="pt-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-2 mb-6">

                <div className="flex items-center gap-2">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Today Report
                    </h2>
                    {/* <Badge variant="secondary">{upcoming.this_week.length}</Badge> */}

                </div>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
                {!areAllArraysEmpty(due_today) && <DueTodayTodos title="Due Today" todos={due_today} />}
                {!areAllArraysEmpty(done_today) && <DoneTodos title="Completed Today" todos={done_today} />}
            </div>
        </div>
    )
}

export default TodayReportPage