import { xtudo } from "./assets.js";

//import * as Image from "./assets.js"

let menu;

if (localStorage.getItem("menu") === null) {
    menu = [
        {
            type: "prato",
            name: "Tudo Burger",
            description: "Carne artesanal, queijo, bacon, presunto e salada",
            price: 17.90,
            image: xtudo,
            //image: Image.xtudo,
            quantity: 0
        },
        {
            type: "prato",
            name: "Prato Básico",
            description: "Arroz, estrogonofe de carne e batata palha",
            price: 14.90,
            image: "prato-basico.jpg",
            quantity: 0
        },
        {
            type: "prato",
            name: "Macarrão ao Molho",
            description: "Macarrão com molho de requeijão e maionese",
            price: 13.90,
            image: "macarrao.jpg",
            quantity: 0
        },
        {
            type: "prato",
            name: "Coxa de Frango",
            description: "5 coxas de frango com ervas",
            price: 16.90,
            image: "coxa-de-frango.jpg",
            quantity: 0
        },
        {
            type: "bebida",
            name: "Coca Cola Lata",
            description: "Lata Coca Cola 350 ml gelada",
            price: 4.90,
            image: "coca.png",
            quantity: 0
        },
        {
            type: "bebida",
            name: "Fanta Laranja Lata",
            description: "Lata Fanta Laranja 350 ml gelada",
            price: 3.90,
            image: "fanta-laranja.png",
            quantity: 0
        },
        {
            type: "bebida",
            name: "Guaraná Lata",
            description: "Lata Guaraná 350 ml gelada",
            price: 5.90,
            image: "guarana.png",
            quantity: 0
        },
        {
            type: "sobremesa",
            name: "Casquinha Baunilha",
            description: "1 casquinha de baunilha",
            price: 2.90,
            image: "casquinha.png",
            quantity: 0
        },
        {
            type: "sobremesa",
            name: "Sundae Chocolate",
            description: "1 sundae de chocolate 250ml",
            price: 3.90,
            image: "sundae.png",
            quantity: 0
        },
        {
            type: "sobremesa",
            name: "Milkshake Morango",
            description: "1 milkshake de morango 500ml",
            price: 11.90,
            image: "milkshake.png",
            quantity: 0
        },
    ]
    localStorage.setItem("menu", JSON.stringify(menu));
}

menu = JSON.parse(localStorage.getItem("menu"));

export default menu;