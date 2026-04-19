import { Store, Globe, Users } from "lucide-react";
import CreateUserForm from "./_components/create-user-form";

export default function Signup() {
  return (
    <div className="flex h-full w-full min-h-screen">
      <div className="hidden lg:flex lg:w-[60%] relative flex-col justify-end p-12 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            alt="Stadium background"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVQ3H1q2Bdc_omHKBBW6KVWZMkhnEFZWkfPT5sOWCQ_ZbSYS0JPTeC2jX3SWNZ4658zTrx8DTdwgwKmXox0U5H2hsjOns89dJFPKyuQwHSEvBDTSTt3jN8xy5V8YhZQ6biKiAjmpQ8ktCT3GPcZw3TReUPKlslJet70grFhKHi7rA79t5g7TVS1PQfwH7Pcp_a7SLJ8pcDdtexzGxfCcYbMh8XfHPK1xfE4XTd2_pvTWy5TwuS-2FfxHfe__AoIrsy8QstXaWarny_"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-r from-background/50 via-transparent to-background"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="mb-16">
            <span className="font-heading font-black text-3xl tracking-tighter underline italic text-primary uppercase">
              The Legacy
            </span>
          </div>
          <h1 className="font-heading font-black text-6xl tracking-tighter uppercase mb-6 leading-none shadow-[0_0_80px_hsl(var(--primary)/0.15)] inline-block text-foreground">
            Comece o seu
            <br />
            <span className="text-primary">Legado</span>
          </h1>

          <p className="text-muted-foreground text-xl mb-12 font-medium max-w-md">
            Assuma a prancheta. Monte seu elenco, negocie craques e prepare-se
            para levar seu time ao topo da tabela.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card/40 backdrop-blur-xl border border-primary/30 p-6 rounded-xl flex flex-col gap-4 shadow-lg group">
              <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Store className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-foreground">
                  LEILÕES EM TEMPO REAL
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Dê lances precisos, contrate grandes craques e monte a equipe
                  dos seus sonhos.{" "}
                </p>
              </div>
            </div>

            <div className="bg-card/40 backdrop-blur-xl border border-secondary/30 p-6 rounded-xl flex flex-col gap-4 shadow-lg relative group">
              <div className="absolute inset-0 bg-linear-to-r from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-foreground">
                  CORRIDA PELO TÍTULO
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Suba de divisão, lidere as estatísticas e leve seu clube à
                  glória máxima.
                </p>
              </div>
            </div>

            <div className="bg-card/40 backdrop-blur-xl border border-quaternary/30 p-6 rounded-xl flex flex-col gap-4 shadow-lg col-span-2 group">
              <div className="absolute inset-0 bg-linear-to-r from-quaternary/10 via-quaternary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-quaternary flex items-center justify-center">
                  <Users className="w-5 h-5 text-quaternary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-foreground">
                    VIVA A NOSTALGIA!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A essência da Master League voltou! Assuma a prancheta,
                    coloque os jogadores pra aquecerem e mostre que a sua
                    genialidade tática continua intacta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 sm:px-16 py-12 bg-background overflow-y-auto relative z-20 border-l border-border/50">
        <div className="lg:hidden mb-12 flex justify-center">
          <span className="font-heading font-black text-2xl tracking-tighter text-primary italic uppercase underline">
            The Legacy
          </span>
        </div>

        <CreateUserForm />
      </div>
    </div>
  );
}
