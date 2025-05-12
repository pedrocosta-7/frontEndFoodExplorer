import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

// ... outros imports
import { Container, Form, Ingredients } from "./styles";
import { HeaderHome } from "../../components/headerHome";
import { ButtonBack } from "../../components/buttonBack";
import { InputUpload } from "../../components/inputUpload";
import { Input } from "../../components/input";
import { Footer } from "../../components/footer";
import { ButtonAddIngredient } from "../../components/buttonAddIngredient";

import ArrowDown from "../../assets/ArrowDown.png";

export function EditDish() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [dish, setDish] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [category, setCategory] = useState("Refeição");
  const [catClick, setCatClick] = useState(false);

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishs/${id}`);
        setDish(response.data);
        setIngredients(response.data.ingredients.map((item) => item.name));
        setCategory(response.data.categoria || "Refeição");
      } catch (error) {
        console.error("Erro ao buscar prato:", error);
        navigate("/404");
      }
    }

    fetchDish();
  }, [id, navigate]);

  function handleCatClick() {
    setCatClick((prev) => !prev);
  }

  function handleCategoryClickToPratoPrincipal() {
    setCategory("Prato principal");
    setCatClick(false);
  }

  function handleCategoryClickToBebida() {
    setCategory("Bebida");
    setCatClick(false);
  }

  function handleAddIngredient() {
    if (newIngredient.trim()) {
      setIngredients((prev) => [...prev, newIngredient]);
      setNewIngredient("");
    }
  }

  function handleRemoveIngredient(ingredientToRemove) {
    setIngredients((prev) =>
      prev.filter((ingredient) => ingredient !== ingredientToRemove)
    );
  }

  function renderCategorySelect() {
    if (!catClick) {
      return (
        <button className="buttonType" onClick={handleCatClick}>
          <p>{category}</p>
          <img src={ArrowDown} alt="Seta para baixo" />
        </button>
      );
    } else {
      return (
        <div>
          <button className="buttonType">
            <p>Refeição</p>
          </button>
          <button
            className="buttonType"
            onClick={handleCategoryClickToPratoPrincipal}
          >
            <p>Prato Principal</p>
          </button>
          <button
            className="buttonType"
            onClick={handleCategoryClickToBebida}
          >
            <p>Bebida</p>
          </button>
        </div>
      );
    }
  }

  async function handleDeleteDish() {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este prato?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/dishs/${id}`);
      alert("Prato excluído com sucesso.");
      navigate("/"); // Redireciona para a página homeAdmin após excluir o prato
    } catch (error) {
      console.error("Erro ao excluir prato:", error);
      alert("Erro ao excluir o prato.");
    }
  }

  async function handleSaveChanges() {
    try {
      await api.put(`/dishs/${id}`, {
        name: dish.name,
        ingredients,
        price: dish.price,
        description: dish.description,
        categoria: category
      });
      alert("Prato atualizado com sucesso!");
      navigate("/"); // Redireciona para a página homeAdmin após salvar as alterações
    } catch (error) {
      console.error("Erro ao salvar as alterações:", error);
      alert("Erro ao salvar as alterações.");
    }
  }

  if (!dish) {
    return <p>Carregando prato...</p>;
  }

  return (
    <Container>
      <HeaderHome isAdmin="true" titleOfButton="Editar prato" />
      <Form>
        <ButtonBack
          imgHeight="22px"
          imgWidth="22px"
          fontSizeText="16.5px"
          onClick={() => navigate("/")}
        />
        <h1>Editar prato</h1>
        <div id="descriptionLineOne">
          <InputUpload title="Selecione Imagem" />
          <Input
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
            value={dish.name}
            onChange={(e) => setDish({ ...dish, name: e.target.value })}
          />
          <div>
            <p>Categoria</p>
            {renderCategorySelect()}
          </div>
        </div>
        <div id="descriptionLineTwo">
          <div>
            <p>Ingredientes</p>
            <Ingredients>
              {ingredients.map((ingredient, index) => (
                <ButtonAddIngredient
                  key={String(index)}
                  value={ingredient}
                  isNew={false}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}
              <ButtonAddIngredient
                isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </Ingredients>
          </div>
          <Input
            label="Preço"
            placeholder="R$ 00,00"
            value={dish.price}
            onChange={(e) => setDish({ ...dish, price: e.target.value })}
          />
        </div>
        <p>Descrição</p>
        <textarea
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          value={dish.description}
          onChange={(e) => setDish({ ...dish, description: e.target.value })}
        />
        <div id="divButtons">
          <button id="buttonDelete" onClick={handleDeleteDish}>
            Excluir prato
          </button>
          <button id="buttonSave" onClick={handleSaveChanges}>
            Salvar alterações
          </button>
        </div>
      </Form>
      <Footer />
    </Container>
  );
}





/*
import { Container, Form, Ingredients } from "./styles";
import { HeaderHome } from "../../components/headerHome";
import { ButtonBack } from "../../components/buttonBack";
import { InputUpload } from "../../components/inputUpload";
import { Input } from "../../components/input";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { ButtonAddIngredient } from "../../components/buttonAddIngredient";
import { useState } from "react";

import ArrowDown from "../../assets/ArrowDown.png";

export function EditDish() {
  const navigate = useNavigate();

  const [catClick, setCatClick] = useState(false);
  const [category, setCategory] = useState("Refeição");
  const [ingredients, setIngredients] = useState(["Pão naam"]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleCatClick() {
    setCatClick((prev) => !prev);
  }

  function handleClick() {
    navigate("/");
  }

  function handleCategoryClickToPratoPrincipal() {
    setCategory("Prato principal");
    setCatClick(false);
  }

  function handleCategoryClickToBebida() {
    setCategory("Bebida");
    setCatClick(false);
  }

  function handleAddIngredient() {
    if (newIngredient.trim()) {
      setIngredients((prev) => [...prev, newIngredient]);
      setNewIngredient("");
    }
  }

  function handleRemoveIngredient(ingredientToRemove) {
    setIngredients((prev) =>
      prev.filter((ingredient) => ingredient !== ingredientToRemove)
    );
  }

  function renderCategorySelect() {
    if (!catClick) {
      return (
        <button className="buttonType" onClick={handleCatClick}>
          <p>{category}</p>
          <img src={ArrowDown} />
        </button>
      );
    } else {
      return (
        <div>
          <button className="buttonType">
            <p>Refeição</p>
          </button>
          <button
            className="buttonType"
            onClick={handleCategoryClickToPratoPrincipal}
          >
            <p>Prato Principal</p>
          </button>
          <button
            className="buttonType"
            onClick={handleCategoryClickToBebida}
          >
            <p>Bebida</p>
          </button>
        </div>
      );
    }
  }

  return (
    <Container>
      <HeaderHome isAdmin="true" titleOfButton="Editar prato" />
      <Form>
        <ButtonBack
          imgHeight="22px"
          imgWidth="22px"
          fontSizeText="16.5px"
          onClick={handleClick}
        />
        <h1>Editar prato</h1>
        <div id="descriptionLineOne">
          <InputUpload title="Selecione Imagem" />
          <Input label="Nome" placeholder="Ex.: Salada Ceasar" />
          <div>
            <p>Categoria</p>
            {renderCategorySelect()}
          </div>
        </div>
        <div id="descriptionLineTwo">
          <div>
            <p>Ingredientes</p>
            <Ingredients>
              {ingredients.map((ingredient, index) => (
                <ButtonAddIngredient
                  key={String(index)}
                  value={ingredient}
                  isNew={false}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}
              <ButtonAddIngredient
                isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </Ingredients>
          </div>
          <Input label="Preço" placeholder="R$ 00,00" />
        </div>
        <p>Descrição</p>
        <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
        <div id="divButtons">
          <button id="buttonDelete">Excluir prato</button>
          <button id="buttonSave">Salvar alterações</button>
        </div>
      </Form>
      <Footer />
    </Container>
  );
}
  */
  
