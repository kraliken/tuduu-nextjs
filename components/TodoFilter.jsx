"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const TodoFilter = ({ currentStatus, category }) => {
  const pathname = usePathname()

  const statuses = ["backlog", "progress", "done"]

  const getFilterUrl = (status) => {
    const params = new URLSearchParams()
    if (status) params.set("status", status)
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className="flex justify-between sm:justify-start gap-2 items-center mb-6">
      <div className="flex gap-2 items-center">
        {statuses.map((s) => (
          <Link key={s} href={getFilterUrl(s)}>
            <Button
              variant={s === currentStatus ? "default" : "outline"}
              size="sm"
              className={cn(
                "rounded-full capitalize px-2 sm:px-3 h-8 min-w-[70px] sm:min-w-[80px]", // vagy amennyi elég
                "focus-visible:ring-0 focus-visible:ring-offset-0", // elnyomja az outline-t
              )}
            >
              {s}
            </Button>
          </Link>
        ))}

      </div>
      <div>
        {currentStatus && (
          <Link href={pathname}>
            <Button
              variant="secondary"
              size="sm"
              className="ml-4"
            >
              Clear Filters
            </Button>
          </Link>
        )}

      </div>
    </div>
  )
}

export default TodoFilter
