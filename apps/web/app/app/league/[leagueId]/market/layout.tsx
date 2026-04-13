import { Coins, Gavel, Timer } from "lucide-react";

export default function MarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full py-4">
      <div className="mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-1 mb-2 bg-primary/10 p-1.5 rounded-md border border-primary w-fit">
            <span className="size-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#9cff93]"></span>
            <span className="text-accent-foreground font-heading font-bold text-[10px] tracking-widest uppercase -mb-0.5">
              Janela de Transferências Aberta
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading uppercase font-black tracking-tighter text-white mb-2">
            Mercado de{" "}
            <span className=" text-accent-foreground drop-shadow-[0_0_8px_rgba(156,255,147,0.6)]">
              Transferências
            </span>
          </h2>
          <p className="text-muted-foreground font-medium max-w-xl">
            Explore o mercado global, faça lances estratégicos e construa o
            elenco perfeito para dominar a liga. Gerencie suas negociações em
            tempo real.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-panel border rounded-md border-primary/40 hover:border-primary  p-6 flex items-start justify-between group transition-all duration-300">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(156,255,147,0.6)]"></span>
              Orçamento Disponível
            </span>
            <div className="text-3xl font-heading font-bold text-white">
              € 100.5M
            </div>
            <div className="text-[10px] font-bold text-primary tracking-tight uppercase">
              Liquidez Disponível: 22.3%
            </div>
          </div>
          <span className="text-primary/40 group-hover:text-primary transition-colors text-3xl">
            <Coins />
          </span>
        </div>

        <div className="glass-panel rounded-md border-secondary/40 hover:border-secondary border p-6 flex items-start justify-between group transition-all duration-300">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_8px_rgba(0,227,253,0.8)]"></span>
              Valor em Lances Ativos
            </span>
            <div className="text-3xl font-heading font-bold text-white">
              € 24.5M
            </div>
            <div className="text-[10px] font-bold text-secondary tracking-tight uppercase">
              12 Negociações Abertas
            </div>
          </div>
          <span className="text-secondary/40 group-hover:text-secondary transition-colors text-3xl">
            <Gavel />
          </span>
        </div>

        <div className="glass-panel border-tertiary/40 hover:border-tertiary border p-6 flex items-start justify-between rounded-md group transition-all duration-300">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse shadow-[0_0_8px_rgba(255,110,129,0.8)]"></span>
              Fechamento da Janela
            </span>
            <div className="text-3xl font-heading font-bold tabular-nums">
              04:12:58
            </div>
            <div className="text-[10px] font-bold text-tertiary tracking-tight uppercase">
              Fim do Período de Lances
            </div>
          </div>
          <span className="text-tertiary/40 group-hover:text-tertiary transition-colors text-3xl">
            <Timer />
          </span>
        </div>
      </div>

      <div className="border-b border-border flex items-center gap-8 mb-6">
        <button className="pb-4 text-accent-foreground border-b-2 border-accent-foreground font-bold transition-colors relative drop-shadow-[0_0_8px_rgba(156,255,147,0.6)]">
          Mercado Aberto
        </button>

        <button className="text-muted-foreground pb-4 hover:text-foreground font-medium transition-colors flex items-center gap-2">
          Meus Lances
          <span className="bg-tertiary text-tertiary-foreground text-[10px] font-black px-1.5 py-0.5 rounded-sm">
            03
          </span>
        </button>

        <button className="text-muted-foreground pb-4 hover:text-foreground font-medium transition-colors">
          Minhas Vendas
        </button>

        <button className="text-muted-foreground pb-4 hover:text-foreground font-medium transition-colors flex items-center gap-2">
          Lista de Observação
          <span className="bg-secondary text-secondary-foreground text-[10px] font-black px-1.5 py-0.5 rounded-sm">
            03
          </span>
        </button>
      </div>

      {children}
    </main>
  );
}
