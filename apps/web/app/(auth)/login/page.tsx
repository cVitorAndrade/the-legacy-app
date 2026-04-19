import {
  Users,
  Globe,
  Handshake,
  Gamepad,
  Coins,
  Flame,
  Megaphone,
  Trophy,
  LucideIcon,
  Gavel,
  TrendingUp,
} from "lucide-react";
import { NumberTicker } from "@repo/ui/components/ui/number-ticker";
import { Marquee } from "@repo/ui/components/ui/marquee";
import LoginForm from "./_components/login-form";

type PlatformMetrics = {
  activeUsers: number;
  createdCommunities: number;
  matchesPlayed: number;
  playersTraded: number;
};

export const PLATFORM_METRICS: PlatformMetrics = {
  activeUsers: 14285,
  createdCommunities: 942,
  matchesPlayed: 58419,
  playersTraded: 134802,
};

type TickerMessage = {
  id: string;
  Icon: LucideIcon;
  tag: string;
  color: string;
  league: string;
  message: string;
};

export const TICKER_MESSAGES: TickerMessage[] = [
  {
    id: "evt-1",
    Icon: Coins,
    tag: "LEILÃO",
    color: "text-amber-400",
    league: "Liga Master BR",
    message: "Adriano Imperador arrematado por $ 85M após guerra de lances.",
  },
  {
    id: "evt-2",
    Icon: Flame,
    tag: "RECORDE",
    color: "text-rose-500",
    league: "Copa Nostalgia",
    message: "Cristiano Ronaldo quebra o mercado e é contratado por $ 289M.",
  },
  {
    id: "evt-3",
    Icon: Handshake,
    tag: "TRANSFERÊNCIA",
    color: "text-emerald-400",
    league: "Superliga Europeia",
    message: "Rooney deixa o elenco e assina com Real Madrid por $ 149M.",
  },
  {
    id: "evt-4",
    Icon: Trophy,
    tag: "COMPETITIVO",
    color: "text-yellow-400",
    league: "Torneio Continental",
    message:
      "Final definida! TIME_A X TIME_B. O grande campeão levará prêmio de $ 500M.",
  },
  {
    id: "evt-7",
    Icon: Gavel,
    tag: "LEILÃO",
    league: "Liga Pro",
    color: "text-emerald-400",
    message: "Disputa iniciada por Zidane.",
  },
  {
    id: "evt-11",
    Icon: Handshake,
    tag: "TRANSFERÊNCIA",
    league: "Copa BR",
    color: "text-blue-400",
    message: "Beckham transferido para o Barcelona.",
  },
  {
    id: "evt-13",
    Icon: TrendingUp,
    tag: "VALOR",
    league: "Liga Master",
    color: "text-lime-400",
    message: "Preço de Ronaldinho em leilão ultrapassa $ 200M.",
  },
];

