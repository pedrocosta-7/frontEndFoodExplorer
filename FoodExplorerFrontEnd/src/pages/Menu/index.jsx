import { Container, Form} from "./styles";
import { HeaderMenu } from "../../components/headerMenu";
import { Input } from "../../components/input";
import { GoSearch } from "react-icons/go";
import { Section } from "../../components/Section";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";


export function Menu(){



return(
<Container>
<HeaderMenu/>
<Form>
<Input 
icon={GoSearch}
placeholder="Busque por pratos ou ingredientes"/>
<Section title="Sair"/>
</Form>
<Footer/>
</Container>
)
}