const menu = [
    {
        type: "prato",
        name: "Tudo Burger",
        description: "Carne artesanal, queijo, bacon, presunto e salada",
        price: 17.90,
        image: "xtudo.jpg"
    },
    {
        type: "prato",
        name: "Prato Básico",
        description: "Arroz, estrogonofe de carne e batata palha",
        price: 14.90,
        image: "prato-basico.jpg"
    },
    {
        type: "prato",
        name: "Macarrão ao Molho",
        description: "Macarrão com molho de requeijão e maionese",
        price: 13.90,
        image: "macarrao.jpg"
    },
    {
        type: "prato",
        name: "Coxa de Frango",
        description: "5 coxas de frango com ervas",
        price: 16.90,
        image: "coxa-de-frango.jpg"
    },
    {
        type: "bebida",
        name: "Coca Cola Lata",
        description: "Lata Coca Cola 350 ml gelada",
        price: 4.90,
        image: "coca.png"
    },
    {
        type: "bebida",
        name: "Fanta Laranja Lata",
        description: "Lata Fanta Laranja 350 ml gelada",
        price: 3.90,
        image: "fanta-laranja.png"
    },
    {
        type: "bebida",
        name: "Guaraná Lata",
        description: "Lata Guaraná 350 ml gelada",
        price: 5.90,
        image: "guarana.png"
    },
    {
        type: "sobremesa",
        name: "Casquinha Baunilha",
        description: "1 casquinha de baunilha",
        price: 2.90,
        image: "casquinha.png"
    },
    {
        type: "sobremesa",
        name: "Sundae Chocolate",
        description: "1 sundae de chocolate 250ml",
        price: 2.90,
        image: "sundae.png"
    },
    {
        type: "sobremesa",
        name: "Milkshake Morango",
        description: "1 milkshake de morango 500ml",
        price: 11.90,
        image: "milkshake.png"
    },
]

export default function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

const Header = () => (
    <header>
        <div className="conteudo-topo">
            <h1>DrivenEats</h1>
            <h3>Sua comida em 6 minutos</h3>
        </div>
    </header>
);

const Footer = () => (
    <footer className="flex-center">
        <button className="botao-concluir flex-center">Selecione os 3 itens para fechar o pedido</button>
    </footer>
);

const Main = () => (
    <main>
        <ChooseSection section="prato" title="Primeiro, seu prato" />
        <ChooseSection section="bebida" title="Agora, sua bebida" />
        <ChooseSection section="sobremesa" title="Por fim, sua sobremesa" />
    </main>
);

const ChooseSection = (props) => (
    <div className={"secao "+props.section}>
        <h2>{props.title}</h2>
        <ul className='container-cards'>
            {menu.map((e,key) => (e.type === props.section) ? <Card key={key} object={e} type={props.section} /> : "")}
        </ul>
    </div>
);

const Card = (props) => {
    const { name, description, price, image } = props.object;
    const format = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };
    return (
        <li className="card" onClick={() => selectCard(props.type)}>
            <div className="conteudo-card">
                <img src={"images/"+image} alt={name} />
                <h4>{name}</h4>
                <h5>{description}</h5>    
                <div className="container">
                    <h6>{price.toLocaleString('PT-br', format)}</h6>
                    <div className="ocultar">
                        <strong className="vermelho">-</strong>
                        <span className="quantidade">0</span>
                        <strong className="verde">+</strong>
                    </div>
                </div>
            </div>
        </li>
    );
};

const selectCard = (type) => {

    console.log(type);

}