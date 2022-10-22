import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import ProductCard from "../components/ProductCard/ProductCard";
import logo from "../assets/logo.png";
import useForm from "../hooks/useForm";
import { Button, TextField } from "@mui/material";
import ItemCard from "../components/ItemCart/ItemCart";
import {
  Img,
  MainContainer,
  Products,
  TotalValue,
  TotalValueFont,
  Wrapper,
} from "./styled";
import { primary } from "../constants/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [form, handleForm, clear] = useForm({
    name: "",
    date: "",
  });

  const getProducts = () => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => setProductList(res.data.products))
      .catch((err) => alert(err.response));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (products) => {
    const newProduct = { ...products, productQuantity: 1 };
    const newCart = [...cart, newProduct];
    setCart(newCart);
  };

  const removeFromCart = (products) => {
    const newCart = cart.filter((item) => {
      return products.id !== item.id;
    });
    setCart(newCart);
  };

  const increasesQty = (products) => {
    const productQuantity = products.productQuantity + 1;
    const newProduct = { ...products, productQuantity };
    updateCart(newProduct);
  };

  const decreaseQty = (products) => {
    const productQuantity = products.productQuantity - 1;
    const newProduct = { ...products, productQuantity };
    updateCart(newProduct);
  };

  const updateCart = (productToUpdate) => {
    const newCart = cart.map((products) => {
      if (products.id === productToUpdate.id) {
        return productToUpdate;
      }

      return products;
    });

    setCart(newCart);
  };

  const calculateTotalPrice = () => {
    let sum = 0;

    for (let item of cart) {
      let qty = item.productQuantity;
      let price = item.price;
      sum += price * qty;
    }
    setTotalPrice(sum);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  const showProducts =
    productList &&
    productList.map((products) => {
      return (
        <ProductCard
          key={products.id}
          products={products}
          addToCart={addToCart}
        />
      );
    });
  const showCartItems =
    cart &&
    cart.map((item) => {
      return (
        <ItemCard
          key={item.id}
          item={item}
          increasesQty={increasesQty}
          decreaseQty={decreaseQty}
          removeFromCart={removeFromCart}
        />
      );
    });

  const createOrder = (body) => {
    axios
      .post(`${BASE_URL}/orders`, body)
      .then((response) => {
        console.log(response);
        window.alert("Pedido cadastrado com sucesso!");
      })
      .catch((error) => {
        console.log(error.response.data);
        window.alert("Ops, algo deu errado! Tente novamente.");
      });
  };

  const submitOrder = (event) => {
    event.preventDefault();
    const cartDTO = cart.map((item) => {
      return {
        productId: item.id,
        productQuantity: item.productQuantity,
      };
    });

    const order = {
      ...form,
      list: cartDTO,
    };

    createOrder(order);
    clear();
  };

  return (
    <MainContainer>
      <Img src={logo} alt="Logo da Shopper.com.br" />

      <Wrapper>
        <Products>{showProducts}</Products>

        <TotalValue>
          <TotalValueFont>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography variant="h5" gutterBottom>
                Valor total da compra: R$ <b>{totalPrice.toFixed(2)}</b>
              </Typography>
            </Box>
          </TotalValueFont>

          {showCartItems}

          <form onSubmit={submitOrder}>
            <TextField
              name="clientName"
              label={"Nome"}
              value={form.clientName}
              onChange={handleForm}
              variant={"outlined"}
              margin={"normal"}
              required
            />

            <TextField
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleForm}
              margin={"normal"}
              required
            />
            <Button
              style={{ background: primary }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              margin={"normal"}
            >
              Finalizar compra!
            </Button>
          </form>
        </TotalValue>
      </Wrapper>
    </MainContainer>
  );
};

export default HomePage;
