export const dynamic = "force-dynamic"

import DoneTodos from "@/components/DoneTodos";
import DueTodos from "@/components/DueTodos";
import ExportReport from "@/components/ExportReport";
import { getWeeklyTodos } from "@/lib/actions/todo.actions"

function areAllArraysEmpty(obj) {
    return Object.values(obj).every(arr => Array.isArray(arr) && arr.length === 0);
}

const WeeklyReportPage = async () => {

    const { done_weekly, due_weekly } = await getWeeklyTodos()

    return (
        <div className="pt-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex justify-between items-center gap-2 flex-1">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Weekly Report
                    </h2>
                    <ExportReport title="Export" type="weekly" />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4 items-start">
                {!areAllArraysEmpty(due_weekly) && <DueTodos title="Due This Week" todos={due_weekly} />}
                {!areAllArraysEmpty(done_weekly) && <DoneTodos title="Completed This Week" todos={done_weekly} />}
            </div>
        </div>
    )
}

export default WeeklyReportPage