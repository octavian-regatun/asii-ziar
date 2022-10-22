import PropTypes from "prop-types";

export default function InfoCard(props) {
  const { title, description } = props;
  return (
    <div className="drop-shadow-xl bg-slate-50 hover:bg-sky-50 rounded-xl p-8 basis-1/4">
      <h4 className="text-indigo-900 font-bold text-xl">{title}</h4>
      <p className="text-slate-700">{description}</p>
    </div>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
