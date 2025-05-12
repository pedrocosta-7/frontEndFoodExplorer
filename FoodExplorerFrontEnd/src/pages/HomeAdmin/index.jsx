import { Container, Section, Content, ScrollContainer } from "./styles";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import maracuja from "../../assets/maracuja.png";
import Cakes from "../../assets/Cakes.png";
import PratoImg from "../../assets/PratoImg.png";
import DishTwo from "../../assets/DishTwo.png";
import cakesDesktop from "../../assets/cakesDesktop.png";

import scrollRight from "../../assets/scrollRight.png";
import scrollLeft from "../../assets/scrollLeft.png";

import { HeaderHome } from "../../components/headerHome";
import { Description } from "../../components/description";
import { Card } from "../../components/card";
import { Footer } from "../../components/footer";

import { api } from "../../services/api";

export function HomeAdmin() {
  const [dishes, setDishes] = useState({
    meals: [],
    mainDishes: [],
    drinks: [],
  });
  const [loading, setLoading] = useState(true);

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get("/dishs");

        // Agrupar pratos por categoria
        const allDishes = response.data;

        const meals = allDishes.filter(dish => dish.categoria === "Refeição");
        const mainDishes = allDishes.filter(dish => dish.categoria === "Prato principal");
        const drinks = allDishes.filter(dish => dish.categoria === "Bebida");

        setDishes({ meals, mainDishes, drinks });
      } catch (error) {
        console.error("Erro ao buscar pratos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDishes();
  }, []);

  function handleScroll(direction, ref) {
    if (ref.current) {
      const scrollAmount = 900;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  }

  function handleClick() {
    navigate("/newdish");
  }

  if (loading) {
    return <p>Carregando pratos...</p>;
  }

  return (
    <Container>
      <HeaderHome titleOfButton="Novo prato" isAdmin="true" OnClick={handleClick} />
      <Section>
        <img id="imgMobile" src={Cakes} alt="Cakes" />
        <img id="imgDesktop" src={cakesDesktop} alt="Cakes Desktop" />
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>
            Sinta o cuidado do preparo com
            <br />
            ingredientes selecionados.
          </p>
        </div>
      </Section>

      <Content>
        {/* Refeições */}
        <Description title="Refeições" />
        <ScrollContainer ref={scrollRef1}>
          <button onClick={() => handleScroll("left", scrollRef1)} className="scrollLeft">
            <img src={scrollLeft} alt="Scroll left" />
          </button>
          {dishes.meals.map((dish) => (
            <Card
              key={dish.id}
              isAdmin="true"
              image={`${api.defaults.baseURL}/files/${dish.photo}` || PratoImg}
              title={`${dish.name} >`}
              price={`R$ ${Number(dish.price.replace(",", ".")).toFixed(2).replace(".", ",")}`}
              descriptionToDesktop={dish.description}
              dishId={dish.id} // Passando o dishId
            />
          ))}
          <button onClick={() => handleScroll("right", scrollRef1)} className="scrollRight">
            <img src={scrollRight} alt="Scroll right" />
          </button>
        </ScrollContainer>

        {/* Pratos principais */}
        <Description title="Pratos principais" />
        <ScrollContainer ref={scrollRef2}>
          <button onClick={() => handleScroll("left", scrollRef2)} className="scrollLeft">
            <img src={scrollLeft} alt="Scroll left" />
          </button>
          {dishes.mainDishes.map((dish) => (
            <Card
              key={dish.id}
              isAdmin="true"
              image={`${api.defaults.baseURL}/files/${dish.photo}` || DishTwo}
              title={`${dish.name} >`}
              price={`R$ ${Number(dish.price.replace(",", ".")).toFixed(2).replace(".", ",")}`}
              descriptionToDesktop={dish.description}
              dishId={dish.id} // Passando o dishId
            />
          ))}
          <button onClick={() => handleScroll("right", scrollRef2)} className="scrollRight">
            <img src={scrollRight} alt="Scroll right" />
          </button>
        </ScrollContainer>

        {/* Bebidas */}
        <Description title="Bebidas" />
        <ScrollContainer ref={scrollRef3}>
          <button onClick={() => handleScroll("left", scrollRef3)} className="scrollLeft">
            <img src={scrollLeft} alt="Scroll left" />
          </button>
          {dishes.drinks.map((dish) => (
            <Card
              key={dish.id}
              isAdmin="true"
              image={`${api.defaults.baseURL}/files/${dish.photo}` || maracuja}
              title={`${dish.name} >`}
              price={`R$ ${Number(dish.price.replace(",", ".")).toFixed(2).replace(".", ",")}`}
              descriptionToDesktop={dish.description}
              dishId={dish.id} // Passando o dishId
            />
          ))}
          <button onClick={() => handleScroll("right", scrollRef3)} className="scrollRight">
            <img src={scrollRight} alt="Scroll right" />
          </button>
        </ScrollContainer>
      </Content>

      <Footer />
    </Container>
  );
}






