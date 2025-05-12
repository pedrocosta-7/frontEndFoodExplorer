import { Container } from "./styles";
import ImgUpload from "../../assets/ImgUpload.png";

export function InputUpload({ title, onChange }) {
  return (
    <Container >
      <label>Imagem do prato</label>

      <input 
        type="file" 
        id="fileUpload" 
        onChange={onChange}
        style={{ display: "none" }} 
      
      />

      <label htmlFor="fileUpload" className="customFileLabel">
        <img src={ImgUpload} alt="ícone de upload" />
        {title}
      </label>
    </Container>
  );
}