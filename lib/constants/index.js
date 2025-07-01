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
    personal: "bg-red-300 text-red-600 dark:text-red-900",
    work: "bg-sky-300 text-sky-900",
    development: "bg-amber-300 text-amber-900",
};
