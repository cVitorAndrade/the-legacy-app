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
import { Coins, Timer } from "lucide-react";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 border-b border-border">
          <div className="flex items-center justify-between gap-2 px-4 w-full">
            <div className="flex items-center gap-2 ">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
            </div>

            {/* <div className="w-full flex justify-between items-center"> */}
            {/* <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden lg:block">
                    <BreadcrumbLink
                      href="#"
                      className="font-heading tracking-wider font-semibold"
                    >
                      Build Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator className="hidden md:block">
                    /
                  </BreadcrumbSeparator>

                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-heading tracking-wider font-semibold">
                      Data Fetching
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb> */}

            <div className="hidden lg:flex items-center gap-2.5">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-heading font-bold text-muted-foreground tracking-widest uppercase mb-0.5">
                  Posição Atual
                </span>
                <span className="font-heading font-bold leading-none text-accent-foreground">
                  13º LUGAR
                </span>
              </div>

              <Separator orientation="vertical" className="h-6" />

              <div className="flex items-center gap-3 bg-muted/50 px-3 py-1.5 rounded-md border border-border">
                <Timer className="h-4 w-4 text-muted-foreground" />

                <div className="flex flex-col">
                  <span className="text-[10px] font-heading font-medium text-muted-foreground tracking-widest uppercase leading-none mb-0.5">
                    VS Titans
                  </span>
                  <span className="font-heading font-bold text-sm tabular-nums text-foreground leading-none">
                    02:14:30
                  </span>
                </div>

                <img
                  className="w-6 h-6 object-contain"
                  data-alt="club shield icon with sharp professional edges in neon green and black"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWMk2_kJyIw6fyg0YHHgsISxRhAB-dxCaWFpA_UjqDzz6hKeaHM_WFew80lh3p5LygyGgjm5Bt0-aEzaT7pmHVtDt50Obx5fVh0_4JYzbRxXD0XOvdPGjjavCLHk6iCjm1GQuFcwq3nsNrxKKeXhsEHeZNmrALiq0P28OFdHq-8NhzqWGsWTKazPWEg4SLY8WA0Ah3xkWouH4QpEfUGVQJQTpNoGMdic55ovFgkpB5sA1Z74jF9NpOpnoDvl2PMU1jBi2bWf_0RTRQ"
                />
              </div>

              <Separator orientation="vertical" className="h-6" />

              <div className="flex items-center gap-2 px-3 py-1.5 border rounded-md border-white/5 bg-black/20">
                <div className="w-2 h-2 rounded-full bg-accent-foreground drop-shadow-[0_0_8px_rgba(156,255,147,0.6)] animate-pulse" />
                <span className="text-[10px] font-heading font-bold text-accent-foreground tracking-widest uppercase">
                  Mercado: Aberto
                </span>
              </div>
            </div>
            

            <div className="flex w-fit items-center gap-2.5 rounded-md border border-white/5 bg-black/20 px-3 py-1.5">
              <Coins className="size-4 text-accent-foreground drop-shadow-[0_0_8px_rgba(156,255,147,0.6)]" />
              <span className="font-heading text-lg font-bold tracking-wide text-accent-foreground drop-shadow-[0_0_8px_rgba(156,255,147,0.6)]">
                € 142.000.000,00
              </span>
            </div>
          </div>
          {/* </div> */}
        </header>
        <main className="px-4 flex-1 pb-4 flex">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
