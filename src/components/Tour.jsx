import { useState } from "react";

const Tour = ({ tourImage, tourName, tourPrice, tourInfo, deleteTour, id }) => {
  //ReadMore
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tourCard">
      <div className="tourImage">
        <img src={tourImage} alt="View" />
      </div>
      <div className="tourDescription">
        <div className="tourDestination">
          <h4>{tourName}</h4>
          <h4 className="price">$ {tourPrice}</h4>
        </div>
        <div className="tourDetails">
          <span className="info">
            {readMore === true ? tourInfo : `${tourInfo.slice(0, 200)}...`}
          </span>
          <span
            className="readMore"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore === true ? `Show Less` : `Read More`}
          </span>
        </div>
        <div className="removeTour">
          <button
            className="removeBtn"
            onClick={() => {
              console.log(id);
              deleteTour(id);
            }}
          >
            Not interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
