import menu from "../menu";
import SendMessage from "../components/Message";
import { useHistory } from "react-router-dom";

export default function Info() {

    localStorage.setItem("menu", JSON.stringify(menu));

    const total = toFormat(menu.map((e) => (e.quantity > 0) ? (e.price * e.quantity) : 0).reduce((total, e) => total + e));

    return (
        <div className="fundo-confirme-pedido">
            <div>
                <h2>Confirme suas informações</h2>
                <div className="popup-confirme-pedido">
                    <Info total={total} />
                </div>
            </div>
            <ReviseButtons total={total} />
        </div>
    );
}

const Info = ({ total }) => (
    <div className="pedido-itens">
        {menu.map((e, key) => (e.quantity > 0) ? <Item key={key} name={e.name} quantity={e.quantity} price={e.price} /> : "")}
        <div className="linha-total flex-space-between">
            <div>TOTAL</div>
            <div className="total-itens">{total}</div>
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

const ReviseButtons = ({ total }) => (
    <>
        <button className="botao-popup botao-tudocerto" onClick={
            () => SendMessage(menu.filter((e) => e.quantity > 0), total)
        }>Tudo certo, pode pedir!</button>
        <button className="botao-popup botao-cancelar" onClick={useHistory().goBack}>Cancelar</button>
    </>
);