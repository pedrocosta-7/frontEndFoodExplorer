import { Container, Form, Ingredients } from "./styles";
import { HeaderHome } from "../../components/headerHome";
import { ButtonBack } from "../../components/buttonBack";
import { InputUpload } from "../../components/inputUpload";
import { Input } from "../../components/input";
import { Footer } from "../../components/footer";
import { ButtonAddIngredient } from "../../components/buttonAddIngredient";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

import ArrowDown from "../../assets/ArrowDown.png";

export function NewDish() {
  const navigate = useNavigate();

  const [catClick, setCatClick] = useState(false);
  const [categoria, setCategoria] = useState("Refeição");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [dishPhotoFile, setDishPhotoFile] = useState(null);
  const [dishPhotoPreview, setDishPhotoPreview] = useState(null);

  async function addDish() {
    if (!name) return alert("nome é obrigatório");
    if (ingredients.length === 0)
      return alert("você não adicionou os ingredientes");
    if (!price) return alert("preço é obrigatório");
    if (!description) return alert("descrição é obrigatória");
    if (!dishPhotoFile) return alert("imagem é obrigatória");

    // 1. Cria o prato
    const response = await api.post("/dishs", {
      name,
      ingredients,
      price,
      description,
      categoria
    });

    // 2. Recebe o id do prato criado
    const dishId = response.data.id;

    // 3. Agora vamos subir a imagem
    const formData = new FormData();
    formData.append("photo", dishPhotoFile);

    await api.patch(`/dishs/photo/${dishId}`, formData);

    alert("Prato cadastrado com sucesso!");
    navigate("/");
  }

  function handleCatClick() {
    setCatClick((prev) => !prev);
  }

  function handleClick() {
    navigate("/");
  }

  function handleCategoryClickToPratoPrincipal() {
    setCategoria("Prato principal");
    setCatClick(false);
  }

  function handleCategoryClickToBebida() {
    setCategoria("Bebida");
    setCatClick(false);
  }

  function handleAddIngredient() {
    if (newIngredient.trim() === "") return;
    setIngredients((prev) => [...prev, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(indexToRemove) {
    setIngredients((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  }

  function renderCategorySelect() {
    if (!catClick) {
      return (
        <button className="buttonType" onClick={handleCatClick}>
          <p>{categoria}</p>
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
          <button className="buttonType" onClick={handleCategoryClickToBebida}>
            <p>Bebida</p>
          </button>
        </div>
      );
    }
  }

  return (
    <Container>
      <HeaderHome titleOfButton="Novo Prato" isAdmin="true" />
      <Form>
        <ButtonBack
          imgHeight="22px"
          imgWidth="22px"
          fontSizeText="16.5px"
          onClick={handleClick}
        />
        <h1>Novo Prato</h1>
        <div id="descriptionLineOne">
          <InputUpload
            title="Selecione Imagem"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              setDishPhotoFile(file);
              setDishPhotoPreview(URL.createObjectURL(file));
              console.log(file);
            }}
          />

          {dishPhotoPreview && (
            <div className="previewWrapper">
              <img
                src={dishPhotoPreview}
                alt="Prévia do prato"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          )}

          <Input
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
            onChange={(e) => setName(e.target.value)}
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
                  key={index}
                  value={ingredient}
                  isNew={false}
                  onClick={() => handleRemoveIngredient(index)}
                />
              ))}
              <ButtonAddIngredient
                isNew={true}
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
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <p>Descrição</p>
        <textarea
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button id="buttonSave" type="button" onClick={addDish}>
          Salvar alterações
        </button>
      </Form>
      <Footer />
    </Container>
  );
}
