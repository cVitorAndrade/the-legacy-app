import {
  CalendarDays,
  Gavel,
  Globe,
  Handshake,
  Home,
  Landmark,
  LayoutDashboard,
  Settings,
  Shirt,
  Trophy,
} from "lucide-react";

export function getMenuList(pathname: string) {
  return {
    navGlobal: [
      {
        title: "Visão Geral",
        url: "/app",
        icon: Home,
        isActive: pathname === "/app",
      },
      {
        title: "Explorar Ligas",
        url: "#",
        icon: Globe,
        isActive: pathname === "#",
      },
      {
        title: "Minha Conta",
        url: "#",
        icon: Settings,
        isActive: pathname === "#",
      },
    ],
    navClub: [
      {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboard,
        isActive: pathname === "#",
      },
      {
        title: "Meu Elenco",
        url: "#",
        icon: Shirt,
        isActive: pathname === "#",
      },
      {
        title: "Central de Jogos",
        url: "#",
        icon: CalendarDays,
        isActive: pathname === "#",
      },
      {
        title: "Competições",
        url: "#",
        icon: Trophy,
        isActive: pathname === "#",
      },
      {
        title: "Mercado",
        url: "/app/league/uuid/market",
        icon: Gavel,
        isActive: pathname === "/app/league/uuid/market",
      },
      {
        title: "Negociações",
        url: "#",
        icon: Handshake,
        isActive: pathname === "#",
      },
      {    
        title: "Financeiro",
        url: "#",
        icon: Landmark,
        isActive: pathname === "#",
      },
    ],
  };
}
