import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

export function ButtonAddIngredient({isNew, value, onClick, ...rest }){
    return(
       <Container $isnew={isNew}>
         <input
         value={value}
         readOnly={!isNew}
         type="text"
         {...rest}
         ></input>
         <button
         type="button"
         onClick={onClick}> 
         {isNew ? <FiPlus/> : <IoIosClose/>}
         </button>
       </Container>
    )
}