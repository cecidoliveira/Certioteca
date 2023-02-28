import  styled  from "styled-components";


export const DivTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem;

`
export const Imagem = styled.img`
    height: 10rem;
`
export const CertButton = styled.p`
    display: flex;
    font-size: 8rem;
    color: #ffffff;

`

export const Title = styled.h1`
    display: flex;
    align-items: center;

    background-color: #7AC5E5;
    border: #ffffff 0.4rem solid;
    color: #10286C;
    font-size: 4rem;
    font-weight: 600;
    padding: 1.5rem 5rem;
    
`

export const DivBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;

    color: #10286C;
    font-weight: 600;
    font-size: 2.5rem;
    p{
        margin-top: 2rem;
    }
    input{
        margin: 2rem;
        font-size: 2rem;
    }
    button{
        margin: 2rem auto 0;
        font-size: 3rem;
        width: 30%;
        height: 5rem;
        border-radius: 1.5rem;
    }
`
