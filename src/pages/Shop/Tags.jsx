const title = "Our Popular Tags";

const tagsList = [
  {
    link: "#",
    text: "thermometer",
  },
  {
    link: "#",
    text: "stethoscope",
  },
  {
    link: "#",
    text: "bp-machine",
  },
  {
    link: "#",
    text: "pregnancy-test",
  },
  {
    link: "#",
    text: "nebulizer-machine",
  },
  {
    link: "#",
    text: "scissors",
  },
  {
    link: "#",
    text: "spinal-needle",
  },
  {
    link: "#",
    text: "surgical-mask",
  },
  {
    link: "#",
    text: "iv-cannula",
  },
];

const Tags = () => {
  return (
    <div className="widget widget-tags">
      <div className="widget-header">
        <h5 className="title">{title}</h5>
      </div>
      <ul className="widget-wrapper">
        {tagsList.map((val, i) => (
          <li key={i}>
            <a href={val.link}>{val.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
