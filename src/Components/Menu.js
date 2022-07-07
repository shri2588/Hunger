import React,{ useState } from 'react'
import MenuApi from './ManuApi';
import MenuCard from "./MenuCard";
import ItemList from './ItemList'

const uniqueList = [
    ...new Set(
        MenuApi.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];

const Menu = () => {
    const [menuData, setMenuData] = useState(MenuApi);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(MenuApi);
      return;
    }

    const updatedList = MenuApi.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };
  return (
    <>
      <ItemList filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Menu