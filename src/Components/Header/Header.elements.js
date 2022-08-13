import styled from "styled-components";
import { Link } from "react-router-dom";



export const HeaderWrapper =styled.div`
    color: #fff;
    width: 100%;
    height: 620;
    position: sticky;
    z-index: 1;
    
`;
export const HeaderBackground =styled.img`
    width: 100%;
    height: 580px;
    object-fit: cover;
`;
export const HeaderSideBox =styled.div`
    position: absolute;
    width: 390px;
    height: 264px;
    left: 144px;
    top: 112px;
    background-color: #fff;
    border-radius: 10px;

`;
export const HeaderPBig =styled.p`
    width: 254px;
    height: 84px;
    font-family: 'Roboto Serif', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin-top: 30px;
    margin-left: 30px;
    color: #310401;


`;
export const HeaderPSmall =styled.p`
    font-family: 'Roboto Serif', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 12px;
    margin-left: 30px;
    color: #5E4F4F;
    width: 327px;
    height: 48px;



`;
export const HeaderSubmit =styled.input`
    background: #C12630;
    border-radius: 10px;
    position: relative;
    display: inline-block;
    font-size: 16px;
    padding-left: 25px;
    text-align: start;
    box-sizing: border-box;
    transition: 2s;
    font-family: Titillium Web;
    width: 179px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    margin-top: 20px;
    margin-left: 30px;


`;
export const HeaderIcon =styled.div`
    position: absolute;
    left: 10rem;
    bottom: 2.6rem;
    height: 12px;
    width: 12px;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    z-index: 100;
`;