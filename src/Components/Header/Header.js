import React from 'react';
import { HeaderWrapper, HeaderBackground, HeaderSideBox, HeaderPBig, HeaderPSmall, HeaderSubmit, HeaderIcon } from "./Header.elements";
import UserImg from '../../Images/Furniture.jpg';
import { AiFillCaretRight } from "react-icons/ai";

function Header() {
  return <HeaderWrapper>
                <HeaderBackground
                    src = {UserImg} 
                    alt ="jack"
                />
                <HeaderSideBox>
                    <HeaderPBig>Make Your Home Easy With Professional Builders</HeaderPBig>
                    <HeaderPSmall>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor rhoncus augue dui vestibulum. Porttitor vel rhoncus in </HeaderPSmall>
                    <HeaderSubmit type = "submit" name ="" value ="Learn more" ></HeaderSubmit>
                    <HeaderIcon>
                        <AiFillCaretRight size ="16" color='#fff' />
                    </HeaderIcon>
                </HeaderSideBox>
        </HeaderWrapper>

}

export default Header;


 