import React, { useContext } from "react";
import img from "../../../assets/avatar.png";
import ProductContext from "../../ContextProvider/DataContext";
const Rooms = () => {
  const { productList, roomList } = useContext(ProductContext);
  return (
    <div>
      <div className="d-flex gap-3  flex-column">
        <div className="d-flex align-items-center gap-2 shadow-md border rounded mx-2">
          <figure className="">
            <img src={img} height="20px" width="20px" />
          </figure>
          <p className="text-primary">
            {/* {room_id} */}
            24
          </p>
        </div>
        <div className="d-flex shadow-md gap-2 border rounded align-items-center ">
          <figure className="d-flex ">
            <img src={img} height="20px" width="20px" />
          </figure>
          <p className="text-primary">
            {/* {room_id} */}
            24
          </p>
        </div>
        {/* {roomList?.rooms?.map(({ room_id }) => {
          return (
           
          );
        })} */}
      </div>
    </div>
  );
};

export default Rooms;
