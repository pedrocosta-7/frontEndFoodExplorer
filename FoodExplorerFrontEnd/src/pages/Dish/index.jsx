// src/pages/Dish/index.jsx

import { Container, Content, Tags, Order } from "./styles";
import { HeaderHome } from "../../components/headerHome";
import { ButtonBack } from "../../components/buttonBack";
import { TagIngredient } from "../../components/tagIngredient";
import { Button } from "../../components/button";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";

export function Dish() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const dish = cart.length > 0 ? cart[cart.length - 1] : null;

  const [total, setTotal] = useState(dish?.quantity || 1);

  function handleClick() {
    navigate("/");
  }

  function handlePlusOne() {
    setTotal((prev) => prev + 1);
  }

  function handleMinusOne() {
    if (total > 1) {
      setTotal((prev) => prev - 1);
    }
  }

  // Função para finalizar o pedido
  function handleOrder() {
    alert("Pedido concluído!");
    navigate("/"); // Redireciona para a página Home
  }

  return (
    <Container>
      <HeaderHome titleOfButton={`Pedidos (${cart.length})`} />
      <Content>
        <div>
          <ButtonBack
            imgWidth="32px"
            imgHeight="32px"
            fontSizeText="24px"
            onClick={handleClick}
          />
          <img src={dish?.image} alt={dish?.title || "Prato"} />
        </div>

        <div id="details">
          <h1>{dish?.title || "Sem prato no carrinho"}</h1>
          <p>{dish?.description || "Nenhuma descrição disponível."}</p>

          <Tags>
            <TagIngredient title="alface" />
            <TagIngredient title="cebola" />
            <TagIngredient title="tomate" />
          </Tags>

          <Order>
            <div>
              <button onClick={handleMinusOne}>
                <LuMinus />
              </button>
              <span>{total}</span>
              <button onClick={handlePlusOne}>
                <FiPlus />
              </button>
            </div>
            <Button
              heightOfButton="37.86px"
              title={`pedir ∙ R$ ${dish?.price || "0,00"}`}
              onClick={handleOrder} // Chama a função para finalizar o pedido
            />
          </Order>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}


/*
import { Container, Content, Tags, Order } from "./styles";
import { HeaderHome } from "../../components/headerHome";
import { ButtonBack } from "../../components/buttonBack";
import { TagIngredient } from "../../components/tagIngredient";
import PratoImg from "../../assets/PratoImg.png";
import { Button } from "../../components/button";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export function Dish() {
const navigate = useNavigate();

function handleClick(){
  navigate("/")
}

const [total, setTotal] = useState(1)

function handlePlusOne(){
  setTotal(total +1)
}
function handleMinusOne(){
  if(total >1 ){
    setTotal(total -1)
  } else {
    setTotal(total)
  }
  
}


 

  return (
    <Container>
      <HeaderHome titleOfButton="Pedidos (0)"/>
      <Content>
        <div >
        <ButtonBack imgWidth="32px" imgHeight="32px" fontSizeText="24px" onClick={handleClick}/>
        <img src={PratoImg} />
        </div>
        <div id="details">
        <h1>Salada Ravanello</h1>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
        </p>
        <Tags>
          <TagIngredient title="alface" />
          <TagIngredient title="cebola" />
          <TagIngredient title="pão naam" />
          <TagIngredient title="pepino" />
          <TagIngredient title="rabanete" />
          <TagIngredient title="tomate" />
        </Tags>
        <Order>
          <div>
            <button onClick={handleMinusOne}>
              <LuMinus />
            </button>
            <span>{total}</span>
            <button onClick={handlePlusOne}>
              <FiPlus />
            </button>
          </div>
          <Button heightOfButton="37.86px" title="pedir ∙ R$ 25,00" />
        </Order>
        </div>
      </Content>
      <Footer/>
    </Container>
  );
}
*/