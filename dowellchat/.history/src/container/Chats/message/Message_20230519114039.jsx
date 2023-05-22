import React, { useState, useContext } from "react";
import ReplyChat from "./ReplyChat";
import ProductContext from "../../ContextProvider/DataContext";
const Message = ({ message }) => {
  // const [message, setMessage] = useState(true);
  const { rooms } = useContext(ProductContext);
  console.log("message", message);
  console.log("room from message", rooms);
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
        <div class="container py-2">
          <div class="row d-flex justify-content-end">
            <div class="col-md-8 col-lg-6 col-xl-4">
              {rooms &&
                rooms?.messages?.map(({ message }) => {
                  return (
                    <div class="" id="chat1" style={{ borderRadius: "15px" }}>
                      <div class="card-body">
                        <div class="d-flex flex-row justify-content-end mb-4">
                          <div class="p-3 ms-3 style bg-primary">
                            <p class="small mb-0">{message}</p>
                          </div>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Message;
// {
//   room ? (
//     <div class="" id="chat1" style={{ borderRadius: "15px" }}>
//       <div class="card-body">
//         <div class="d-flex flex-row justify-content-end mb-4">
//           <div class="p-3 ms-3 style bg-primary">
//             <p class="small mb-0">{room}</p>
//           </div>
//         </div>
//         {/*  */}
//       </div>
//     </div>
//   ) : (
//     <h1>No message yet</h1>
//   );
// }
// {
//   message &&
//     message?.messages?.map(({ message }) => {
//       return (
//         <div class="" id="chat1" style={{ borderRadius: "15px" }}>
//           <div class="card-body">
//             <div class="d-flex flex-row justify-content-end mb-4">
//               <div class="p-3 ms-3 style bg-primary">
//                 <p class="small mb-0">{message}</p>
//               </div>
//             </div>
//             {/*  */}
//           </div>
//         </div>
//       );
//     });
// }
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
