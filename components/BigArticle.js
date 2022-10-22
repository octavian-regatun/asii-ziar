import Image from "next/image";
import PropTypes from "prop-types";

export default function BigArticle(props) {
  const { imageSrc, title, description, articleHref } = props;

  return (
    <div className="flex flex-col gap-4">
      <Image
        className="rounded-xl"
        src={imageSrc}
        width={300}
        height={400}
        alt="article image"
      />
      <h1 className="font-medium text-5xl text-indigo-900">{title}</h1>
      <h2 className="text-lg">{description}</h2>
      <a
        href={articleHref}
        className="text-slate-900 text-lg font-medium border-2 border-purple-700 rounded-xl w-fit px-8 py-2"
      >
        Read Article
      </a>
    </div>
  );
}

BigArticle.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  articleHref: PropTypes.string.isRequired,
};
