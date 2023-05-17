import React, { useContext } from "react";
import img from "../../../assets/avatar.png";
import ProductContext from "../../ContextProvider/DataContext";
const Rooms = () => {
  const { productList, roomList } = useContext(ProductContext);
  return (
    <div>
      <figure className="d-flex gap-2">
        <img src={img} height="20px" width="20px" />
        {roomList?.rooms?.map((room) => {
          return (
            <p className="text-primary" key={id}>
              {room.id}
            </p>
          );
        })}
      </figure>
    </div>
  );
};

export default Rooms;
