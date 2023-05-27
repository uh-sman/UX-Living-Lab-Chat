import { useState, useContext } from "react";
import user from "../../../assets/avatar.png";
import { Tooltip } from "react-tooltip";
import {
  FaRegPaperPlane,
  FaPaperPlane,
  FaTelegramPlane,
  FaReply,
  FaThumbsUp,
  FaLink,
} from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import ProductContext from "../../ContextProvider/DataContext";
import { HiOutlineHandThumbUp, HiHandThumbUp } from "react-icons/hi2";
import InputBox from "./InputBox";
const ReplyChat = () => {
  const { handleMessageSend } = useContext(ProductContext);
  const [input, setInput] = useState("");
  const handleSubmit = (e, handleMessageSend) => {
    e.preventDefault();
    handleMessageSend(input);
    console.log(input);
  };
  return (
    <div className="">
      <div className="d-flex justify-content-end pb-2">
        <div class="border d-flex replyBody">
          <div class="card-body">
            <form action="" onSubmit={handleSubmit}>
              <div className="d-flex align-items-center justify-content-between mx-3">
                <div className="d-flex gap-4  my-3">
                  <img src={user} alt="user-image" className=" image-styles" />
                  <div className="form">
                    <InputBox input={input} setInput={setInput} />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <button className="btn" type="submit">
                      <FaPaperPlane className="fs-4 text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="d-flex justify-content-end">
              <div className="">
                <ul className="">
                  <button
                    className="btn text-primary"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Attach a file"
                  >
                    <FaLink className="" />
                    <Tooltip id="my-tooltip" />
                  </button>
                  <button
                    className="btn text-primary"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Reply"
                  >
                    {" "}
                    <FaReply className="" />
                    <Tooltip id="my-tooltip" />
                  </button>
                  <button
                    className="btn text-primary"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="emoji"
                  >
                    <HiOutlineEmojiHappy className="" />
                    <Tooltip id="my-tooltip" />
                  </button>
                  <button
                    className="btn text-primary"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Like"
                  >
                    <FaThumbsUp className="" />
                    <Tooltip id="my-tooltip" />
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyChat;
