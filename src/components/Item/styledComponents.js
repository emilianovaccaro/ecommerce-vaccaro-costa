import styled from "styled-components";

//ItemCount
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`;

//Item
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    diplay: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const ProductContainer = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    width: 70%;
    height: 70%;
    z-index: 2;
`;

const Icon = styled.div`
    font-size: 12px;
    width: 100px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.3);
    }
`;


//ItemDetail
const DetailContainer = styled.div`
`;

const WrapperDetail = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const ImageDetail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    text-align: center;
    color: black;
    z-index: 3;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

export { 
    ProductContainer, Circle, Image, Info,
    Icon, DetailContainer, WrapperDetail, 
    ImgContainer, ProductAmountContainer, 
    ImageDetail, InfoContainer, 
    Title, Desc, Price
}