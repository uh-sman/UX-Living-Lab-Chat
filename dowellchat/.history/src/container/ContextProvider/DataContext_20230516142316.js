import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export const AppProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [roomList, setRoomList] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // const myMessage = [{ name: "usman" }];

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
        console.log("getting products", productList);
        setProductList(res.data.product_list);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  const productUrl = "https://100096.pythonanywhere.com/room_list/extension";
  useEffect(() => {
    const handleProductClick = async () => {
      // setSelectedProduct(product);
      const res = await axios.get(productUrl);
      // console.log("this is the response", res);
      const data = res;
      console.log("this is the data", data);
      // const { rooms,firstroom,messages } = data?.data;

      setRoomList(data?.data);
      console.log("roomList", roomList);
      // .catch(err => {
      //   console.log('error', err);
      // })
    };
    handleProductClick();
  }, []);
  return (
    <ProductContext.Provider
      value={{ productList, message, messages, handleMessageSend, roomList }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
