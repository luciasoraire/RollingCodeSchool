import { useState } from "react";

const TituloPrincipal = (props) => {
const [change, setChange] = useState("");
const show = ()=>{
    setChange(" (from changed state)")
}

    return (
        
        <>
        <h1>¡Hello {props.codigoFriend}{change}!</h1>
        <button onClick={show}>Click me</button>
        </>
    );
};

export default TituloPrincipal;