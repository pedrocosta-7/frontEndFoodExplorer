import { Container, Form} from "./styles";
import { HeaderMenu } from "../../components/headerMenu";
import { Input } from "../../components/input";
import { GoSearch } from "react-icons/go";
import { Section } from "../../components/Section";
import { Footer } from "../../components/footer";


export function MenuAdmin(){
return(
<Container>
<HeaderMenu/>
<Form>
<Input 
icon={GoSearch}
placeholder="Busque por pratos ou ingredientes"/>
<Section title="Novo Prato"/>
<Section title="Sair"/>
</Form>
<Footer/>
</Container>
)
}