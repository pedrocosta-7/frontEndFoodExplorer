import { Container } from "./styles";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { Button } from "../button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext"; // Importando o contexto do carrinho

import Pencil from "../../assets/Pencil.png";
import heart from "../../assets/heart.png";

export function Card({ title, price, image, isAdmin, descriptionToDesktop, dishId }) {
  const [total, setTotal] = useState(1);
  const navigate = useNavigate();

  const { addToCart } = useCart(); // acessa o contexto do carrinho

  function handleEditDish() {
    navigate(`/editdish/${dishId}`);
  }

  function handleAddPlusOne() {
    setTotal(total + 1);
  }

  function handleMinusOne() {
    if (total > 1) {
      setTotal(total - 1);
    }
  }

  function handleAddToCart() {
    const dish = {
      id: dishId,
      title,
      price,
      image,
      description: descriptionToDesktop,
      quantity: total,
    };

    addToCart(dish);     // adiciona ao carrinho
    navigate("/dish");   // redireciona para a página do carrinho
  }

  return (
    <Container>
      <button onClick={handleEditDish}>
        <img src={isAdmin ? Pencil : heart} alt="Edit" />
      </button>

      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{descriptionToDesktop}</p>
      <span>{price}</span>

      {!isAdmin && (
        <>
          <div>
            <button onClick={handleMinusOne}>
              <LuMinus />
            </button>
            <span>{total}</span>
            <button onClick={handleAddPlusOne}>
              <FiPlus />
            </button>
          </div>
          <Button title="incluir" heightOfButton="32px" onClick={handleAddToCart} />
        </>
      )}
    </Container>
  );
}



/*
import { Container } from "./styles";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { Button } from "../button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext"; // Importando o contexto do carrinho

import Pencil from "../../assets/Pencil.png";
import heart from "../../assets/heart.png";

export function Card({ title, price, image, isAdmin, descriptionToDesktop, dishId }) {
  const [total, setTotal] = useState(1);
  const navigate = useNavigate();

  // Acessando o contexto do carrinho
  const { addToCart } = useCart();

  function handleEditDish() {
    console.log("Dish ID:", dishId); // Exibe o dishId no console
    navigate(`/editdish/${dishId}`); // Redireciona para a página de edição
  }

  function handleAddPlusOne() {
    setTotal(total + 1);
  }

  function handleMinusOne() {
    if (total > 1) {
      setTotal(total - 1);
    } else {
      setTotal(total);
    }
  }

  // Função para adicionar o prato ao carrinho
  function handleAddToCart() {
    const dish = {
      id: dishId,
      title,
      price,
      image,
      description: descriptionToDesktop,
      quantity: total,
    };
    addToCart(dish); // Chama a função para adicionar o prato ao carrinho
  }

  return (
    <Container>
      <button onClick={handleEditDish}>
        <img src={isAdmin ? Pencil : heart} alt="Edit" />
      </button>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{descriptionToDesktop}</p>
      <span>{price}</span>
      {isAdmin ? (
        <div></div>
      ) : (
        <div>
          <button onClick={handleMinusOne}>
            <LuMinus />
          </button>
          <span>{total}</span>
          <button onClick={handleAddPlusOne}>
            <FiPlus />
          </button>
        </div>
      )}
      {isAdmin ? <div></div> : <Button title="incluir" heightOfButton="32px" onClick={handleAddToCart} />}
    </Container>
  );
}



/*
import { Container } from "./styles";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { Button } from "../button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Pencil from "../../assets/Pencil.png";
import heart from "../../assets/heart.png";

export function Card({ title, price, image, isAdmin, descriptionToDesktop, dishId }) {
  const [total, setTotal] = useState(1);
  const navigate = useNavigate();

  function handleEditDish() {
    // Verifique o valor do dishId
    console.log("Dish ID:", dishId); // Isso vai mostrar o dishId no console.
    navigate(`/editdish/${dishId}`); // Redireciona para a página de edição, com o dishId
  }

  function handleAddPlusOne() {
    setTotal(total + 1);
  }

  function handleMinusOne() {
    if (total > 1) {
      setTotal(total - 1);
    } else {
      setTotal(total);
    }
  }

  return (
    <Container>
      <button onClick={handleEditDish}><img src={isAdmin ? Pencil : heart} alt="Edit" /></button>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{descriptionToDesktop}</p>
      <span>{price}</span>
      {isAdmin ? (
        <div></div>
      ) : (
        <div>
          <button onClick={handleMinusOne}>
            <LuMinus />
          </button>
          <span>{total}</span>
          <button onClick={handleAddPlusOne}>
            <FiPlus />
          </button>
        </div>
      )}
      {isAdmin ? <div></div> : <Button title="incluir" heightOfButton="32px" />}
    </Container>
  );
}
  */




