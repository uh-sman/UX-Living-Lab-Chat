import React, { useState, useContext } from "react";
import ReplyChat from "./ReplyChat";
import clsx from "clsx";
import doctor from "../../../assets/doctor.png";
import ProductContext from "../../ContextProvider/DataContext";
const Message = ({ message }) => {
  // const [message, setMessage] = useState(true);
  const { rooms, messages } = useContext(ProductContext);
  console.log("message", message);
  console.log("message", messages);
  console.log("room from message", rooms);
  const { id } = messages ?? {};
  const messageUser = (id) => {
    switch (id) {
      case id === 28:
        return {
          display: "flex",
          justifyContent: "end",
        };
      case id === 29:
        return {
          display: "flex",
          justifyContent: "start",
        };

      default:
        return null;
    }
  };
  const chatStyle = {
    paddingTop: "8rem",
  };

  // function authorId(id) {
  //   if (id) {
  //     return {
  //       justifyContent: "start",
  //     };
  //   }
  // }
  const { display, justifyContent } = messageUser ?? {};
  return (
    <div className="">
      <section className="">
        <div className="container" style={chatStyle}>
          <div
            className={clsx(
              `row d-flex justify-content-end`,
              messageUser && "justify-content-start"
            )}
            style={{ display, justifyContent }}
          >
            <div className="col-md-8 col-lg-6 col-xl-4">
              {messages ? (
                messages?.messages?.map(({ message, id }) => {
                  const { display, justifyContent } = messageUser ?? {};
                  return (
                    <div
                      className=""
                      id="chat1"
                      style={{ borderRadius: "15px" }}
                    >
                      <div className="card-body">
                        <div
                          className="d-flex flex-row justify-content-end mb-4"
                          style={{ display, justifyContent }}
                        >
                          <div className="p-3 ms-3 style bg-primary">
                            <p className="small mb-0">{message}</p>
                          </div>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>
                  <div className="" id="chat1" style={{ borderRadius: "10px" }}>
                    <div className="card-body">
                      <div className="d-flex flex-row justify-content-end mb-4">
                        <div
                          className=" style bg-primary"
                          style={{ padding: "0.5rem 1rem" }}
                        >
                          <p className="small mb-0 text-nowrap fs-6">
                            Hey, How may I help you ?
                          </p>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </div>
                  {/* Receiver authorId */}
                </div>
              )}
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
