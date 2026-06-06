import { Button } from "@/components/Button";
import { GradientMesh } from "@/components/GradientMesh";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden px-[var(--gutter)] text-center">
      <GradientMesh className="-z-10 opacity-40" intensity={0.4} />
      <div className="flex flex-col items-center gap-6">
        <span className="eyebrow">404</span>
        <h1 className="text-h1 font-semibold">This page took a wrong turn</h1>
        <p className="max-w-md text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Button href="/" magnetic withArrow>
          Back home
        </Button>
      </div>
    </section>
  );
}
