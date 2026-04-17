import { Badge } from "@repo/ui/components/ui/badge";
import { Star } from "lucide-react";

const PLAYER_SKILL_STARS = [
  "Drible",
  "Drible Tatico",
  "Posicionamento",
  "Reacao",
  "Criador Jogadas",
  "Passador",
  "Artilheiro",
  "Matador 1x1",
  "Pivo",
  "Posicionamento Linha",
];

export default function PlayerSkillStars() {
  return (
    <div className="bg-card border border-input p-3 rounded-md">
      <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-foreground mb-3">
        Habilidades Especiais do Jogador
      </h3>

      <div className="flex flex-wrap gap-2">
        {PLAYER_SKILL_STARS.map((skill, index) => (
          <Badge
            key={index}
            className="text-quaternary bg-quaternary/10 border-quaternary border font-bold flex gap-1 w-fit hover:bg-quaternary/30"
          >
            <Star className="size-4" fill="currentColor" />
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
