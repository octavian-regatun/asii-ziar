import PropTypes from "prop-types";

export default function Button(props) {
  const { buttonHref, variant, label } = props;

  function getButtonStyle(variant) {
    switch (variant) {
      case "text":
        return "underline text-purple-600 text-lg font-medium";
      case "outlined":
        return "text-slate-900 text-lg font-medium border-2 border-purple-700 rounded-xl w-fit px-8 py-2";
    }
  }

  return (
    <div>
      <a href={buttonHref} className={getButtonStyle(variant)}>
        {label}
      </a>
    </div>
  );
}

Button.propTypes = {
  buttonHref: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["text", "outlined"]),
};

Button.defaultProps = {
  variant: "text",
};
