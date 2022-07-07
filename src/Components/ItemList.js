import { Button } from "react-bootstrap";
import React from "react";
import '../ComponentCss/ItemList.css'
const ItemList = ({ filterItem, menuList }) => {
  return (
    <>
    <center>
    {menuList.map((curElem) => {
            return (
                <>
                              <Button
                className="ListBtn"
                onClick={() => filterItem(curElem)}> 
                {curElem}
              </Button>&nbsp;
                </>
            );
          })}
    </center>

    </>
  );
};

export default ItemList;
