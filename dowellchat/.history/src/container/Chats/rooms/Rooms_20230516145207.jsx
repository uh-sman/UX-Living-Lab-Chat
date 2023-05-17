import React, { useContext } from "react";
import img from "../../../assets/avatar.png";
import ProductContext from "../../ContextProvider/DataContext";
const Rooms = () => {
  const { productList, roomList } = useContext(ProductContext);
  return (
    <div>
      <figure className="d-flex gap-2 border rounded py-2">
        {roomList?.rooms?.map(({ room_id }) => {
          return (
            <>
              <img src={img} height="20px" width="20px" />
              <p className="text-primary" key={room_id}>
                {room_id}
              </p>
            </>
          );
        })}
      </figure>
    </div>
  );
};

export default Rooms;
