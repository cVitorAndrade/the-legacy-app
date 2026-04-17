"use client";

import z from "zod";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/ui/sheet";
import { DynamicSlider } from "../../../../../../../../packages/ui/dist/components/ui/dynamic-slider";
import {
  Field,
  FieldLabel,
} from "@repo/ui/components/ui/field";
import { RefreshCcw, Shield, SlidersHorizontal, Star } from "lucide-react";
import React from "react";
import { Button } from "@repo/ui/components/ui/button";
import { MonetaryInput } from "@repo/ui/components/ui/monetary-input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MultiSelect } from "@repo/ui/components/ui/multi-select";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";
import { Label } from "@repo/ui/components/ui/label";
import { Input } from "@repo/ui/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@repo/ui/components/ui/toggle-group";

const MAX_BID_AMOUNT = 1000000000;

const MIN_OVERALL = 60;
const MAX_OVERALL = 99;

const PLAYER_SKILL_STARS_LIST = [
  { label: "Estrela Drible", value: "Estrela_Drible", icon: Star },
  {
    label: "Estrela Drible Tatico",
    value: "Estrela_Drible_Tatico",
    icon: Star,
  },
  {
    label: "Estrela Posicionamento",
    value: "Estrela_Posicionamento",
    icon: Star,
  },
  { label: "Estrela Reacao", value: "Estrela_Reacao", icon: Star },
  {
    label: "Estrela Criador Jogadas",
    value: "Estrela_Criador_Jogadas",
    icon: Star,
  },
  { label: "Estrela Passador", value: "Estrela_Passador", icon: Star },
  { label: "Estrela Artilheiro", value: "Estrela_Artilheiro", icon: Star },
  { label: "Estrela Matador 1x1", value: "Estrela_Matador_1x1", icon: Star },
  { label: "Estrela Pivo", value: "Estrela_Pivo", icon: Star },
  {
    label: "Estrela Posicionamento Linha",
    value: "Estrela_Posicionamento_Linha",
    icon: Star,
  },
  {
    label: "Estrela Chute Media Distancia",
    value: "Estrela_Chute_Media_Distancia",
    icon: Star,
  },
  { label: "Estrela Lado Campo", value: "Estrela_Lado_Campo", icon: Star },
  { label: "Estrela Centro", value: "Estrela_Centro", icon: Star },
  { label: "Estrela Penaltis", value: "Estrela_Penaltis", icon: Star },
  {
    label: "Estrela Passe De Primeira",
    value: "Estrela_Passe_De_Primeira",
    icon: Star,
  },
  {
    label: "Estrela Chute De Tres Dedos",
    value: "Estrela_Chute_De_Tres_Dedos",
    icon: Star,
  },
  { label: "Estrela Marcacao", value: "Estrela_Marcacao", icon: Star },
  { label: "Estrela Carrinho", value: "Estrela_Carrinho", icon: Star },
  { label: "Estrela Cobertura", value: "Estrela_Cobertura", icon: Star },
  {
    label: "Estrela Linha De Impedimento",
    value: "Estrela_Linha_De_Impedimento",
    icon: Star,
  },
  {
    label: "Estrela Goleiro Pegador Penalti",
    value: "Estrela_Goleiro_Pegador_Penalti",
    icon: Star,
  },
  { label: "Estrela Goleiro 1x1", value: "Estrela_Goleiro_1x1", icon: Star },
  {
    label: "Estrela Arremesso Longo",
    value: "Estrela_Arremesso_Longo",
    icon: Star,
  },
];

const auctionFilterSchema = z.object({
  overall: z.array(z.number()),
  playerName: z.string().optional(),
  minBid: z.number().max(MAX_BID_AMOUNT).min(0).optional(),
  maxBid: z.number().max(MAX_BID_AMOUNT).min(0).optional(),
  playerSkillStars: z.array(z.string()).min(0),
  preferredFoot: z.string().optional(),
  timeRemaining: z.string().optional(),
  positions: z.array(z.string()).min(0),
});

