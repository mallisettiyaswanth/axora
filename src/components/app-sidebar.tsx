"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/shadcn/sidebar";
import { MdNotifications, MdSpaceDashboard } from "react-icons/md";
import { IoLogoInstagram, IoSettingsOutline } from "react-icons/io5";
import { MdWorkspacesFilled } from "react-icons/md";
import { SidebarUpgradeIndicator } from "./sidebar-upgrade-indicator";
import { IoPerson } from "react-icons/io5";

const data = {
  profile: [
    {
      title: "Profile",
      url: "/profile",
      icon: IoPerson,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: IoSettingsOutline,
    },
  ],
  navigations: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: MdSpaceDashboard,
    },
    {
      title: "Instagram",
      url: "/instagram",
      icon: IoLogoInstagram,
    },
    {
      title: "Automations",
      url: "/automations",
      icon: MdWorkspacesFilled,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: MdNotifications,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <h2 className="w-full items-center justify-center flex text-2xl p-2 tracking-wider font-bold">
          Axora
        </h2>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup className="pt-3">
          <SidebarMenu className="gap-2">
            {data.navigations.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <>
                    <a
                      href={item.url}
                      className="font-medium flex px-2 py-1 gap-2 items-center rounded-md text-sm"
                    >
                      {item.icon && (
                        <item.icon className="text-primary w-4 h-4" />
                      )}
                      {item.title}
                    </a>
                  </>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.profile.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <>
                    <a
                      href={item.url}
                      className="font-medium flex px-2 py-1 gap-2 items-center rounded-md text-sm"
                    >
                      {item.icon && <item.icon className="text-primary" />}
                      {item.title}
                    </a>
                  </>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <SidebarUpgradeIndicator />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
