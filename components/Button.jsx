import PropTypes from "prop-types";


export default function Button(props) {
  const { buttonHref, variant, label } = props;
  let style;
  switch (variant) {
    case "text":
      style="underline text-purple-600 text-lg font-medium"
      break;
    case "outlined":
      style="text-slate-900 text-lg font-medium border-2 border-purple-700 rounded-xl w-fit px-8 py-2"
      break;
}

  return (
    <div>
      <a
        href={buttonHref}
        className={style}
      >
      {label}
      </a>
  </div>
  );

}

Button.propTypes = {
  buttonHref: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['text', 'outlined']),
};

Button.defaultProps = {
  variant: 'text',
}




