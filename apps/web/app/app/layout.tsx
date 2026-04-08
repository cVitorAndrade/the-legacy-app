import { AppSidebar } from "../../components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/ui/components/ui/breadcrumb";
import { Separator } from "@repo/ui/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@repo/ui/components/ui/sidebar";
import { Coins } from "lucide-react";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />

            <div className="w-full flex justify-between items-center">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Build Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <div className="flex w-fit items-center gap-2.5 rounded-md border border-white/5 bg-black/20 px-3 py-1.5">
                <Coins className="size-4 text-accent-foreground drop-shadow-[0_0_8px_rgba(156,255,147,0.6)]" />
                <span className="font-heading text-lg font-bold tracking-wide text-accent-foreground drop-shadow-[0_0_8px_rgba(156,255,147,0.6)]">
                  € 142.000.000,00
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className="px-4 flex-1 pb-4 flex">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