export default function AuctionFiltersSidebar() {
  const auctionFilterForm = useForm<z.infer<typeof auctionFilterSchema>>({
    resolver: zodResolver(auctionFilterSchema),
    defaultValues: {
      overall: [MIN_OVERALL, MAX_OVERALL],
      playerName: "",
      minBid: 50000000,
      maxBid: 150000000,
      playerSkillStars: [],
      preferredFoot: "",
      timeRemaining: "",
      positions: [],
    },
  });

  const onSubmit = (values: z.infer<typeof auctionFilterSchema>) => {
    console.log(values);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-linear-to-br from-[#9cff93] to-[#00fc40] text-[#006413] font-sans font-black text-xs tracking-widest uppercase rounded-md hover:brightness-105 transition-all shadow-[0_0_15px_rgba(0,252,64,0.2)] cursor-pointer">
          <SlidersHorizontal className="w-[18px] h-[18px]" strokeWidth={2.5} />
          Filtros Avançados
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full flex p-0 border-l border-border">
        <ScrollArea className="min-h-0 flex-1 p-6">
          <SheetHeader className="mb-6">
            <SheetTitle>Filtros Avançados</SheetTitle>
            <SheetDescription>
              Refine sua busca por overall, posição e orçamento disponível para
              encontrar o reforço ideal.
            </SheetDescription>
          </SheetHeader>

          <form
            onSubmit={auctionFilterForm.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Nome do Jogador
              </Label>
              <Controller
                name="playerName"
                control={auctionFilterForm.control}
                render={({ field }) => (
                  <Input
                    placeholder="Ex: Messi, Vini Jr, Bellingham..."
                    className="bg-card/50 border-input h-10"
                    {...field}
                  />
                )}
              />
            </div>

            <Controller
              control={auctionFilterForm.control}
              name="overall"
              render={({ field }) => {
                const [min, max] = field.value;

                return (
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center ">
                      <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        Overall do Jogador
                      </Label>
                      <span className="font-heading tracking-widest text-primary font-bold">
                        {min} — {max}
                      </span>
                    </div>

                    <DynamicSlider
                      value={field.value}
                      onValueChange={field.onChange}
                      min={MIN_OVERALL}
                      max={MAX_OVERALL}
                    />
                  </div>
                );
              }}
            />

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center ">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  Faixa de Preço
                </label>
              </div>

              <div className="flex gap-4 items-center">
                <Controller
                  name="minBid"
                  control={auctionFilterForm.control}
                  render={({ field }) => (
                    <Field className="gap-1.5 w-full">
                      <FieldLabel className="text-muted-foreground font-semibold tracking-wide text-xs">
                        Mín.
                      </FieldLabel>
                      <MonetaryInput
                        placeholder="Ex: 50.000.000"
                        max={MAX_BID_AMOUNT}
                        {...field}
                      />
                    </Field>
                  )}
                />

                <Controller
                  name="maxBid"
                  control={auctionFilterForm.control}
                  render={({ field }) => (
                    <Field className="gap-1.5 w-full">
                      <FieldLabel className="text-muted-foreground font-semibold tracking-wide text-xs">
                        Máx.
                      </FieldLabel>
                      <MonetaryInput
                        max={MAX_BID_AMOUNT}
                        placeholder="Ex: 150.000.000"
                        {...field}
                      />
                    </Field>
                  )}
                />
              </div>
            </div>

            <div className="bg-card/50 border-input shadow-sm rounded-md border p-5">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-lg font-bold tracking-tight text-primary flex items-center gap-2 uppercase">
                  <Shield className="size-5" />
                  Setores Táticos
                </h2>
              </div>

              <Controller
                control={auctionFilterForm.control}
                name="positions"
                render={({ field }) => {
                  const handleSelectAllSector = (sectorPositions: string[]) => {
                    const currentSelections = new Set(field.value);

                    const allSelected = sectorPositions.every((pos) =>
                      currentSelections.has(pos),
                    );

                    if (allSelected) {
                      sectorPositions.forEach((pos) =>
                        currentSelections.delete(pos),
                      );
                    } else {
                      sectorPositions.forEach((pos) =>
                        currentSelections.add(pos),
                      );
                    }

                    field.onChange(Array.from(currentSelections));
                  };

                  return (
                    <ToggleGroup
                      type="multiple"
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex flex-col items-start gap-6 w-full"
                    >
                      <div className="w-full">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            Setor Defensivo
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              handleSelectAllSector([
                                "GOL",
                                "ZAG",
                                "LE",
                                "LD",
                                "ADE",
                                "ADD",
                              ])
                            }
                            className="text-[10px] text-primary font-bold hover:underline transition-all"
                          >
                            SELECIONAR TODOS
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["GOL", "ZAG", "LE", "LD", "ADE", "ADD"].map(
                            (pos) => (
                              <ToggleGroupItem
                                key={pos}
                                value={pos}
                                className="px-3 py-1.5 h-auto text-xs font-bold bg-zinc-800 text-muted-foreground border border-transparent transition-colors rounded-md hover:bg-zinc-700 hover:text-white data-[state=on]:bg-primary data-[state=on]:text-black data-[state=on]:border-primary"
                              >
                                {pos}
                              </ToggleGroupItem>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="w-full">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            Setor de Meio-Campo
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              handleSelectAllSector([
                                "VOL",
                                "MC",
                                "MEI",
                                "ME",
                                "MD",
                              ])
                            }
                            className="text-[10px] text-primary font-bold hover:underline transition-all"
                          >
                            SELECIONAR TODOS
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["VOL", "MC", "MEI", "ME", "MD"].map((pos) => (
                            <ToggleGroupItem
                              key={pos}
                              value={pos}
                              className="px-3 py-1.5 h-auto text-xs font-bold bg-zinc-800 text-muted-foreground border border-transparent transition-colors rounded-md hover:bg-zinc-700 hover:text-white data-[state=on]:bg-primary data-[state=on]:text-black data-[state=on]:border-primary"
                            >
                              {pos}
                            </ToggleGroupItem>
                          ))}
                        </div>
                      </div>

                      <div className="w-full">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            Setor Ofensivo
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              handleSelectAllSector(["PE", "PD", "SA", "CA"])
                            }
                            className="text-[10px] text-primary font-bold hover:underline transition-all"
                          >
                            SELECIONAR TODOS
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["PE", "PD", "SA", "CA"].map((pos) => (
                            <ToggleGroupItem
                              key={pos}
                              value={pos}
                              className="px-3 py-1.5 h-auto text-xs font-bold bg-zinc-800 text-muted-foreground border border-transparent transition-colors rounded-md hover:bg-zinc-700 hover:text-white data-[state=on]:bg-primary data-[state=on]:text-black data-[state=on]:border-primary"
                            >
                              {pos}
                            </ToggleGroupItem>
                          ))}
                        </div>
                      </div>
                    </ToggleGroup>
                  );
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  Pé Preferido
                </Label>
                <Controller
                  name="preferredFoot"
                  control={auctionFilterForm.control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-card/50 border-input h-10">
                        <SelectValue placeholder="Qualquer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Qualquer um</SelectItem>
                        <SelectItem value="right">Destro</SelectItem>
                        <SelectItem value="left">Canhoto</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  Tempo Restante
                </Label>
                <Controller
                  name="timeRemaining"
                  control={auctionFilterForm.control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-card/50 border-input h-10">
                        <SelectValue
                          placeholder="Qualquer tempo"
                          className="data-placeholder:text-muted-foreground"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Qualquer tempo</SelectItem>
                        <SelectItem value="1h">Menos de 1h</SelectItem>
                        <SelectItem value="6h">Menos de 6h</SelectItem>
                        <SelectItem value="12h">Menos de 12h</SelectItem>
                        <SelectItem value="24h">Menos de 24h</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            <div>
              <Controller
                control={auctionFilterForm.control}
                name="playerSkillStars"
                render={({ field }) => (
                  <Field>
                    <MultiSelect
                      className="bg-card/50"
                      options={PLAYER_SKILL_STARS_LIST}
                      onValueChange={field.onChange}
                      value={field.value}
                      placeholder="Habilidades Especiais"
                      modalPopover
                    />
                  </Field>
                )}
              />
            </div>

            <div>
              <Button
                variant={"outline"}
                className="w-full cursor-pointer items-center justify-center gap-2 px-5 py-2.5 font-sans font-black text-xs tracking-widest uppercase rounded-md"
              >
                <RefreshCcw className="size-4" strokeWidth={2.5} />
                Resetar Filtros
              </Button>

              <Button
                type="submit"
                className="flex w-full items-center justify-center gap-2 px-5 py-2.5 bg-linear-to-br from-[#9cff93] to-[#00fc40] text-[#006413] font-sans font-black text-xs tracking-widest uppercase rounded-md hover:brightness-105 transition-all shadow-[0_0_15px_rgba(0,252,64,0.2)] cursor-pointer mt-2"
              >
                <SlidersHorizontal className="size-4" strokeWidth={2.5} />
                Aplicar Filtros
              </Button>
            </div>
          </form>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
