import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/shadcn/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-full p-2 flex flex-col">
        <div className="h-full flex-1 rounded-lg bg-black/10 backdrop-blur-md">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
