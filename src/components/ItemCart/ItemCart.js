import React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import { CardOrdersItems, MainOrder, ProductPrice, Quantity } from "./styled";
import { primary, neutralColor } from "../../constants/colors";

const ItemCard = (props) => {
  return (
    <MainOrder>
      <p>{props.item.name}</p>
      <ProductPrice>
        <b>R$: {props.item.price}</b>
      </ProductPrice>

      <CardOrdersItems>
        <IconButton
          style={{ color: neutralColor }}
          onClick={() => props.decreaseQty(props.item)}
          disabled={props.item.productQuantity === 1}
        >
          <DoNotDisturbOnIcon fontSize="inherit" />
        </IconButton>
        <Quantity><b>{props.item.productQuantity}</b></Quantity>
        <IconButton
          style={{ color: primary }}
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => props.increasesQty(props.item)}
          disabled={props.item.productQuantity === props.item.qty_stock}
        >
          <AddShoppingCartIcon />
        </IconButton>

        <IconButton
          style={{ color: neutralColor }}
          aria-label="delete"
          variant="contained"
          onClick={() => props.removeFromCart(props.item)}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardOrdersItems>
    </MainOrder>
  );
};

export default ItemCard;
