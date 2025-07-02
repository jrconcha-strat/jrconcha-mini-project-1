import Image from "next/image";

type SkillPillProps = {
  image?: string;
  name: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function SkillPill({ image, name, width = 24, height = 24, className}: SkillPillProps) {
  return (
    <div className={`${className} flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] text-[var(--foreground)] hover:drop-shadow-[0_0_6px_var(--ash-gray)] hover:scale-110 duration-150`}>
        {image && <Image src={image} alt={name} width={width} height={height} />}
      <span className="font-medium">{name}</span>
    </div>
  );
}
