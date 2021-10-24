import React from "react";
import Tour from "./Tour";

function Tours({ tours, deleteTour }) {
  return (
    <div>
      <header className="title">Tours we offer</header>
      <div>
        {tours.map((props) => {
          return (
            <Tour
              key={props.id}
              id={props.id}
              tourName={props.name}
              tourPrice={props.price}
              tourInfo={props.info}
              tourImage={props.image}
              deleteTour={deleteTour}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tours;
