"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/shadcn/sidebar";
import SearchBar from "@/components/global/main-search";
import { Button } from "@/components/shadcn/button";
import { SidebarTrigger } from "@/components/shadcn/sidebar";
import { IoNotifications } from "react-icons/io5";
import { Icons } from "@/lib/constants";
import Header from "@/components/global/header";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-full p-2 flex flex-col">
        <div className="p-3 flex gap-3 items-center justify-between">
          <SearchBar />
          <SidebarTrigger className="md:hidden block" />
          <div className="flex gap-3">
            <Button className="bg-gradient-to-b from-primary to-primary/10 rounded-full">
              <Icons.automations /> Create Automation
            </Button>
            <Button className="bg-white rounded-full hover:bg-white/90">
              <Icons.notifications color="red" />
            </Button>
          </div>
        </div>
        <Header
          icon={pathname.split("/")[1]}
          slug={
            pathname.split("/")[1].toUpperCase()[0] +
            pathname.split("/")[1].toLowerCase().substring(1)
          }
        />
        <div className="h-full flex-1 rounded-lg bg-transparent">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
