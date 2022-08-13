import React from 'react';
import { Top, TopbarLogo, TopbarImg, TopCenter,TopbarUl, TopbarLi, Topbarlink, TopbarIcon } from "./Topbar.elememts";
import UserImg from '../../Images/logo.png';
import { AiOutlineMenu } from "react-icons/ai";

function Topbar() {
  return <Top>
                <TopbarLogo>
                    <TopbarImg 
                            src = {UserImg} 
                            alt ="jack"
                    />
                </TopbarLogo>
                <TopCenter>
                    <TopbarUl>
                        <TopbarLi>
                           <Topbarlink to="/">Home</Topbarlink>
                           <Topbarlink to="/">Our company</Topbarlink>
                           <Topbarlink to="/">Services</Topbarlink>
                           <Topbarlink to="/">Strategies</Topbarlink>
                           <Topbarlink to="/">Portfolio</Topbarlink>
                           <Topbarlink to="/">Contact</Topbarlink>
                        </TopbarLi>
                    </TopbarUl>
                </TopCenter>
                <TopbarIcon>
                        <AiOutlineMenu size ="24" color ="#fff" />
                </TopbarIcon>
                

        </Top>;
}

export default Topbar;
