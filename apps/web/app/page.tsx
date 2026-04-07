export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-24">
      <div className="flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-sm">
          font-sans (Manrope)
        </span>
        <h1 className="font-sans text-3xl">The Quick Brown Fox</h1>
        <p className="font-sans text-xl">
          Whereas disregard and contempt for human rights have resulted
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-sm">
          font-heading (Space Grotesk)
        </span>
        <h1 className="font-heading text-3xl">The Quick Brown Fox</h1>
        <p className="font-heading text-xl">
          Whereas disregard and contempt for human rights have resulted
        </p>
      </div>
    </main>
  );
}
