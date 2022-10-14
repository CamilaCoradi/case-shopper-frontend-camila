import styled from "styled-components"


export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 150px;
    border-radius: 10px;
    p {
        text-transform: capitalize;
        font-size: 12px
    }
    padding-bottom: 20px;
    padding-top: 20px;
    font-size: small;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
`
export const NameCard = styled.p`
color: gray
`
export const PriceCard = styled.p`
    color: rgb(45, 167, 122);
    width: 80px;
`
export const QtyCard = styled.p`
color: rgb(0, 45, 98);

`
export const ButtonAdd = styled.button`
    background-color: rgb(255, 255, 255);
    color: rgb(45, 167, 122);
    font-size: 12px;
    font-weight: bold;
    padding: 6px 12px;
    margin-bottom: 0px;
    line-height: 1.42857;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border-radius: 50px;
    border: 2px solid rgb(45, 167, 122);
    &:hover{
        color: #14396A !important;
  background: rgb(45, 167, 122)
    }
    
`;

