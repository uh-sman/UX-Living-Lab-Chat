import React, { useContext } from "react";
import img from "../../../assets/avatar.png";
import ProductContext from "../../ContextProvider/DataContext";
const Rooms = () => {
  const { productList, roomList } = useContext(ProductContext);
  return (
    <div>
      <div className="">
        <div className="d-flex shadow-md gap-2 shadow-sm rounded align-items-center gap-4">
          <figure className="d-flex ">
            <img src={img} height="20px" width="20px" className="mx-2" />
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
