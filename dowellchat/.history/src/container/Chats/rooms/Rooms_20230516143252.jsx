import React, { useContext } from "react";
import img from "../../../assets/avatar.png";
import ProductContext from "../../ContextProvider/DataContext";
const Rooms = () => {
  const { productList, roomList } = useContext(ProductContext);
  return (
    <div>
      {roomList?.rooms?.map(({ room_id }) => {
        <figure className="d-flex gap-2">
          <img src={img} height="20px" width="20px" />
          return (
          <>
            <p className="text-primary" key={room_id}>
              {room_id}
            </p>
          </>
          );
        </figure>;
      })}
    </div>
  );
};

export default Rooms;
