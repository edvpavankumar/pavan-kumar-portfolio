import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading text-3xl md:text-5xl mt-4 text-ivory text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={`text-muted mt-4 max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } text-[15px] leading-relaxed`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
