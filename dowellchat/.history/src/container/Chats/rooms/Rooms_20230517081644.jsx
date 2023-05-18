import React, { useContext } from "react";
import img from "../../../assets/avatar.png";
import ProductContext from "../../ContextProvider/DataContext";
const Rooms = ({ results }) => {
  const { productList, roomList } = useContext(ProductContext);
  console.log("results", results);
  return (
    <div className="my-3">
      <div className="">
        <div className="d-flex flex-column shadow-md justify-content-start gap-2 shadow-sm rounded">
          {results?.rooms?.map(({ room_id }) => {
            return (
              <>
                <figure className="d-flex ">
                  <img src={img} height="20px" width="20px" className="mx-2" />
                </figure>
                <p className="text-primary">{room_id}</p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
