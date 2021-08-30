const numPhone = "5527999439806";
const msg = (dishes, drinks, desserts, total) => encodeURIComponent(
`Olá, gostaria de fazer o pedido:
    
- *Prato${(dishes.length > 1) ? "s" : ""}*:\n${dishes.map((e) => `       ${e.name} (x${e.quantity})\n`).join('')}
- *Bebida${(drinks.length > 1) ? "s" : ""}*:\n${drinks.map((e) => `       ${e.name} (x${e.quantity})\n`).join('')}
- *Sobremesa${(desserts.length > 1) ? "s" : ""}*:\n${desserts.map((e) => `       ${e.name} (x${e.quantity})\n`).join('')}
    *➤ Total: ${total}*
    
*Nome*: ${prompt("Infome seu nome:")}
*Endereço*: ${prompt("Infome seu endereço:")}`);


export default function SendMessage(object, total) {
    const dishes = object.filter((e) => e.type === "prato");
    const drinks = object.filter((e) => e.type === "bebida");
    const desserts = object.filter((e) => e.type === "sobremesa");

    window.open(`https://wa.me/${numPhone}?text=${msg(dishes, drinks, desserts, total)}`, "_self");
}