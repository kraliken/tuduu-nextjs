"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown, ChevronsRight, ChevronUp, ListCheck, ListTodo, ReceiptText, User2 } from "lucide-react";
import Link from "next/link";
import { signout } from "@/lib/actions/auth.actions";
import { useTodos } from "@/context/TodoContext";
import { listLinks, reportLinks } from "@/lib/constants";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export function AppSidebar({ user }) {

    const { todos } = useTodos();
    const { upcoming, stats } = todos


    return (
        <Sidebar collapsible="icon">

            <SidebarHeader className="py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <ListTodo />
                                <span>TuDuu</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarSeparator />

            <SidebarContent>

                <SidebarGroup>
                    <SidebarGroupLabel>TASKS</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                        <ChevronsRight />
                                        Upcoming
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuBadge>{upcoming.this_week.length}</SidebarMenuBadge>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/todos/today">
                                        <ListCheck />
                                        Today
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuBadge>{upcoming.today.length}</SidebarMenuBadge>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                        <CollapsibleTrigger>
                            <SidebarGroupLabel>LISTS
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </SidebarGroupLabel>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {listLinks.map(list => (
                                        <SidebarMenuItem key={list.label}>
                                            <SidebarMenuButton asChild>
                                                <Link href={list.href}>
                                                    {list.icon}
                                                    {list.label}
                                                </Link>
                                            </SidebarMenuButton>
                                            <SidebarMenuBadge className={list.colorKey}>{stats[list.label.toLowerCase()]}</SidebarMenuBadge>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

                <SidebarGroup>
                    <SidebarGroupLabel>REPORTS</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {reportLinks.map(report => (
                                <SidebarMenuItem key={report.label}>
                                    <SidebarMenuButton asChild>
                                        <Link href={report.href}>
                                            {report.icon}
                                            {report.label}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* <SidebarGroup>
                    <SidebarGroupLabel>FILE UPLOAD</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/upload/vodafone">
                                        <ReceiptText />
                                        Vodafone
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup> */}


            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> {user.username} <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={signout}>Sign out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>

    )
}