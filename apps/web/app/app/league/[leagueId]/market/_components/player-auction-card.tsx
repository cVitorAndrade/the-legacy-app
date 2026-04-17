"use client";

import React, { useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@repo/ui/components/ui/drawer";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";
import {
  Flag,
  Gavel,
  Globe,
  Pin,
  SquareArrowOutUpRight,
  Timer,
  X,
} from "lucide-react";
import { MonetaryInput } from "@repo/ui/components/ui/monetary-input";
import PlayerAttributes from "./player-attributes";
import BidHistory from "./bid-history";
import PlayerSkillStars from "./player-skill-stars";
import AuctionPlayerDetails from "./auction-player-details";

export default function PlayerAuctionCard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDedicatedPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Navegando para página dedicada...");
  };

  const handleQuickBid = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Disparando mutação de Quick Bid...");
  };

  const handleAddToWatchlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Adicionando item a lista de desejo");
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} position="right">
      <div
        onClick={() => setIsDrawerOpen(true)}
        className="group cursor-pointer relative bg-card overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,227,115,0.25)] hover:border-pos-goalkeeper/20 border border-border"
      >
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

          <Button
            onClick={handleOpenDedicatedPage}
            size={"icon"}
            variant={"outline"}
            className="top-4 absolute right-4 z-20 size-8 hover:text-secondary"
          >
            <SquareArrowOutUpRight />
          </Button>

          <Button
            onClick={handleAddToWatchlist}
            size={"icon"}
            variant={"outline"}
            className="top-4 absolute right-14 z-20 size-8 hover:text-quaternary"
          >
            <Pin fill="" />
          </Button>
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

          <Button
            onClick={handleQuickBid}
            className="w-full relative z-20 py-2 bg-surface-container-highest border border-pos-goalkeeper/50 hover:bg-pos-goalkeeper hover:text-primary-foreground text-pos-goalkeeper font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
          >
            <Gavel className="mr-2 size-4" /> Dar Lance
          </Button>
        </div>
      </div>

      <DrawerContent
        className="w-xl pr-2"
        aria-describedby="Player-Auction-Drawer"
      >
        <DrawerHeader className="sr-only">
          <DrawerTitle>Player Auction</DrawerTitle>
          <DrawerDescription>Player Auction Drawer</DrawerDescription>
        </DrawerHeader>

        <ScrollArea className="p-4 w-full">
          <div className="flex flex-col gap-4">
            <AuctionPlayerDetails />

            <PlayerAttributes />

            <PlayerSkillStars />

            <BidHistory />
          </div>
        </ScrollArea>

        <DrawerFooter>
          <div className="flex justify-between gap-4 items-center">
            <div className="flex flex-col gap-2">
              <span className="font-heading uppercase text-muted-foreground text-xs font-bold tracking-widest">
                Andamento do leilão
              </span>
              {/* <div className="flex items-center gap-1 mb-2 bg-primary/10 p-1.5 rounded-md border border-primary w-fit">
                      <span className="size-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#9cff93]"></span>
                      <span className="text-accent-foreground font-heading font-bold text-[10px] tracking-widest uppercase -mb-0.5">
                        Vencendo Leilão
                      </span>
                    </div> */}
              <div className="flex items-center gap-2 mb-2 bg-tertiary/10 p-1.5 rounded-md border border-tertiary w-fit">
                <span className="size-2 bg-tertiary ml-1 rounded-full animate-pulse shadow-[0_0_8px_rgba(255,110,129,0.8)]"></span>
                <span className="text-tertiary font-heading font-bold text-[10px] tracking-widest uppercase -mb-0.5">
                  Lance Superado
                </span>
              </div>
            </div>

            <div className="text-right">
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
          </div>

          <div className="flex flex-col gap-2">
            <MonetaryInput />
            <div className="grid grid-cols-3 gap-4">
              <Button
                variant={"outline"}
                className="font-bold tracking-widest text-xs bg-card cursor-pointer"
              >
                +50K
              </Button>

              <Button
                variant={"outline"}
                className="font-bold tracking-widest text-xs bg-card cursor-pointer"
              >
                +100K
              </Button>

              <Button
                variant={"outline"}
                className="font-bold tracking-widest text-xs bg-card cursor-pointer"
              >
                +250K
              </Button>
            </div>
          </div>

          {/* <DrawerClose asChild>
            <Button variant="outline">Fechar</Button>
          </DrawerClose>

          <Button
            type="submit"
            className="flex w-full items-center h-auto justify-center gap-2 px-5 py-4 bg-linear-to-br from-[#9cff93] to-[#00fc40] text-[#006413] font-sans font-black text-xs tracking-widest uppercase rounded-md hover:brightness-105 transition-all shadow-[0_0_15px_rgba(0,252,64,0.2)] cursor-pointer mt-2"
          >
            <Gavel className="size-4" strokeWidth={2.5} />
            Dar lance
          </Button> */}
          <Button
            type="submit"
            className="flex w-full items-center h-auto justify-center gap-2 px-5 py-4 bg-linear-to-br from-[#9cff93] to-[#00fc40] text-[#006413] font-sans font-black text-xs tracking-widest uppercase rounded-md hover:brightness-105 transition-all shadow-[0_0_15px_rgba(0,252,64,0.2)] cursor-pointer mt-2"
          >
            <Gavel className="size-4" strokeWidth={2.5} />
            Dar lance
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
