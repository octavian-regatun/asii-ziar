import PropTypes from "prop-types";
import Button from "./Button";

export default function SmallArticle(props) {
  const { title, description, articleHref, className } = props;

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <h1 className="font-medium text-2xl text-indigo-900">{title}</h1>
      <h2 className="text-lg">{description}</h2>
      <Button
        buttonHref={articleHref}
        label = "Read Article"
        variant = "text"
      />
    </div>
  );
}

SmallArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  articleHref: PropTypes.string.isRequired,
  className: PropTypes.string,
};
