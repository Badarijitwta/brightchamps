// import "./progressbar.css";

const ProgressBar: React.FC = () => {
  return (
    <>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-gray"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow={75}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
