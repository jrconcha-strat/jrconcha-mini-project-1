import Image from "next/image";

type CertProps = {
  image: string;
  name: string;
  issuer: string;
  date: string;
  desc: string;
};

export default function CertificationCard({
  image,
  name,
  issuer,
  date,
  desc,
}: CertProps) {
  return (
    <div className="flex flex-col flex-1/5 min-w-[300px] max-w-[300px] items-center border-2 rounded-2xl p-4">
      <div className="w-full flex justify-center">
        <Image
          src={image}
          alt={`${name} Badge logo`}
          width={100}
          height={100}
          className="object-cover"
        ></Image>
      </div>

      <p className="font-medium text-xl mt-3 text-center"> {name}</p>
      <div className="flex w-full justify-between mt-1">
        <p className="opacity-70"> {issuer} </p>
        <p className="opacity-70"> {date}</p>
      </div>
      <p className="mt-4 text-sm text-center"> {desc}</p>
    </div>
  );
}
