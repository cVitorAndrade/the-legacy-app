import { Button } from "@repo/ui/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import {
  Clock,
  Gavel,
  Globe,
  Sparkles,
  Star,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import AuctionFiltersSidebar from "./_components/auction-filters-sidebar";
import PlayerAuctionCard from "./_components/player-auction-card";

export default function MarketPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-heading font-bold tracking-tight text-foreground">
          JOGADORES DISPONÍVEIS{" "}
          <span className="text-muted-foreground ml-2 font-normal">
            (1.432)
          </span>
        </h3>

        {/* <div className="flex gap-4 items-center">
          <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-2">
            Ordenar Por:
            <Select defaultValue="ending_soon">
              <SelectTrigger className="w-[200px] border-border text-foreground focus:ring-1 focus:ring-primary focus:outline-none transition-colors">
                <SelectValue placeholder="Ordenar por..." />
              </SelectTrigger>

              <SelectContent className="">
                <SelectGroup>
                  <SelectItem value="ending_soon" className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 " />
                      <span>Fim Próximo</span>
                    </div>
                  </SelectItem>

                  <SelectItem value="newest" className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 " />
                      <span>Mais Recentes</span>
                    </div>
                  </SelectItem>

                  <SelectItem value="highest_ovr" className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 " />
                      <span>Maior Overall</span>
                    </div>
                  </SelectItem>

                  <SelectItem value="highest_bid" className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Maior Lance</span>
                    </div>
                  </SelectItem>

                  <SelectItem value="lowest_bid" className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 " />
                      <span>Menor Lance</span>
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </span>

          <AuctionFiltersSidebar />
        </div> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
        <PlayerAuctionCard />

        <div className="group relative bg-card overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,227,115,0.25)] hover:border-pos-goalkeeper/20 border border-border">
          <div className="absolute top-4 left-4 z-10 flex flex-col items-center">
            <span className="font-heading text-4xl font-black text-pos-goalkeeper leading-none drop-shadow-[0_0_8px_rgba(255,227,115,0.6)]">
              94
            </span>
            <span className="text-xs font-bold text-pos-goalkeeper uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(255,227,115,0.6)]">
              GOL
            </span>
          </div>

          <div className="player-clip relative h-64 bg-linear-to-b from-surface-container-high to-surface-container">
            <img
              alt="Star striker in action"
              className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
              data-alt="Athletic professional soccer player in a vibrant jersey celebrating a goal, dramatic stadium lighting and motion blur"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTwvWEe4E4G1gyF2uuuIhlmLKtnirctYXyUaR7UYuDz-vQCA-2yEAAEtJjDtI1EWDgM42bLlKox5KqoTJPF5R5E9wskbBz1nkzm0q6lh1HFem6bC1wSsSc2qEZQN5GLGKLFdhGVHYvCVrOamyGEhLSmxaZOQA4hPYaZAuHuoF1-tG86jBhjAmcBL584rvRgvg2_yyLsGS9ZgamMgmlOeKi-9TBn1Wy7W1DZsCHED3mAmFN6whEj770plwcHuHWfNxLQHDHvzUu5OiA"
            />

            <div className="absolute bottom-4 left-0 w-full px-4">
              <div className="backdrop-blur-md bg-white/10 px-3 py-2 rounded border-l-4 border-pos-goalkeeper">
                <h3 className="font-heading font-bold text-lg leading-none truncate">
                  THIBAUT COURTOIS
                </h3>
                <div className="flex items-center mt-1 space-x-2">
                  <Globe className="size-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Belgium
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-goalkeeper font-bold uppercase">
                  PAC
                </p>
                <p className="font-heading text-pos-goalkeeper text-lg font-bold tracking-wider">
                  97
                </p>
              </div>
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-goalkeeper font-bold uppercase">
                  SHO
                </p>
                <p className="font-heading text-pos-goalkeeper text-lg font-bold tracking-wider">
                  92
                </p>
              </div>
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-goalkeeper font-bold uppercase">
                  DRI
                </p>
                <p className="font-heading text-pos-goalkeeper text-lg font-bold tracking-wider">
                  95
                </p>
              </div>
            </div>

            <div className="space-y-2 border-t border-border pt-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-muted-foreground font-bold uppercase">
                  Lance Atual
                </span>
                <span className="font-heading font-bold text-pos-goalkeeper drop-shadow-[0_0_8px_rgba(255,227,115,0.6)]">
                  € 2,450,000
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[10px] text-muted-foreground font-bold uppercase">
                  Tempo Restante
                </span>
                <span className="font-heading font-bold text-foreground">
                  02:45
                </span>
              </div>
            </div>

            <Button className="w-full py-2 bg-surface-container-highest border border-pos-goalkeeper/50 hover:bg-pos-goalkeeper hover:text-primary-foreground text-pos-goalkeeper font-bold text-xs uppercase tracking-widest transition-all">
              <Gavel /> Dar Lance
            </Button>
          </div>
        </div>

        <div className="group relative bg-card overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(125,229,255,0.25)] hover:border-pos-defender/20 border border-border">
          <div className="absolute top-4 left-4 z-10 flex flex-col items-center">
            <span className="font-heading text-4xl font-black text-pos-defender leading-none drop-shadow-[0_0_8px_rgba(125,229,255,0.6)]">
              94
            </span>
            <span className="text-xs font-bold text-pos-defender uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(125,229,255,0.6)]">
              LAT
            </span>
          </div>

          <div className="player-clip relative h-64 bg-linear-to-b from-surface-container-high to-surface-container">
            <img
              alt="Star striker in action"
              className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
              data-alt="Athletic professional soccer player in a vibrant jersey celebrating a goal, dramatic stadium lighting and motion blur"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTwvWEe4E4G1gyF2uuuIhlmLKtnirctYXyUaR7UYuDz-vQCA-2yEAAEtJjDtI1EWDgM42bLlKox5KqoTJPF5R5E9wskbBz1nkzm0q6lh1HFem6bC1wSsSc2qEZQN5GLGKLFdhGVHYvCVrOamyGEhLSmxaZOQA4hPYaZAuHuoF1-tG86jBhjAmcBL584rvRgvg2_yyLsGS9ZgamMgmlOeKi-9TBn1Wy7W1DZsCHED3mAmFN6whEj770plwcHuHWfNxLQHDHvzUu5OiA"
            />

            <div className="absolute bottom-4 left-0 w-full px-4">
              <div className="backdrop-blur-md bg-white/10 px-3 py-2 rounded border-l-4 border-pos-defender">
                <h3 className="font-heading font-bold text-lg leading-none truncate">
                  TRENT ALEXANDER ARNOLD
                </h3>
                <div className="flex items-center mt-1 space-x-2">
                  <Globe className="size-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    England
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-defender font-bold uppercase">
                  PAC
                </p>
                <p className="font-heading text-pos-defender text-lg font-bold tracking-wider">
                  97
                </p>
              </div>
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-defender font-bold uppercase">
                  SHO
                </p>
                <p className="font-heading text-pos-defender text-lg font-bold tracking-wider">
                  92
                </p>
              </div>
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-defender font-bold uppercase">
                  DRI
                </p>
                <p className="font-heading text-pos-defender text-lg font-bold tracking-wider">
                  95
                </p>
              </div>
            </div>

            <div className="space-y-2 border-t border-border pt-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-muted-foreground font-bold uppercase">
                  Lance Atual
                </span>
                <span className="font-heading font-bold text-pos-defender drop-shadow-[0_0_8px_rgba(125,229,255,0.6)]">
                  € 2,450,000
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[10px] text-muted-foreground font-bold uppercase">
                  Tempo Restante
                </span>
                <span className="font-heading font-bold text-foreground">
                  02:45
                </span>
              </div>
            </div>

            <Button className="w-full py-2 bg-surface-container-highest border border-pos-defender/50 hover:bg-pos-defender hover:text-primary-foreground text-pos-defender font-bold text-xs uppercase tracking-widest transition-all">
              <Gavel /> Dar Lance
            </Button>
          </div>
        </div>

        <div className="group relative bg-card overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(156,255,147,0.25)] hover:border-pos-midfielder/20 border border-border">
          <div className="absolute top-4 left-4 z-10 flex flex-col items-center">
            <span className="font-heading text-4xl font-black text-pos-midfielder leading-none drop-shadow-[0_0_8px_rgba(156,255,147,0.6)]">
              94
            </span>
            <span className="text-xs font-bold text-pos-midfielder uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(156,255,147,0.6)]">
              MEI
            </span>
          </div>

          <div className="player-clip relative h-64 bg-linear-to-b from-surface-container-high to-surface-container">
            <img
              alt="Star striker in action"
              className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
              data-alt="Athletic professional soccer player in a vibrant jersey celebrating a goal, dramatic stadium lighting and motion blur"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTwvWEe4E4G1gyF2uuuIhlmLKtnirctYXyUaR7UYuDz-vQCA-2yEAAEtJjDtI1EWDgM42bLlKox5KqoTJPF5R5E9wskbBz1nkzm0q6lh1HFem6bC1wSsSc2qEZQN5GLGKLFdhGVHYvCVrOamyGEhLSmxaZOQA4hPYaZAuHuoF1-tG86jBhjAmcBL584rvRgvg2_yyLsGS9ZgamMgmlOeKi-9TBn1Wy7W1DZsCHED3mAmFN6whEj770plwcHuHWfNxLQHDHvzUu5OiA"
            />

            <div className="absolute bottom-4 left-0 w-full px-4">
              <div className="backdrop-blur-md bg-white/10 px-3 py-2 rounded border-l-4 border-pos-midfielder">
                <h3 className="font-heading font-bold text-lg leading-none truncate">
                  RAPHAEL VEIGA
                </h3>
                <div className="flex items-center mt-1 space-x-2">
                  <Globe className="size-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    BRAZIL
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-midfielder font-bold uppercase">
                  PAC
                </p>
                <p className="font-heading text-pos-midfielder text-lg font-bold tracking-wider">
                  97
                </p>
              </div>
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-midfielder font-bold uppercase">
                  SHO
                </p>
                <p className="font-heading text-pos-midfielder text-lg font-bold tracking-wider">
                  92
                </p>
              </div>
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-midfielder font-bold uppercase">
                  DRI
                </p>
                <p className="font-heading text-pos-midfielder text-lg font-bold tracking-wider">
                  95
                </p>
              </div>
            </div>

            <div className="space-y-2 border-t border-border pt-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-muted-foreground font-bold uppercase">
                  Lance Atual
                </span>
                <span className="font-heading font-bold text-pos-midfielder drop-shadow-[0_0_8px_rgba(156,255,147,0.6)]">
                  € 2,450,000
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[10px] text-muted-foreground font-bold uppercase">
                  Tempo Restante
                </span>
                <span className="font-heading font-bold text-foreground">
                  02:45
                </span>
              </div>
            </div>

            <Button className="w-full py-2 bg-surface-container-highest border border-pos-midfielder/50 hover:bg-pos-midfielder hover:text-primary-foreground text-pos-midfielder font-bold text-xs uppercase tracking-widest transition-all">
              <Gavel /> Dar Lance
            </Button>
          </div>
        </div>

        <div className="group relative bg-card overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,71,87,0.25)] hover:border-pos-forward/20 border border-border">
          <div className="absolute top-4 left-4 z-10 flex flex-col items-center">
            <span className="font-heading text-4xl font-black text-pos-forward leading-none drop-shadow-[0_0_8px_rgba(255,71,87,0.6)]">
              94
            </span>
            <span className="text-xs font-bold text-pos-forward uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(255,71,87,0.6)]">
              ATA
            </span>
          </div>

          <div className="player-clip relative h-64 bg-linear-to-b from-surface-container-high to-surface-container">
            <img
              alt="Star striker in action"
              className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
              data-alt="Athletic professional soccer player in a vibrant jersey celebrating a goal, dramatic stadium lighting and motion blur"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTwvWEe4E4G1gyF2uuuIhlmLKtnirctYXyUaR7UYuDz-vQCA-2yEAAEtJjDtI1EWDgM42bLlKox5KqoTJPF5R5E9wskbBz1nkzm0q6lh1HFem6bC1wSsSc2qEZQN5GLGKLFdhGVHYvCVrOamyGEhLSmxaZOQA4hPYaZAuHuoF1-tG86jBhjAmcBL584rvRgvg2_yyLsGS9ZgamMgmlOeKi-9TBn1Wy7W1DZsCHED3mAmFN6whEj770plwcHuHWfNxLQHDHvzUu5OiA"
            />

            <div className="absolute bottom-4 left-0 w-full px-4">
              <div className="backdrop-blur-md bg-white/10 px-3 py-2 rounded border-l-4 border-pos-forward">
                <h3 className="font-heading font-bold text-lg leading-none truncate">
                  KYLIAN MBAPPÉ
                </h3>
                <div className="flex items-center mt-1 space-x-2">
                  <Globe className="size-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    France
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-forward font-bold uppercase">
                  PAC
                </p>
                <p className="font-heading text-pos-forward text-lg font-bold tracking-wider">
                  97
                </p>
              </div>
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-forward font-bold uppercase">
                  SHO
                </p>
                <p className="font-heading text-pos-forward text-lg font-bold tracking-wider">
                  92
                </p>
              </div>
              <div className="bg-[#24252b] border border-sidebar py-2 rounded">
                <p className="text-[9px] text-pos-forward font-bold uppercase">
                  DRI
                </p>
                <p className="font-heading text-pos-forward text-lg font-bold tracking-wider">
                  95
                </p>
              </div>
            </div>

            <div className="space-y-2 border-t border-border pt-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-muted-foreground font-bold uppercase">
                  Lance Atual
                </span>
                <span className="font-heading font-bold text-pos-forward drop-shadow-[0_0_8px_rgba(255,71,87,0.6)]">
                  € 2,450,000
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[10px] text-muted-foreground font-bold uppercase">
                  Tempo Restante
                </span>
                <span className="font-heading font-bold text-foreground">
                  02:45
                </span>
              </div>
            </div>

            <Button className="w-full py-2 bg-surface-container-highest border border-pos-forward/50 hover:bg-pos-forward hover:text-primary-foreground text-pos-forward font-bold text-xs uppercase tracking-widest transition-all">
              <Gavel /> Dar Lance
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
