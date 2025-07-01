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
import { Briefcase, BriefcaseBusiness, Building, ChevronsRight, ChevronUp, Code, Inbox, ListCheck, ListTodo, PersonStanding, Plus, Projector, User2, UserLock, UserPen } from "lucide-react";
import Link from "next/link";
import { signout } from "@/lib/actions/auth.actions";
import { useTodos } from "@/context/TodoContext";
import { Badge } from "./ui/badge";
import { categoryColor } from "@/lib/constants";

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
        <SidebarGroup>
          <SidebarGroupLabel>LISTS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/todos/personal">
                    <UserLock />
                    {/* <div className="bg-red-300 w-3 h-3 rounded-sm"></div> */}
                    Personal
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuBadge className={`${categoryColor["personal"]} rounded-sm`}>{stats.personal}</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/todos/work">
                    <Briefcase />
                    {/* <div className="bg-sky-300 w-3 h-3 rounded-sm"></div> */}
                    Work
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuBadge className={`${categoryColor["work"]} rounded-sm`}>{stats.work}</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/todos/development">
                    <Code />
                    {/* <div className="bg-amber-300 w-3 h-3 rounded-sm"></div> */}
                    Development
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuBadge className={`${categoryColor["development"]} rounded-sm`}>{stats.development}</SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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