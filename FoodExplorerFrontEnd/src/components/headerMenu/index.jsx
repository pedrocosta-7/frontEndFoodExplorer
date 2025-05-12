import { Container } from "./styles";
import { IoCloseOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom";

export function HeaderMenu(){
    


    const navigate = useNavigate();
    function handleClick(){
        navigate("/")
    }

    return(
        <Container>
        <button onClick={handleClick}><IoCloseOutline /></button>
        <h1>Menu</h1>
        </Container>
    )
}