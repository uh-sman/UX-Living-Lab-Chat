import { useEffect, useContext } from "react";
import "./button.css";
import { AppProvider } from "../ContextProvider/DataContext";
import ProductContext from "../ContextProvider/DataContext";
const Buttons = () => {
  const { productList } = useContext(ProductContext) ?? {};
  console.log(productList);

  const buttonStyles = (title) => {
    switch (title) {
      case "Login":
        return { backgroundColor: "#90e7b5", color: "black" };
      case "Extension":
        return { backgroundColor: "#ff9898", color: "black" };
      case "Living-Lab-Admin":
        return { backgroundColor: "#90e7b5", color: "black" };
      case "Sales-Agent":
        return {
          border: "1px solid #fca5a5",
          color: "black",
          backgroundColor: "transparent",
        };

      default:
        return null;
    }
  };
  // {
  //   productList &&
  //     productList.map((title) => {
  //       const { backgroundColor, color, border } = buttonStyles(title) ?? {};
  //       return (
  //         <button
  //           key={title}
  //           type="button"
  //           className="btn btn-sm btn-success"
  //           style={{ backgroundColor, color, border }}
  //         >
  //           {title}
  //         </button>
  //       );
  //     });
  // }
  return (
    <div className="container-full">
      <div className=" d-flex flex-nowrap">
        <div className="d-flex flex-nowrap gap-3  text-nowrap py-3" id="scroll">
          {productList &&
            productList.map((title) => {
              const { backgroundColor, color, border } =
                buttonStyles(title) ?? {};
              return (
                <button
                  key={title}
                  type="button"
                  className="btn btn-sm btn-success"
                  style={{ backgroundColor, color, border }}
                >
                  {title}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
{
  /* <button type="button" className="rounded  button3">
            Login
          </button>
          <button type="button" className="rounded button4">
            Extension
          </button>
          <button type="button" className="rounded button3 fs-6">
            Living-Lab-Admin
          </button>
          <button type="button" className="rounded buttonCustom">
            Sales-Agent
          </button>
          <button
            type="button"
            className="rounded button3 d-flex gap-2 align-items-center"
          >
            DoWell CSC
            <span
              className="badge bg-primary"
              // style={{ padding: "0.2px 7px" }}
            >
              11
            </span>
          </button> */
}
