import React, { useState } from "react";
import ReplyChat from "./ReplyChat";

const Message = ({ message }) => {
  // const [message, setMessage] = useState(true);
  console.log("message", message);
  const messageUser = (message) => {
    switch (message) {
      case message:
        return {
          display: "flex",
          justifyContent: "end",
        };
      case message.length > 0 + 1:
        return {
          display: "flex",
          justifyContent: "start",
        };

      default:
        return message;
    }
  };

  return (
    <div className="">
      <section className="">
        <div class="container py-5">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-4">
              <div class="card" id="chat1" style="border-radius: 15px;">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-start mb-4">
                    <div class="p-3 ms-3 style">
                      <p class="small mb-0">
                        Hello and thank you for visiting MDBootstrap. Please
                        click the video below.
                      </p>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Message;
// {
//   message &&
//     message?.messages?.map(({ message }, user) => {
//       const { display, justifyContent } = messageUser(message);
//       return (
//         <div className="card-body">
//           <div class="d-flex flex-row justify-content-end mb-4">
//             <div class="p-3 ms-3 style">
//               <p class="small mb-0 bg-primary">{message}</p>
//             </div>
//           </div>
//         </div>
//       );
//     });
// }
// <div
//   className="bg-primary text-white rounded d-flex align-items-center align-self-end"
//   style={{
//     width: "auto",
//     height: "40px",
//     listStyle: "none",
//     marginTop: "8rem",
//   }}
// >
//   <li className="mx-3"></li>
// </div>;
