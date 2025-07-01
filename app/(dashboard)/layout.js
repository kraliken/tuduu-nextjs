export const metadata = {
    title: "Dashboard",
};

import { cookies } from 'next/headers';
import { AppSidebar } from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getTodos, getUpcomingTodos } from '@/lib/actions/todo.actions';
import { TodoProvider } from '@/context/TodoContext';

export default async function DashboardLayout({ children }) {

    const cookieStore = await cookies();
    const userRaw = cookieStore.get('user_data')?.value;

    const user = userRaw ? JSON.parse(userRaw) : null

    const todos = await getUpcomingTodos();

    return (
        <TodoProvider todos={todos}>
            <SidebarProvider>
                <AppSidebar user={user} />
                <main className="w-full">
                    <Navbar />
                    <div className="px-4">{children}</div>
                </main>
            </SidebarProvider>
        </TodoProvider>

    );
}
