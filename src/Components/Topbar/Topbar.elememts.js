import styled from "styled-components";
import { Link } from "react-router-dom";



export const Top =styled.div`
    display: flex;
    background: linear-gradient(90deg, #F1364B 9.48%, #C72834 24.65%, #710C04 56.15%);
    color: #fff;
    height: 60px;
    justify-content: space-between;
    width: 100%;
    position: sticky;
    z-index: 999;
    top: 0;
    font-family: 'Josefin Sans', sans-serif;
    z-index: 999;
`;
export const TopbarLogo =styled.div`
    flex: .5;
    display: flex;
    margin-left: 50px;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    
    @media screen and (max-width: 670px) {
        flex: .1;
        margin-left: 0px;

    }
    
`;
export const TopbarImg =styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;

    @media screen and (max-width: 300px) {
        width: 30px;
        height: 30px;
    }
    
    
`;
export const TopCenter =styled.div`
    flex: 6;
    display: flex;
    align-items: center;

    @media screen and (max-width: 670px) {
        flex: 7;
        margin-left: 0px;
        border: 2px solid blue;

    }

    
`;
export const TopbarUl =styled.ul`
    flex: 1;
    display: flex;
    align-items: center;
     
`;
export const TopbarLi =styled.li`
    flex: 1;
    display: flex;
    align-items: center;
    
`;
export const Topbarlink =styled(Link)`

    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px;
    font-weight: 400;
    font-size: 12px;
    height: 100%;
    font-family: Titillium Web;
    line-height: 21px;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 5px;
        display: table;

        &:hover {
            color: red;
            transition: all 0.3s ease-out;
        }

    }
    
    @media screen and (max-width: 520px) {
        font-size: 10px;
    }
`;
export const TopbarIcon =styled.div`
    flex: .5;
    display: flex;
    align-items: center;
    padding: 15px;
    cursor: pointer;

    @media screen and (max-width: 670px) {
        flex: .1;
        margin-right: 0px;
        border: 2px solid blue;

        
    }
    
    
`;