import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FontAwesomeWrapper({ icon, className }) {
  return (
    <>
      <div className={`w-[15px] ${className}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
    </>
  );
}

export default FontAwesomeWrapper;
