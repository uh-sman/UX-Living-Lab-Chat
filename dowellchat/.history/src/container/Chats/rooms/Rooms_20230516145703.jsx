import React, { useContext } from "react";
import img from "../../../assets/avatar.png";
import ProductContext from "../../ContextProvider/DataContext";
const Rooms = () => {
  const { productList, roomList } = useContext(ProductContext);
  return (
    <div>
      <div className="">
        <div className="d-flex gap-2 border rounded ">
          <figure className="d-flex">
            <img src={img} height="20px" width="20px" />
            <p className="text-primary">
              {/* {room_id} */}
              24
            </p>
          </figure>
        </div>
        <div className="d-flex gap-2 border rounded ">
          <figure className="d-flex">
            <img src={img} height="20px" width="20px" />
            <p className="text-primary">
              {/* {room_id} */}
              24
            </p>
          </figure>
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
