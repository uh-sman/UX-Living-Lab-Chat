import React, { useContext } from "react";
import img from "../../../assets/avatar.png";
import ProductContext from "../../ContextProvider/DataContext";
const Rooms = () => {
  const { productList, roomList } = useContext(ProductContext);
  return (
    <div>
      <div className="">
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
