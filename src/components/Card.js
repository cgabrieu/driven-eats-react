import React from 'react';
import menu from "../menu";

export default function Card ({object, index, setComplete}) {
    const { name, description, price, image } = object;
    const format = {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'};

    const [quant, setQuant] = React.useState(menu[index].quantity);

    const increaseQuant = (e) => {
        e.stopPropagation();
        if (menu[index].quantity < 10) setQuant(++menu[index].quantity);
        checkSections();
    }
    
    const decreaseQuant = (e) => {
        e.stopPropagation();
        if (menu[index].quantity > 0) setQuant(--menu[index].quantity);
        checkSections();
    }

    const checkSections = () => {
        const isSelected = (section) => menu.filter(e => e.type === section).some(e => e.quantity > 0);
        if (isSelected("prato") && isSelected("bebida") && isSelected("sobremesa")) setComplete(true);
        else setComplete(false);
    }
    
    return (
        <li className={(quant > 0) ? "card selecionado" : "card"} onClick={increaseQuant}>
            <div className="conteudo-card">
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <h5>{description}</h5>    
                <div className="container">
                    <h6>{price.toLocaleString('PT-br', format)}</h6>
                    <div className= {(quant > 0) ? "quantity-container" : "quantity-container ocultar"}>
                        <strong className="vermelho" onClick={decreaseQuant}>-</strong>
                        <span className="quantidade">{quant}</span>
                        <strong className="verde" onClick={increaseQuant}>+</strong>
                    </div>
                </div>
            </div>
        </li>
    );
};