/*
import { Container, Section, Content, ScrollContainer } from "./styles";

import { useRef } from "react";
import { useState } from "react";

import maracuja from "../../assets/maracuja.png";
import Cakes from "../../assets/Cakes.png";
import PratoImg from "../../assets/PratoImg.png";
import DishTwo from "../../assets/DishTwo.png";
import cakesDesktop from "../../assets/cakesDesktop.png";

import scrollRight from "../../assets/scrollRight.png";
import scrollLeft from "../../assets/scrollLeft.png";

import { HeaderHome } from "../../components/headerHome";
import { Description } from "../../components/description";
import { Card } from "../../components/card";
import { Footer } from "../../components/footer";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function HomeAdmin() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  const [dish, setDish] = useState([]);

  async function dataOfDish(){
    const data = await api.get("/dishs/84")

    setDish(data)
  }

  console.log(dish)
  



  


  function handleScroll(direction, ref){
    if(ref.current){
      const scrollAmount = 900;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior:"smooth",
      })
    }

  }
  
  const navigate = useNavigate();

  function handleClick(){
    navigate("/newdish")
  }

  return (
    <Container>
      <HeaderHome titleOfButton="Novo prato" isAdmin="true" OnClick={handleClick}/>
      <Section>
        <img id="imgMobile" src={Cakes} />
        <img id="imgDesktop" src={cakesDesktop} />
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>
            Sinta o cuidado do preparo com
            <br />
            ingredientes selecionados.
          </p>
        </div>
      </Section>
      <Content>
        <Description title="Refeições" />
        <ScrollContainer ref={scrollRef1}>
          <button onClick={()=>{handleScroll("left", scrollRef1)}} className="scrollLeft">
            <img src={scrollLeft} />
          </button>
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <Card
            isAdmin="true"
            image={PratoImg}
            title="Salada Ravanello >"
            price="R$ 49,97"
          />
          <button onClick={()=>{handleScroll("right", scrollRef1)}} className="scrollRight">
            <img src={scrollRight} />
          </button>
        </ScrollContainer>
        <Description title="Pratos principais" />
        <ScrollContainer ref={scrollRef2}>
          <button onClick={()=>{handleScroll("left", scrollRef2)}} className="scrollLeft">
            <img src={scrollLeft} />
          </button>
          <Card
            isAdmin="true"
            image={DishTwo}
            title="Prugna Pie>"
            price="R$ 79,97"
          />
          <Card
            isAdmin="true"
            image={DishTwo}
            title="Prugna Pie>"
            price="R$ 79,97"
          />
          <Card
            isAdmin="true"
            image={DishTwo}
            title="Prugna Pie>"
            price="R$ 79,97"
          />
          <Card
            isAdmin="true"
            image={DishTwo}
            title="Prugna Pie>"
            price="R$ 79,97"
          />
          <Card
            isAdmin="true"
            image={DishTwo}
            title="Prugna Pie>"
            price="R$ 79,97"
          />
          <Card
            isAdmin="true"
            image={DishTwo}
            title="Prugna Pie>"
            price="R$ 79,97"
          />
          <Card
            isAdmin="true"
            image={DishTwo}
            title="Prugna Pie>"
            price="R$ 79,97"
          />
          <Card
            isAdmin="true"
            image={DishTwo}
            title="Prugna Pie>"
            price="R$ 79,97"
          />
          <Card
            isAdmin="true"
            image={DishTwo}
            title="Prugna Pie>"
            price="R$ 79,97"
          />
          <Card
            isAdmin="true"
            image={DishTwo}
            title="Prugna Pie>"
            price="R$ 79,97"
          />
          <Card
            isAdmin="true"
            image={DishTwo}
            title="Prugna Pie>"
            price="R$ 79,97"
          />
          <button onClick={()=>{handleScroll("right", scrollRef2)}} className="scrollRight">
            <img src={scrollRight} />
          </button>
        </ScrollContainer>
        <Description title="Bebidas" />
        <ScrollContainer ref={scrollRef3}>
          <button onClick={()=>{handleScroll("left", scrollRef3)}} className="scrollLeft">
            <img src={scrollLeft} />
          </button>
          <Card
            isAdmin="true"
            image={maracuja}
            title="Espresso >"
            price="R$ 15,97"
          />
          <Card
            isAdmin="true"
            image={maracuja}
            title="Espresso >"
            price="R$ 15,97"
          />
          <Card
            isAdmin="true"
            image={maracuja}
            title="Espresso >"
            price="R$ 15,97"
          />
          <Card
            isAdmin="true"
            image={maracuja}
            title="Espresso >"
            price="R$ 15,97"
          />
          <Card
            isAdmin="true"
            image={maracuja}
            title="Espresso >"
            price="R$ 15,97"
          />
          <Card
            isAdmin="true"
            image={maracuja}
            title="Espresso >"
            price="R$ 15,97"
          />
          <Card
            isAdmin="true"
            image={maracuja}
            title="Espresso >"
            price="R$ 15,97"
          />
          <Card
            isAdmin="true"
            image={maracuja}
            title="Espresso >"
            price="R$ 15,97"
          />
          <Card
            isAdmin="true"
            image={maracuja}
            title="Espresso >"
            price="R$ 15,97"
          />
          <Card
            isAdmin="true"
            image={maracuja}
            title="Espresso >"
            price="R$ 15,97"
          />
          <Card
            isAdmin="true"
            image={maracuja}
            title="Espresso >"
            price="R$ 15,97"
          />
          <button onClick={()=>{handleScroll("right", scrollRef3)}} className="scrollRight">
            <img src={scrollRight} />
          </button>
        </ScrollContainer>
      </Content>
      <Footer />
    </Container>
  );
}
  */
  

  
