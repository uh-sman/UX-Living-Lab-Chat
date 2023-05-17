import React, { useContext } from "react";
import img from "../../../assets/avatar.png";
import ProductContext from "../../ContextProvider/DataContext";
const Rooms = () => {
  const { productList, roomList } = useContext(ProductContext);
  return (
    <div>
      <figure className="d-flex gap-2 border rounded ">
        {roomList?.rooms?.map(({ room_id }) => {
          return (
            <div className="my-3">
              <img src={img} height="20px" width="20px" />
              <p className="text-primary" key={room_id}>
                {room_id}
              </p>
            </div>
          );
        })}
      </figure>
    </div>
  );
};

export default Rooms;
