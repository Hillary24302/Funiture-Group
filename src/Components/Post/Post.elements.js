import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostWrapper =styled.div`
    width: 100%;
    height: 600px;
    background: #EFF0F0;
    display: flex;
    flex-direction: column;
    
`;

export const Container =styled.div`
    display: flex;
    position: absolute;
    width: 72.2%;
    height: 100px;
    left: 50%;
    margin-left: -440px;
    top: 595px;
    z-index: 988;
    background: #FFFFFF;
    box-shadow: 4px 4px 8px rgba(153, 153, 153, 0.15), -12px -12px 24px rgba(255, 255, 255, 0.25);
`;
export const ContainerLeft =styled.div`
    flex: 5.2;
    margin-top: 27.9px;
    margin-left: 29.8px;
`;

export const ContainerP =styled.p`
    width: 568px;
    height: 38px;
    font-family: 'Roboto Serif', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #5A4E4F;
`;
export const ContainerRight =styled.p`
    flex: 4.8;
    display: flex;
`;
export const ContainerHr =styled.p`
    border-left: 3px solid #C12630;
    height: 80px;
    margin-top: 8.5px;
`;
export const ContainerNum =styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #C12630;
    margin-top: 25px;
    margin-left: 15px;
`;
export const ContainerPRight =styled.p`
    font-family: 'Roboto Serif', sans-serif;
    height: 46px;
    width: 111px;
    margin-top: 23px;
    margin-left: 3px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #C12630;
`;
export const MainPost =styled.div`
    display: flex;
    height: 450px;
    margin-top: 90px;
    margin-left: 50px;
    margin-right: 50px;
`;
export const PostContainerLeft =styled.div`
    width: 335px;
    height: 445px;
    margin-right: 14px;
    margin-left: 14px;
    background: #FFFFFF;
    box-shadow: 4px 4px 8px rgba(153, 153, 153, 0.15), -4px -4px 8px rgba(255, 255, 255, 0.25);
    
`;
export const PostImgLeft =styled.img`
    width: 290px;
    height: 196px;
    margin-top: 13px;
    margin-left: 15px;
    margin-right: 15px;
`;
export const PostParag1 =styled.p`
    width: 148px;
    height: 28px;
    font-family: 'Roboto Serif', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #C12630;
    margin-top: 22px;
    margin-left: 15px;
`;
export const PostParag2 =styled.p`
    width: 250px;
    height: 21px;
    font-family: 'Roboto Serif', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #300204;
    margin-top: 2px;
    margin-left: 15px;
`;
export const PostParag3 =styled.p`
    width: 249px;
    height: 48px;
    font-family: 'Roboto Serif', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #5A4E4F;
    margin-top: 10px;
    margin-left: 15px;
`;
export const PostSubmit =styled.input`
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
    width: 173px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    margin-top: 40px;
    margin-left: 15px;
`;
export const PostLeftIcon =styled.div`
    margin-top: 13rem;
    margin-right: 15px;
    height: 18px;
    width: 18px;
`;
export const PostRightIcon =styled.div`
    margin-top: 13rem;
    margin-left: 15px;
    height: 18px;
    width: 18px;
`;
