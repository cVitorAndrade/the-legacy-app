import { Separator } from "@repo/ui/components/ui/separator";
import { Timer } from "lucide-react";

export default function AuctionPlayerDetails() {
  return (
    <div className="border bg-card border-input p-3 rounded-md pb-2 flex flex-col gap-4">
      <div className="flex items-center gap-6 z-10 relative flex-col sm:flex-row">
        <div className="absolute top-0 right-0 opacity-3 pointer-events-none transform -translate-y-16">
          <span className="text-[10rem] sm:text-[12rem] font-headline font-black italic select-none">
            ATA
          </span>
        </div>

        <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-border/50 shadow-inner">
          <img
            alt="Kylian Mbappé"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaJHF6ucfF3Jx8_oZxPpzbO0DV9gYQ2tZLnVADr_2mWhWEjSaKyjJ-iJOk_h6tF2kQKcFQoNKdWbu5oEygwfyovr6By4CF0s5C5zItB365Jz-SAHqRI6MfJv0ZjG0BvGB8RxYU2tUilhtGFttMlh3Gi6lfgsh-sxyNxiNmdCXWvwPZyt0ByV0teMe9PNCKocyHaTOmRrRF6SgDZAXrmvje4oX7bu7Bsa0fFdl_Ig60jbZUEtR90uYnrgPC888RaBTNrIYFZIfK8mk"
          />

          <div className="absolute bottom-0 right-0 bg-linear-to-r from-pos-forward to-background text-foreground font-heading font-black text-sm px-2 py-0.5 rounded-tl-lg shadow-[0_0_10px_hsl(var(--pos-forward)/0.5)]">
            91
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-heading font-black tracking-tighter text-foreground leading-none mb-3">
            Kylian Mbappé
          </h1>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-pos-forward/10 border border-pos-forward/40">
              <span className="text-pos-forward font-heading font-bold text-xs uppercase tracking-wider">
                ATA
              </span>
            </div>

            <div className="w-1 h-1 rounded-full bg-pos-forward"></div>

            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1">
                <span className="px-1.5 py-0.5 rounded-sm border border-pos-forward/40 bg-pos-forward/10 text-[10px] font-bold text-pos-forward hover:bg-muted transition-colors cursor-default">
                  PE
                </span>
                <span className="px-1.5 py-0.5 rounded-sm border border-pos-forward/40 bg-pos-forward/10 text-[10px] font-bold text-pos-forward hover:bg-muted transition-colors cursor-default">
                  PD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-card/40 backdrop-blur-xl bg-linear-to-b from-white/8 to-transparent border border-input ring-1 ring-inset ring-white/5 shadow-[-1px_1px_10px_rgba(0,0,0,0.2)] py-4 px-2 sm:px-8 grid grid-cols-3 divide-x divide-white/10 sm:flex sm:flex-row sm:justify-between sm:items-center sm:divide-x-0 sm:gap-2">
        <div className="flex flex-col items-center px-2 sm:px-0">
          <span className="text-muted-foreground/90 text-[10px] font-bold uppercase tracking-widest mb-1 select-none text-center">
            Altura
          </span>
          <span className="text-foreground font-heading font-black text-sm sm:text-base">
            182cm
          </span>
        </div>

        <div className="hidden sm:block w-px h-8 bg-white/8"></div>

        <div className="flex flex-col items-center px-2 sm:px-0">
          <span className="text-muted-foreground/90 text-[10px] font-bold uppercase tracking-widest mb-1 select-none text-center">
            Pé
          </span>
          <span className="text-foreground font-heading font-black uppercase text-sm sm:text-base">
            Direito
          </span>
        </div>

        <div className="hidden sm:block w-px h-8 bg-white/8"></div>

        <div className="flex flex-col items-center px-2 sm:px-0">
          <span className="text-muted-foreground/90 text-[10px] font-bold uppercase tracking-widest mb-1 select-none text-center">
            País
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <img
              className="w-4 h-3 object-cover shadow-sm"
              data-alt="close-up detail of Norway flag on high quality fabric"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu0pv6ltr_Wj0VbRWbnpOxbKPRDhE0wXU6pJYRa9fZS75ABFuOo7Ksw_5PBzQsgHklpxzeAiL1nEJ-vnvKfDv_Xz5QY_r6pGCJIgfqeqnsLUmiYQLneYEdJdCmOLuicQFtrntvt2ap5UsvvfJDnGkB4CmugWDqrGwaVdjUjXFGhwjIGzYXyYApzyJRZXMSx8qkz7po005i2Mvyyfx_l-QT4JP6gqcPNddT2ycIx_SWU1og1sKqIAsFuqBwQvPtOp2wABg6jx0ikx4"
            />
            <span className="text-foreground sm:text-base font-heading font-black uppercase leading-none">
              NOR
            </span>
          </div>
        </div>
      </div>

      <Separator className="w-full bg-border" />

      <div className="flex items-center justify-between px-4 py-2.5 bg-primary/10 border border-primary/20 rounded-md">
        <div className="flex items-center gap-3">
          <span className="size-2 -mb-0.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(156,255,147,0.6)]"></span>

          <div className="flex items-baseline gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest font-heading">
              Liderando
            </span>
            <span className="text-sm font-bold font-heading text-foreground">
              PremiumGamer_99
            </span>
          </div>
        </div>

        <span className="text-[10px] hidden sm:inline font-bold text-muted-foreground uppercase tracking-widest">
          Último lance há 3s
        </span>
      </div>

      <Separator className="w-full bg-border" />

      <div className="flex justify-between flex-col gap-4 items-end sm:items-center sm:flex-row">
        <div className="text-right self-start hidden sm:block">
          <p className="font-bold uppercase font-heading text-xs tracking-widest text-tertiary mb-1">
            Tempo Restante
          </p>
          <p className="font-heading text-2xl font-black text-tertiary flex items-center gap-2 justify-end">
            <span className="text-xl">
              <Timer />
            </span>{" "}
            00:48s
          </p>
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-end">
            Lance Atual
          </span>
          <div className="font-heading font-black text-3xl tabular-nums tracking-tighter flex items-baseline gap-1.5 drop-shadow-[0_0_8px_rgba(156,255,147,0.6)] text-primary">
            <span className="text-primary tracking-normal">€</span>
            923.000.000
          </div>
        </div>
      </div>
    </div>
  );
}
