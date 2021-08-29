import menu from "../menu";
import { useHistory } from "react-router-dom";

export default function Revise() {
    return (
        <div className="fundo-confirme-pedido">
            <div>
                <h2>Revise seu pedido</h2>
                <div className="popup-confirme-pedido">
                    <OrderItems />
                </div>
            </div>
            <button className="botao-popup botao-tudocerto">Tudo certo, pode pedir!</button>
            <button className="botao-popup botao-cancelar" onClick={useHistory().goBack}>Cancelar</button>
        </div>
    );

}

const OrderItems = () => (
    <div className="pedido-itens">
        {menu.map((e, key) => (e.quantity > 0) ? <Item key={key} name={e.name} quantity={e.quantity} price={e.price} /> : "")}
        <div className="linha-total flex-space-between">
            <div>TOTAL</div>
            <div className="total-itens">
                {toFormat(menu.map((e) => (e.quantity > 0) ? (e.price * e.quantity) : 0).reduce((total, e) => total + e))}
            </div>
        </div>
    </div>
);

const Item = ({ name, quantity, price }) => (
    <div className="linha-item flex-space-between">
        <div>
            <div className="nome">{name}</div>
            <div className="quantidade">&ensp;x{quantity}</div>
        </div>
        <div className="valor">{toFormat(price * quantity)}</div>
    </div>
);


const toFormat = (value) => {
    const format = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };
    return (value.toLocaleString('PT-br', format));
}