export const dynamic = "force-dynamic"

import DoneTodos from "@/components/DoneTodos"
import DueTodos from "@/components/DueTodos";
import ExportReport from "@/components/ExportReport";
import { Button } from "@/components/ui/button";
import { getDailyTodos } from "@/lib/actions/todo.actions"
import { Download } from "lucide-react";

function areAllArraysEmpty(obj) {
    return Object.values(obj).every(arr => Array.isArray(arr) && arr.length === 0);
}

const DailyReportPage = async () => {

    const { done_today, due_today } = await getDailyTodos()

    return (
        <div className="pt-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-2 mb-6">

                <div className="flex justify-between items-center gap-2 flex-1">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Daily Report
                    </h2>
                    <ExportReport title="Export" type="daily" />
                </div>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
                {!areAllArraysEmpty(due_today) && <DueTodos title="Due Today" todos={due_today} />}
                {!areAllArraysEmpty(done_today) && <DoneTodos title="Completed Today" todos={done_today} />}
            </div>
        </div>
    )
}

export default DailyReportPage