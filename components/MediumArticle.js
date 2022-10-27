import Image from "next/image";
import Button from "./Button";

export default function MediumArticle({
  imageSrc,
  title,
  description,
  articleHref,
}) {
  return (
    <div className="flex basis-1/4 flex-col gap-4">
      <Image
        className="rounded-xl"
        src={imageSrc || ""}
        width={200}
        height={200}
        alt="article image"
      />
      <h5 className="font-bold text-2xl text-indigo-900">{title}</h5>
      <p className="text-lg text-sky-900">{description}</p>
      <Button
        buttonHref={articleHref}
        label = "Read Article"
        variant = "text"
      />
    </div>
  );
}
