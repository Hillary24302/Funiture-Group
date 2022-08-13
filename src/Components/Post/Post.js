
import React from 'react';
import PostImg1 from '../../Images/furniture3.jpg';
import PostImg2 from '../../Images/furniture2.jpg';
import PostImg3 from '../../Images/furniture1.jpg';
import { PostWrapper, Container, ContainerLeft, ContainerP, ContainerRight, ContainerHr, ContainerNum, 
    ContainerPRight, MainPost, PostContainerLeft, PostImgLeft, PostParag1, PostParag2, PostParag3, PostSubmit,
PostLeftIcon, PostRightIcon  } from "./Post.elements";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

function Post() {
    return <PostWrapper>
                <Container>
                    <ContainerLeft>
                        <ContainerP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est erat congue elit sit nisi, ullamcorper id. Ut facilisis purus risus </ContainerP>
                    </ContainerLeft>
                    <ContainerRight>
                        <ContainerHr></ContainerHr>
                        <ContainerNum>25</ContainerNum>
                        <ContainerPRight>Years experience</ContainerPRight>
                    </ContainerRight>
                </Container>
                <MainPost>
                    <PostLeftIcon>
                        <AiFillCaretLeft size ="18" color='#841E26' />
                    </PostLeftIcon>
                    <PostContainerLeft>
                        <PostImgLeft 
                                src = {PostImg1} 
                                alt ="jack"
                        />
                        <PostParag1>N5000000.00</PostParag1>
                        <PostParag2>Royal Standard  Home</PostParag2>
                        <PostParag3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at consequat laor</PostParag3>
                        <PostSubmit type = "submit" name ="" value ="Learn more" ></PostSubmit>
                    </PostContainerLeft>
                    <PostContainerLeft>
                        <PostImgLeft 
                                src = {PostImg2} 
                                alt ="jack"
                        />
                        <PostParag1>N7000000.00</PostParag1>
                        <PostParag2>Pure Simple Classic</PostParag2>
                        <PostParag3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at consequat laor</PostParag3>
                        <PostSubmit type = "submit" name ="" value ="Learn more" ></PostSubmit>
                    </PostContainerLeft>
                    <PostContainerLeft>
                        <PostImgLeft 
                                src = {PostImg3} 
                                alt ="jack"
                        />
                        <PostParag1>N2000000.00</PostParag1>
                        <PostParag2>Executive Standard Palace</PostParag2>
                        <PostParag3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at consequat laor</PostParag3>
                        <PostSubmit type = "submit" name ="" value ="Learn more" ></PostSubmit>
                    </PostContainerLeft>
                    <PostRightIcon>
                        <AiFillCaretRight size ="18" color='#841E26' />
                    </PostRightIcon>
                </MainPost>
    </PostWrapper>
}
export default Post