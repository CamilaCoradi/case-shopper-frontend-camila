import React from "react";
import { ButtonAdd, CardStyle, NameCard, PriceCard, QtyCard } from "./styled";

const ProductCard = (props) => {
  return (
    <CardStyle>
      <NameCard>{props.products.name}</NameCard>
      <PriceCard><b>R$ {props.products.price}</b></PriceCard>
      <QtyCard>Quantidade {props.products.qty_stock}</QtyCard>
      <ButtonAdd onClick={() => props.addToCart(props.products)}>+ Adicionar </ButtonAdd>

    </CardStyle>
  );
};
export default ProductCard;
