import { Container } from "./styles";

export function Input({icon:Icon, label, placeholder,type, ...rest}){
    return(
    <Container>
       <label>{label}</label>
       <input {...rest}
       type={type}
       placeholder={placeholder}/>
    </Container>
  )
}