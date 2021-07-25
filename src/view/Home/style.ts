import styled from "styled-components";

export const Container = styled.div`
width: 80%;
margin:auto;

section{
    height:200vh;
    width:100%;
    background-image:url("https://upload.wikimedia.org/wikipedia/commons/e/e8/Yard_Sale_Northern_CA_2005.JPG");
    background-size:cover;
    background-position:center;
    display:block;
    text-align:center;

    h1{
        font-size:50px;
        color:#fff;
        padding-top:80px
    }
    
    span{
        font-size:14px;
    }

    .product-content{
        display:grid;
        text-align:center;
        height:500px;
        max-width:30%;
        background:#ffffffba;
        border-radius:12px;
        margin:5% 1.6%;
        float:left;
    }

    .product-content span{
        padding: 10px 30px;
    }

    .product-content img{
        width:auto;
        height:200px;
        position:relative;
        left:50%;
        padding:40px;
        transform: translateX(-50%);
    }

    .product-content:nth-child(6) img, .product-content:nth-child(7) img{
        width:40%;
    }
}
`