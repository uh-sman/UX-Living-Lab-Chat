import React, { useContext, useEffect, useState } from "react";
import img from "../../../assets/avatar.png";
import ProductContext from "../../ContextProvider/DataContext";
const Rooms = ({ results }) => {
  const { productList, roomList, rooms, getMessage, setRoom_Id } =
    useContext(ProductContext);
  console.log("results", rooms);
  const [roomId, setRoomId] = useState();
  console.log(roomId);
  const setIds = (room_id) => {
    // setRoomId(room_id);
    setRoom_Id(room_id);
  };
  // useEffect(() => {
  //   getMessage();
  // }, []);
  return (
    <div className="my-3">
      <div className="">
        <div
          className="d-flex flex-column justify-content-start gap-4  rounded"
          onClick={() => console.log("clicked")}
        >
          {rooms?.rooms?.map(({ room_id, room_name }) => {
            return (
              <div className="d-flex mx-2" onClick={() => setIds(room_id)}>
                <figure className="d-flex ">
                  <img src={img} height="50px" width="50px" className="mx-2" />
                </figure>
                <div className="d-flex">
                  <small className="text-primary">{room_id}</small>
                  <small className="text-primary">{room_name}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
