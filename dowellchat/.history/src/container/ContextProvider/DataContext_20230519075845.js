import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export const AppProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [roomList, setRoomList] = useState({});
  const [click, setClick] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatHeader, setChatHeader] = useState("");
  const [rooms, setRooms] = useState();
  const [roomsId, setRoomsId] = useState();
  console.log("chatHeader from context", chatHeader);
  // const onSetChatHeader = (header) => setChatHeader(header);
  // const myMessage = [{ name: "usman" }];
  const getMessages = async (title) => {
    try {
      const res = await axios.get(
        `https://100096.pythonanywhere.com/room_list/Login`
      );

      console.log("res.data from context", res?.data);
      setRooms(res?.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  // useEffect(() => {
  //   if (Boolean(chatHeader)) getMessages();
  // }, [chatHeader]);
  useEffect(() => {
    getMessages();
  }, [chatHeader]);
  const handleMessageSend = (props) => {
    axios
      .post(
        `https://100096.pythonanywhere.com/send_message/<int:pk>/?room_id=${2}`,
        {
          message: message,
          user_id: props.userId,
          side: true,
        }
      )
      .then((response) => {
        console.log(response.data);
        const newMessage = response.data;
        // Add the new message to the chat app state
        console.log(newMessage);
        //   setMessages([...messages, newMessage]);
      })
      .catch((error) => {
        console.log(error);
      });
    setMessage("");
  };

  useEffect(() => {
    axios
      .get(`https://100096.pythonanywhere.com/admin_product_list/`)
      .then((res) => {
        // console.log("getting products", productList);
        setProductList(res.data.product_list);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  // useEffect(() => {
  const productUrl = `https://100096.pythonanywhere.com/room_list/${click}`;
  const handleProductClick = async () => {
    // setSelectedProduct(product);
    const res = await axios.get(productUrl);
    // console.log("this is the response", res);
    const data = res?.data;
    console.log("this is the data", data);
    // const { rooms,firstroom,messages } = data?.data;

    // setRoomList(data);
    // console.log(roomList, "roomList state");
    // console.log("data", roomList);
    // .catch(err => {
    //   console.log('error', err);
    // })
  };
  // handleProductClick();
  // }, []);
  // console.log(click);
  useEffect(() => {
    const clientProductList = async () => {
      const res = await axios.get(
        "https://100096.pythonanywhere.com/client_product_list"
      );
      console.log(productList, res);
    };
    clientProductList();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        productList,
        message,
        messages,
        handleMessageSend,
        roomList,
        click,
        setClick,
        chatHeader,
        setChatHeader,
        rooms,
        setRooms,
        getMessages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
