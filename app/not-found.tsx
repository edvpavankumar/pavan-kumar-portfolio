import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <span className="eyebrow">Error 404</span>
      <h1 className="font-display text-6xl md:text-8xl gold-text mt-4">
        Lost the plot.
      </h1>
      <p className="text-muted mt-4 max-w-sm text-sm leading-relaxed">
        This page doesn&apos;t exist — but the rest of the portfolio does.
      </p>
      <div className="mt-8">
        <MagneticButton href="/" variant="solid">
          Back to Home
        </MagneticButton>
      </div>
    </div>
  );
}
