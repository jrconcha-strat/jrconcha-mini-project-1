import Image from "next/image";

type ExperienceCardProps = {
    image: string,
    alt: string,
    position: string,
    company: string,
    year?: string,
    date: string,
    description: string,
    // className?: string,
}

export default function ExperienceCard({image, alt, position, company, year, date, description} : ExperienceCardProps) {
  return (
    <div className={`flex flex-col`}>
       {year && <p className="text-xl md:text-xl lg:text-2xl mt-8 font-medium"> {year} </p>}
      <div className="w-full h-full max-w-[320px] lg:max-w-[400px] bg-[var(--card-background)] p-4 mt-5 rounded-2xl shadow hover:drop-shadow-[0_0_6px_var(--ash-gray)] transition-all duration-200">
        <Image
          src={image}
          width={900}
          height={200}
          alt={alt}
          className="rounded-xl object-cover w-full h-[150px] max-h-[300px]"
        ></Image>
        <p className="text-xl font-semibold mt-4 text-[var(--foreground)]">
          {position}
        </p>
        <p className="text-sm opacity-70 font-medium mt-1">
          {" "}
          {company}
        </p>
        <p className="text-sm opacity-70"> {date}</p>

        <p className="mt-5 text-sm text-[var(--foreground)]">
          {description}
        </p>
      </div>
    </div>
  );
}