export default function Login() {
  return (
    <div className="flex w-full h-screen bg-background text-foreground overflow-hidden">
      <div className="hidden lg:flex flex-col relative w-[60%] bg-background border-r border-border/50 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            alt="Estádio escuro com iluminação verde focada no gramado e arquibancadas"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmqm9OqyGh68260VJcwnk43ZMtj5h5XPimJGjg1A_y01JZ4FPZGc_lc5DQHWo8kWobBXKG1IejZTRWBsoq4tikCj22ZHApjn_5E_q_9AD6G6I41NAmmPFbDucZG-ep0SFX1s8Wf2VYO7xyuUX3Gte47pGyQNbmlDbo5LdoN_biZauLwvIsvv1iLO5dWRyEjKPtQhilcJm6ATKCHv4KHMCemWsMDrQ-exQb4hXRJR4IjL-TiRBtkmCEzTgtUVDf2pXo-J3cp9tuMcJe"
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background/90 to-background z-10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJ0cmFuc3BhcmVudCIvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiB4PSIxIiB5PSIxIi8+Cjwvc3ZnPg==')] opacity-50 z-10"></div>
        </div>

        <div className="relative z-20 flex flex-col h-full justify-between p-8 xl:p-12 [@media(max-height:800px)]:p-6">
          <div className="flex items-center space-x-3">
            <span className="font-heading font-bold text-2xl xl:text-3xl tracking-tighter text-primary underline italic">
              THE LEGACY
            </span>
          </div>

          <div className="max-w-2xl mt-auto mb-auto">
            <h1 className="font-heading font-black text-5xl xl:text-7xl [@media(max-height:800px)]:text-4xl uppercase leading-none tracking-tighter text-foreground mb-4 xl:mb-6 [@media(max-height:800px)]:mb-3 drop-shadow-[0_0_40px_rgba(34,197,94,0.3)]">
              O TOPO
              <br />
              TE AGUARDA
            </h1>
            <p className="font-sans text-base xl:text-xl text-muted-foreground font-medium leading-relaxed max-w-md border-l-4 border-primary pl-4">
              A temporada não para. Faça login para gerenciar sua equipe,
              acompanhar os leilões e manter seu clube no topo.
            </p>

            <div className="mt-8 xl:mt-16 [@media(max-height:800px)]:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
              <div className="bg-card/30 backdrop-blur-md p-4 xl:p-6 [@media(max-height:800px)]:p-4 rounded-r-lg rounded-l-sm border border-white/5 border-l-2 border-l-primary/70 hover:border-l-primary hover:bg-card/40 transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center gap-2 xl:gap-3 mb-2 xl:mb-3 text-muted-foreground relative z-10">
                  <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                    <Users className="w-3 h-3 xl:w-4 xl:h-4" />
                  </div>
                  <p className="font-sans text-[10px] xl:text-xs uppercase tracking-widest font-semibold">
                    Usuários Ativos
                  </p>
                </div>
                <p className="font-heading text-3xl xl:text-4xl [@media(max-height:800px)]:text-2xl font-bold text-foreground tracking-tight relative z-10">
                  <NumberTicker end={PLATFORM_METRICS.activeUsers} />
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-md p-4 xl:p-6 [@media(max-height:800px)]:p-4 rounded-r-lg rounded-l-sm border border-white/5 border-l-2 border-l-secondary/70 hover:border-l-secondary hover:bg-card/40 transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-linear-to-r from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center gap-2 xl:gap-3 mb-2 xl:mb-3 text-muted-foreground relative z-10">
                  <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-500">
                    <Globe className="w-3 h-3 xl:w-4 xl:h-4" />
                  </div>
                  <p className="font-sans text-[10px] xl:text-xs uppercase tracking-widest font-semibold">
                    Comunidades Criadas
                  </p>
                </div>
                <p className="font-heading text-3xl xl:text-4xl [@media(max-height:800px)]:text-2xl font-bold text-foreground tracking-tight relative z-10">
                  <NumberTicker end={PLATFORM_METRICS.createdCommunities} />
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-5 xl:p-8 [@media(max-height:800px)]:p-5 transform -rotate-1 hover:rotate-0 transition-transform duration-500 ease-out shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] my-4 xl:my-0">
            <div className="flex items-center justify-between mb-4 xl:mb-6 border-b border-white/5 pb-3 xl:pb-4">
              <h2 className="font-headline text-lg xl:text-2xl font-bold tracking-tighter uppercase text-on-surface">
                Radar Global
              </h2>
              <span className="flex items-center gap-2 bg-primary/10 text-primary px-2 py-1 xl:px-3 xl:py-1 rounded-full text-[10px] xl:text-xs font-label uppercase tracking-widest border border-primary/20">
                <span className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--tw-colors-primary)]"></span>
                Ao vivo
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 xl:gap-8">
              <div className="space-y-1 xl:space-y-2">
                <p className="text-on-surface-variant font-body text-[10px] xl:text-sm uppercase tracking-wider">
                  Partidas Disputadas
                </p>
                <div className="flex items-center gap-2 xl:gap-3">
                  <Gamepad className="size-8 text-primary" />
                  <span className="font-headline text-3xl xl:text-5xl [@media(max-height:800px)]:text-3xl font-black tracking-tighter text-glow-primary">
                    <NumberTicker end={PLATFORM_METRICS.matchesPlayed} />
                  </span>
                </div>
              </div>

              <div className="space-y-1 xl:space-y-2">
                <p className="text-on-surface-variant font-body text-[10px] xl:text-sm uppercase tracking-wider">
                  Jogadores Negociados
                </p>
                <div className="flex items-center gap-2 xl:gap-3">
                  <Handshake className="text-primary size-8" />
                  <span className="font-headline text-3xl xl:text-5xl [@media(max-height:800px)]:text-3xl font-black tracking-tighter text-glow-primary">
                    <NumberTicker end={PLATFORM_METRICS.playersTraded} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-2 xl:pt-8 [@media(max-height:800px)]:pt-2">
            <div className="flex items-center space-x-2 xl:space-x-3 mb-1 xl:mb-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(156,255,147,0.6)]"></span>
              <p className="font-sans text-[8px] xl:text-[10px] text-primary uppercase tracking-widest font-bold">
                Radar da Liga
              </p>
            </div>

            <Marquee
              duration={TICKER_MESSAGES.length * 10}
              pauseOnHover
              className="bg-muted/30 backdrop-blur-sm border-2 px-3 py-2 xl:px-4 overflow-hidden rounded-md [&>div]:gap-8 -rotate-2 w-[120%] border-secondary/60 -mt-3"
            >
              {[...TICKER_MESSAGES].map(
                ({ Icon, color, id, league, message, tag }, index) => (
                  <span
                    key={`${id}-${index}`}
                    className="font-sans text-xs xl:text-sm text-muted-foreground flex gap-1.5 items-center"
                  >
                    <div className="flex gap-1.5 items-center">
                      <Icon className={`w-4 h-4 ${color}`} />
                      <span className={`font-bold ${color}`}>[{tag}]</span>
                    </div>
                    <span className={`font-bold text-muted-foreground`}>
                      [{league}]
                    </span>
                    <span className="text-muted-foreground font-medium">
                      {message}
                    </span>
                  </span>
                ),
              )}
            </Marquee>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 sm:px-16 py-12 bg-background overflow-y-auto relative z-20 border-l border-border/50">
        <div className="lg:hidden mb-12 flex justify-center">
          <span className="font-heading font-black text-2xl tracking-tighter text-primary italic uppercase underline">
            The Legacy
          </span>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
