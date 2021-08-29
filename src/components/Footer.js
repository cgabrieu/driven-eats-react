import { useHistory } from "react-router-dom";

export default function Footer({ complete }){

    const history = useHistory();

    return (
        <footer className="flex-center">
            {complete ?
            <button className="botao-concluir flex-center fechar-pedido-botao" onClick={() => {
                history.push('/revisar');
            }}>Fechar o pedido</button> :
            <button className="botao-concluir flex-center">Selecione cada categoria para fechar o pedido</button>}
        </footer>
    );
};