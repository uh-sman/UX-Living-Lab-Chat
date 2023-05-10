import React from "react";
import user from "../../../assets/user.jpg";
const ReplyChat = () => {
  return (
    <div>
      <div className="d-flex justify-content-end my-5">
        <div
          class="border rounded d-flex align-self-end"
          style={{ width: "35rem", height: "10rem" }}
        >
          <div class="card-body">
            <div className="d-flex">
              <div className="d-flex">
                <img src={user} alt="user-image" className=" image-style" />
                <div className="form-control">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder=".form-control-lg"
                    aria-label=".form-control-lg example"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyChat;
