import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion";
import { Progress } from "@repo/ui/components/ui/progress";
import {
  getProgressColorClass,
  getRatingTextColor,
} from "../../../../../../lib/utils";
import { cn } from "@repo/ui/lib/utils";

const PLAYER_ATTRIBUTES = [
  {
    category: "Ritmo",
    label: "",
    attributes: [
      { label: "Vel máxima", value: "Top Speed", rating: 96 },
      { label: "Aceleração", value: "Acceleration", rating: 96 },
      { label: "Agilidade", value: "Agility", rating: 90 },
      { label: "Equilíbrio", value: "Balance", rating: 93 },
      { label: "Salto", value: "Jump", rating: 78 },
      { label: "Resistência", value: "Stamina", rating: 89 },
      { label: "Estabilidade", value: "Condition", rating: 88 },
    ],
  },
  {
    category: "Ataque & Finalização",
    label: "",
    attributes: [
      { label: "Ataque", value: "Attack", rating: 88 },
      { label: "Precisão", value: "Shot Accuracy", rating: 77 },
      { label: "Potência", value: "Shot Power", rating: 80 },
      { label: "Téc. de chute", value: "Shot Technique", rating: 94 },
      { label: "Cabeçada", value: "Header", rating: 72 },
      { label: "Prec. tiro livre", value: "Free Kick Accuracy", rating: 86 },
      { label: "Efeito", value: "Curling", rating: 91 },
    ],
  },
  {
    category: "Passe & Criação",
    label: "",
    attributes: [
      { label: "Prec. passe curto", value: "Short Pass Accuracy", rating: 86 },
      { label: "Vel. passe curto", value: "Short Pass Speed", rating: 92 },
      { label: "Prec. passe longo", value: "Long Pass Accuracy", rating: 89 },
      { label: "Vel. passe longo", value: "Long Pass Speed", rating: 90 },
      { label: "Trabalho em equipe", value: "Teamwork", rating: 88 },
    ],
  },
  {
    category: "Técnica & Controle",
    label: "",
    attributes: [
      { label: "Prec. drible", value: "Dribble Accuracy", rating: 90 },
      { label: "Vel. drible", value: "Dribble Speed", rating: 92 },
      { label: "Técnica", value: "Technique", rating: 98 },
      {
        label: "Frequência de uso do pé fraco",
        value: "Weak Foot Frequency",
        rating: 80,
      },
      {
        label: "Precisão com o pé fraco",
        value: "Weak Foot Accuracy",
        rating: 68,
      },
    ],
  },
  {
    category: "Defesa & Mentalidade",
    label: "",
    attributes: [
      { label: "Defesa", value: "Defense", rating: 75 },
      { label: "Resposta", value: "Response", rating: 84 },
      { label: "Agressividade", value: "Aggressiveness", rating: 82 },
      { label: "Mentalidade", value: "Mentality", rating: 86 },
    ],
  },
  {
    category: "Goleiro",
    label: "",
    attributes: [
      {
        label: "Qualidades de goleiro",
        value: "Goalkeeping Skills",
        rating: 40,
      },
    ],
  },
];

export default function PlayerAttributes() {
  return (
    <div className="bg-card border border-input p-3 rounded-md">
      <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-foreground mb-3">
        Atributos do Jogador
      </h3>

      <Accordion
        type="multiple"
        className="space-y-3 bg-card border-inputrounded-md"
      >
        {PLAYER_ATTRIBUTES.map(({ category, attributes }) => {
          const accumulatedRating = Number(
            (
              attributes.reduce((acc, attribute) => acc + attribute.rating, 0) /
              attributes.length
            ).toFixed(0),
          );

          return (
            <AccordionItem
              key={category}
              value={`item-${category}`}
              className="rounded-md border border-border px-4 bg-popover/75 data-[state=open]:bg-popover transition-colors"
            >
              <AccordionTrigger className="hover:no-underline group py-4">
                <div className="flex flex-1 gap-4 items-center justify-between pr-4">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-heading font-bold text-foreground/80 group-hover:text-primary transition-colors">
                      {category}
                    </span>
                    <span className="text-sm text-muted-foreground font-semibold line-clamp-1">
                      {attributes.map(({ label }) => label).join(", ")}.
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span
                      className={cn(
                        "font-heading text-xl font-black leading-none",
                        getRatingTextColor(accumulatedRating),
                      )}
                    >
                      {accumulatedRating}
                    </span>

                    <Progress
                      value={accumulatedRating}
                      className={cn(
                        "mt-1 h-1 w-16 bg-muted [&>div]:transition-all [&>div]:duration-300 [&>div]:ease-in-out",
                        getProgressColorClass(accumulatedRating),
                      )}
                    />
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="grid grid-cols-1 gap-3 px-1 pb-2 pt-1">
                  {attributes.map(({ label, rating }) => (
                    <div className="flex flex-col gap-1.5" key={label}>
                      <div className="flex justify-between text-[12px] font-bold text-muted-foreground tracking-widest uppercase">
                        <span>{label}</span>
                        <span
                          className={cn(
                            "text-foreground font-black tabular-nums",
                            getRatingTextColor(rating),
                          )}
                        >
                          {rating}
                        </span>
                      </div>
                      <Progress
                        value={rating}
                        style={
                          { "--rating": `${rating}%` } as React.CSSProperties
                        }
                        className="h-0.5 w-full opacity-80 [&>div]:!transform-none [&>div]:w-full [&>div]:rounded-l-full [&>div]:bg-[linear-gradient(to_right,var(--rating-common)_0%,var(--rating-common)_74%,var(--rating-good)_75%,var(--rating-good)_79%,var(--rating-great)_80%,var(--rating-great)_89%,var(--rating-elite)_90%,var(--rating-elite)_100%)] [&>div]:[clip-path:inset(0_calc(100%-var(--rating))_0_0)] transition-[clip-path] duration-300 ease-in-out"
                      />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
