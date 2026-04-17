export default function BidHistory() {
  return (
    <div className="bg-card border border-input p-3 rounded-md">
      <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-foreground mb-3">
        Histórico de Lances
      </h3>

      {/* <div className="space-y-2">
        <div className="flex items-center justify-between p-3 bg-primary/10 border border-primary/20 rounded-md shadow-sm">
          <div className="flex items-center gap-3">
            <img
              alt="Avatar do vencedor"
              className="w-8 h-8 rounded-full border border-primary/40 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxatex5cjUb-K1ufKQuKqEMEb3F0S18z1XUcWsLy_j2vSDQ1AIKS6NrOKhExF8qH9YKNvjlrre0OobIkeVHLC91wcdyO_W5IfWReC1zbAfelwTdNd4hOnX1BDP_31oeZwzrz0IfIF8NG39nckq4mkcQMqK0IJ_2VGvL0CXZf9bI9MLgTxYiakcf0o9VbGaTgOeFIBXn_0oiJFHVpmuhIeJC44f7vdeSiYFOPlJfLWLxSwTz4AAogGnJ___SNdmOrAaxwJjfOabbZQ"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground">
                PremiumGamer_99
              </span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest mt-0.5">
                Vencendo o leilão
              </span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="font-heading text-sm font-black text-foreground tracking-tight flex items-baseline gap-1">
              <span className="text-primary text-sm tracking-normal">€</span>
              923.000.000
            </div>
            <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
              3s atrás
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-popover/75 border border-border rounded-md grayscale-30 transition-all hover:grayscale-0">
          <div className="flex items-center gap-3">
            <img
              alt="Avatar superado"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkOJtUq5h7wQJp2AdyJYWmGBnmv9X3bqVgis16cHb3pNeeFJOjs2RrVscTKHM43YN-rpajlfGuL0KZdsBYfGJf9k2Gyi7wufh2kd0wetCE1FQPKpeXEdDMBh7TWjOZKMOF7CJPa-TLDt_r3zn2-Cc7KsoMUmzYyOSl_6c-E0JZEeew606fyHhc6PtCLva1KfNEVyZ1NOLyPW5hyhWAywmf3eyVwJIOcLa6qeAQ-xJFXx4i09lg8HpqQ6KR9XvBHwCjaeAlzdLNFME"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-muted-foreground">
                TheSkiller_Pro
              </span>
              <span className="text-[10px] font-bold text-destructive uppercase tracking-widest mt-0.5">
                Lance superado
              </span>
            </div>
          </div>

          <div className="text-right flex flex-col items-end">
            <div className="font-heading text-sm font-bold text-muted-foreground tracking-tight flex items-baseline gap-1">
              <span className="text-sm tracking-normal">€</span>
              910.000.000
            </div>

            <span className="block text-[10px] font-bold text-muted-foreground/70 uppercase tracking-widest mt-0.5">
              7s atrás
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-popover/75 border border-border rounded-md grayscale-30 transition-all hover:grayscale-0">
          <div className="flex items-center gap-3">
            <img
              alt="Avatar superado"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxatex5cjUb-K1ufKQuKqEMEb3F0S18z1XUcWsLy_j2vSDQ1AIKS6NrOKhExF8qH9YKNvjlrre0OobIkeVHLC91wcdyO_W5IfWReC1zbAfelwTdNd4hOnX1BDP_31oeZwzrz0IfIF8NG39nckq4mkcQMqK0IJ_2VGvL0CXZf9bI9MLgTxYiakcf0o9VbGaTgOeFIBXn_0oiJFHVpmuhIeJC44f7vdeSiYFOPlJfLWLxSwTz4AAogGnJ___SNdmOrAaxwJjfOabbZQ"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-muted-foreground">
                PremiumGamer_99
              </span>
              <span className="text-[10px] font-bold text-destructive uppercase tracking-widest mt-0.5">
                Lance superado
              </span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="font-heading text-sm font-bold text-muted-foreground tracking-tight flex items-baseline gap-1">
              <span className="text-sm tracking-normal">€</span>
              880.000.000
            </div>
            <span className="block text-[10px] font-bold text-muted-foreground/70 uppercase tracking-widest mt-0.5">
              12s atrás
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-popover/75 border border-border rounded-md grayscale-30 transition-all hover:grayscale-0">
          <div className="flex items-center gap-3">
            <img
              alt="Avatar superado"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkOJtUq5h7wQJp2AdyJYWmGBnmv9X3bqVgis16cHb3pNeeFJOjs2RrVscTKHM43YN-rpajlfGuL0KZdsBYfGJf9k2Gyi7wufh2kd0wetCE1FQPKpeXEdDMBh7TWjOZKMOF7CJPa-TLDt_r3zn2-Cc7KsoMUmzYyOSl_6c-E0JZEeew606fyHhc6PtCLva1KfNEVyZ1NOLyPW5hyhWAywmf3eyVwJIOcLa6qeAQ-xJFXx4i09lg8HpqQ6KR9XvBHwCjaeAlzdLNFME"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-secondary text-muted-foreground">
                UltraSniper_X (Você)
              </span>
              <span className="text-[10px] font-bold text-destructive uppercase tracking-widest mt-0.5">
                Lance superado
              </span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="font-heading text-sm font-bold text-muted-foreground tracking-tight flex items-baseline gap-1">
              <span className="text-sm tracking-normal">€</span>
              850.000.000
            </div>
            <span className="block text-[10px] font-bold text-muted-foreground/70 uppercase tracking-widest mt-0.5">
              18s atrás
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-popover/75 border border-border rounded-md grayscale-50 transition-all hover:grayscale-0">
          <div className="flex items-center gap-3">
            <img
              alt="Avatar lance inicial"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwiFvPhRXJSgqEjyjgK4gY9RQ6sV4Ku0KFBBnRRPoAAshLfqYkiXE3-tAGKO6BJs9zuhOcM9yaEW3LVT146luIfJFItcZhoR7K_0-eoRszSz7VMljZqDlAejMHh-xl0JhvFbw9M5j0HkQX6QKlMRDzizD09fw-LmQR73RX7ILr_KeBqu7g7SAXUFEqUDgdKq0BfFT9kZkUlNr2gRG65wuEL-T7mQF21-sgpaGUxATTq24U0vjKxiwGSwFa-C7kzNhpqU9E5Rhht4A"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-muted-foreground">
                Alex_Vitor_07
              </span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
                Lance inicial
              </span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="font-heading text-sm font-bold text-muted-foreground tracking-tight flex items-baseline gap-1">
              <span className="text-sm tracking-normal">€</span>
              800.000.000
            </div>
            <span className="block text-[10px] font-bold text-muted-foreground/70 uppercase tracking-widest mt-0.5">
              30s atrás
            </span>
          </div>
        </div>
      </div> */}

      <div className="space-y-2">
        <div className="flex items-center justify-between p-2.5 sm:p-3 bg-primary/10 border border-primary/20 rounded-md shadow-sm gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <img
              alt="Avatar do vencedor"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-primary/40 object-cover shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxatex5cjUb-K1ufKQuKqEMEb3F0S18z1XUcWsLy_j2vSDQ1AIKS6NrOKhExF8qH9YKNvjlrre0OobIkeVHLC91wcdyO_W5IfWReC1zbAfelwTdNd4hOnX1BDP_31oeZwzrz0IfIF8NG39nckq4mkcQMqK0IJ_2VGvL0CXZf9bI9MLgTxYiakcf0o9VbGaTgOeFIBXn_0oiJFHVpmuhIeJC44f7vdeSiYFOPlJfLWLxSwTz4AAogGnJ___SNdmOrAaxwJjfOabbZQ"
            />
            <div className="flex flex-col min-w-0 w-full">
              <span className="text-[12px] sm:text-sm font-bold text-foreground truncate">
                PremiumGamer_99
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-primary uppercase tracking-wider sm:tracking-widest mt-0.5 truncate">
                Vencendo o leilão
              </span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end shrink-0 pl-1">
            <div className="font-heading text-xs sm:text-sm font-black text-foreground tracking-tight flex items-baseline gap-0.5 sm:gap-1">
              <span className="text-primary text-xs sm:text-sm tracking-normal">
                €
              </span>
              923M
            </div>
            <span className="block text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-wider sm:tracking-widest mt-0.5">
              3s atrás
            </span>
          </div>
        </div>

        {/* Lance superado 1 */}
        <div className="flex items-center justify-between p-2.5 sm:p-3 bg-popover/75 border border-border rounded-md grayscale-30 transition-all hover:grayscale-0 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <img
              alt="Avatar superado"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkOJtUq5h7wQJp2AdyJYWmGBnmv9X3bqVgis16cHb3pNeeFJOjs2RrVscTKHM43YN-rpajlfGuL0KZdsBYfGJf9k2Gyi7wufh2kd0wetCE1FQPKpeXEdDMBh7TWjOZKMOF7CJPa-TLDt_r3zn2-Cc7KsoMUmzYyOSl_6c-E0JZEeew606fyHhc6PtCLva1KfNEVyZ1NOLyPW5hyhWAywmf3eyVwJIOcLa6qeAQ-xJFXx4i09lg8HpqQ6KR9XvBHwCjaeAlzdLNFME"
            />
            <div className="flex flex-col min-w-0 w-full">
              <span className="text-[12px] sm:text-sm font-bold text-muted-foreground truncate">
                TheSkiller_Pro
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-destructive uppercase tracking-wider sm:tracking-widest mt-0.5 truncate">
                Lance superado
              </span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end shrink-0 pl-1">
            <div className="font-heading text-xs sm:text-sm font-bold text-muted-foreground tracking-tight flex items-baseline gap-0.5 sm:gap-1">
              <span className="text-xs sm:text-sm tracking-normal">€</span>
              910,50M
            </div>
            <span className="block text-[9px] sm:text-[10px] font-bold text-muted-foreground/70 uppercase tracking-wider sm:tracking-widest mt-0.5">
              7s atrás
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between p-2.5 sm:p-3 bg-popover/75 border border-border rounded-md grayscale-30 transition-all hover:grayscale-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <img
              alt="Avatar superado"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxatex5cjUb-K1ufKQuKqEMEb3F0S18z1XUcWsLy_j2vSDQ1AIKS6NrOKhExF8qH9YKNvjlrre0OobIkeVHLC91wcdyO_W5IfWReC1zbAfelwTdNd4hOnX1BDP_31oeZwzrz0IfIF8NG39nckq4mkcQMqK0IJ_2VGvL0CXZf9bI9MLgTxYiakcf0o9VbGaTgOeFIBXn_0oiJFHVpmuhIeJC44f7vdeSiYFOPlJfLWLxSwTz4AAogGnJ___SNdmOrAaxwJjfOabbZQ"
            />
            <div className="flex flex-col min-w-0 w-full">
              <span className="text-[12px] sm:text-sm font-bold text-muted-foreground truncate">
                PremiumGamer_99
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-destructive uppercase tracking-wider sm:tracking-widest mt-0.5 truncate">
                Lance superado
              </span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end shrink-0 pl-1">
            <div className="font-heading text-xs sm:text-sm font-bold text-muted-foreground tracking-tight flex items-baseline gap-0.5 sm:gap-1">
              <span className="text-xs sm:text-sm tracking-normal">€</span>
              880M
            </div>
            <span className="block text-[9px] sm:text-[10px] font-bold text-muted-foreground/70 uppercase tracking-wider sm:tracking-widest mt-0.5">
              12s atrás
            </span>
          </div>
        </div>

        {/* Lance superado 3 (Você) */}
        <div className="flex items-center justify-between p-2.5 sm:p-3 bg-popover/75 border border-border rounded-md grayscale-30 transition-all hover:grayscale-0 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <img
              alt="Avatar superado"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkOJtUq5h7wQJp2AdyJYWmGBnmv9X3bqVgis16cHb3pNeeFJOjs2RrVscTKHM43YN-rpajlfGuL0KZdsBYfGJf9k2Gyi7wufh2kd0wetCE1FQPKpeXEdDMBh7TWjOZKMOF7CJPa-TLDt_r3zn2-Cc7KsoMUmzYyOSl_6c-E0JZEeew606fyHhc6PtCLva1KfNEVyZ1NOLyPW5hyhWAywmf3eyVwJIOcLa6qeAQ-xJFXx4i09lg8HpqQ6KR9XvBHwCjaeAlzdLNFME"
            />
            <div className="flex flex-col min-w-0 w-full">
              <span className="text-[12px] sm:text-sm font-bold text-secondary truncate">
                (Você)
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-destructive uppercase tracking-wider sm:tracking-widest mt-0.5 truncate">
                Lance superado
              </span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end shrink-0 pl-1">
            <div className="font-heading text-xs sm:text-sm font-bold text-muted-foreground tracking-tight flex items-baseline gap-0.5 sm:gap-1">
              <span className="text-xs sm:text-sm tracking-normal">€</span>
              850,75M
            </div>
            <span className="block text-[9px] sm:text-[10px] font-bold text-muted-foreground/70 uppercase tracking-wider sm:tracking-widest mt-0.5">
              18s atrás
            </span>
          </div>
        </div>

        {/* Lance inicial */}
        <div className="flex items-center justify-between p-2.5 sm:p-3 bg-popover/75 border border-border rounded-md grayscale-50 transition-all hover:grayscale-0 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <img
              alt="Avatar lance inicial"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwiFvPhRXJSgqEjyjgK4gY9RQ6sV4Ku0KFBBnRRPoAAshLfqYkiXE3-tAGKO6BJs9zuhOcM9yaEW3LVT146luIfJFItcZhoR7K_0-eoRszSz7VMljZqDlAejMHh-xl0JhvFbw9M5j0HkQX6QKlMRDzizD09fw-LmQR73RX7ILr_KeBqu7g7SAXUFEqUDgdKq0BfFT9kZkUlNr2gRG65wuEL-T7mQF21-sgpaGUxATTq24U0vjKxiwGSwFa-C7kzNhpqU9E5Rhht4A"
            />
            <div className="flex flex-col min-w-0 w-full">
              <span className="text-[12px] sm:text-sm font-bold text-muted-foreground truncate">
                Alex_Vitor_07
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-wider sm:tracking-widest mt-0.5 truncate">
                Lance inicial
              </span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end shrink-0 pl-1">
            <div className="font-heading text-xs sm:text-sm font-bold text-muted-foreground tracking-tight flex items-baseline gap-0.5 sm:gap-1">
              <span className="text-xs sm:text-sm tracking-normal">€</span>
              800M
            </div>
            <span className="block text-[9px] sm:text-[10px] font-bold text-muted-foreground/70 uppercase tracking-wider sm:tracking-widest mt-0.5">
              30s atrás
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
