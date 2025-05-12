import { Container } from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";

export function ButtonBack({imgWidth, imgHeight, fontSizeText, ...rest}){
return(
   <Container {...rest}>
   <MdKeyboardArrowLeft style={{width:imgWidth, height:imgHeight}}/>
   <p style={{fontSize:fontSizeText}}>voltar</p>
   </Container>
)
}