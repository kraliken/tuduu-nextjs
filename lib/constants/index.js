import { Briefcase, CalendarDays, CalendarRange, CheckCheck, CheckSquare, Code, Sunrise, UserLock } from "lucide-react";

export const APP_NAME =
    process.env.NEXT_PUBLIC_APP_NAME || 'Todo';

export const APP_DESCRIPTION =
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    'A modern todo app built with Next.js';

export const SERVER_URL =
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export const statusColor = {
    backlog: "bg-muted text-muted-foreground",
    progress: "bg-muted text-muted-foreground",
    done: "bg-muted text-muted-foreground",
    // progress: "bg-yellow-100 text-yellow-800",
    // done: "bg-green-100 text-green-800",
};

export const categoryColor = {
    personal: "bg-green-300 text-green-600 dark:text-green-900",
    work: "bg-sky-300 text-sky-900",
    development: "bg-purple-300 text-purple-900",
};

export const listLinks = [
    {
        label: "Personal",
        icon: <UserLock />,
        href: "/todos/personal",
        colorKey: "bg-green-300 text-green-600 dark:text-green-900 rounded-sm",
    },
    {
        label: "Work",
        icon: <Briefcase />,
        href: "/todos/work",
        colorKey: "bg-sky-300 text-sky-900 rounded-sm",
    },
    {
        label: "Development",
        icon: <Code />,
        href: "/todos/development",
        colorKey: "bg-purple-300 text-purple-900 rounded-sm",
    },
]

export const reportLinks = [
    {
        label: "Today",
        icon: <CalendarDays />,
        href: "/reports/today",
    },
    {
        label: "Tomorrow",
        icon: <Sunrise />,
        href: "/reports/tomorrow",
    },
    {
        label: "This Week",
        icon: <CalendarRange />,
        href: "/reports/current-week",
    },
]

