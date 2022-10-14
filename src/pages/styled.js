import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #f9fdfc;
  padding-left: 30px;
  min-height: 100vh;
`;

export const Img = styled.img`
  width: 200px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 100px;
`;
export const TotalValue = styled.div`
  display: grid;
  grid-template-columns: 1fr, 1fr, 4fr;
  justify-content: center;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  text-align: center;
  color: gray;
`;
export const TotalValueFont = styled.h5`
  font-size: 20px;
  color: rgb(0, 45, 98);
`;
