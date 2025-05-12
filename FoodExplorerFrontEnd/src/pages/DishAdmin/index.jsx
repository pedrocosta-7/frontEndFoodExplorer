import { Container, Content, Tags } from "./styles";
import { HeaderHome } from "../../components/headerHome";
import { ButtonBack } from "../../components/buttonBack";
import { TagIngredient } from "../../components/tagIngredient";
import PratoImg from "../../assets/PratoImg.png";
import { Button } from "../../components/button";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";

export function DishAdmin() {
  const navigate = useNavigate();

  function handleClickToHome(){
    navigate("/")
  }

  function handleClickToEditDish(){
    navigate("/editdish")
  }

  return (
    <Container>
      <HeaderHome titleOfButton="Novo Prato" isAdmin="true" />
      <Content>
        <div>
          <ButtonBack imgWidth="32px" imgHeight="32px" fontSizeText="24px" onClick={handleClickToHome}/>
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
            
            <Button heightOfButton="48px" title="Editar prato" onClick={handleClickToEditDish}/>
            
          </Tags>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
