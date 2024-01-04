import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { roboData } = props;
  const { name, id, email } = roboData;
  console.log(roboData);
  const imageWidth = 150;
  const imageHeight = 150;

  return (
    <div className="res-card m-4 p-4 w-150 bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo"
        src={CDN_URL + id}
        alt="food image"
        style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <h4 className="text-gray-700">{email}</h4>
    </div>
  );
};

export default Card;
