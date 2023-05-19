import React, { useContext, useEffect, useState } from "react";
import img from "../../../assets/avatar.png";
import ProductContext from "../../ContextProvider/DataContext";
const Rooms = ({ results }) => {
  const { productList, roomList, rooms, getMessage } =
    useContext(ProductContext);
  console.log("results", rooms);
  const [roomId, setRoomId] = useState();
  console.log(roomId);
  const setIds = (room_id) => {
    setRoomId(room_id);
  };
  useEffect(() => {
    getMessage();
  }, []);
  return (
    <div className="my-3">
      <div className="">
        <div
          className="d-flex flex-column justify-content-start gap-4  rounded"
          onClick={() => console.log("clicked")}
        >
          {rooms?.rooms?.map(({ room_id }) => {
            return (
              <div
                className="d-flex shadow-sm rounded mx-2"
                onClick={() => setIds(room_id)}
              >
                <figure className="d-flex ">
                  <img src={img} height="20px" width="20px" className="mx-2" />
                </figure>
                <p className="text-primary">{room_id}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
