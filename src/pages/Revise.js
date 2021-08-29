export default function Revise() {

    return (
        <div className="fundo-confirme-pedido">
            <div className="popup-confirme-pedido">
                <p>Confirme seu pedido</p>
                <div className="pedido-itens">
                    <div className="linha-item flex-space-between">
                        <div className="nome-prato">base</div>
                        <div className="valor-prato">base</div>
                    </div>
                    <div className="linha-item flex-space-between">
                        <div className="nome-bebida">base</div>
                        <div className="valor-bebida">base</div>
                    </div>
                    <div className="linha-item flex-space-between">
                        <div className="nome-sobremesa">base</div>
                        <div className="valor-sobremesa">base</div>
                    </div>
                    <div className="linha-total flex-space-between">
                        <div>TOTAL</div>
                        <div className="total-itens">R$ <strong>valor</strong></div>
                    </div>
                </div>
                <button className="botao-popup botao-tudocerto">Tudo certo, pode pedir!</button>
                <button className="botao-popup botao-cancelar">Cancelar</button>
            </div>
        </div>
    );

}