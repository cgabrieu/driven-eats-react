import Section from "../components/Section"

export default function Main ({setComplete}) {
    return (
        <main>
            <Section section="prato" title="Primeiro, seu prato" setComplete={setComplete} />
            <Section section="bebida" title="Agora, sua bebida" setComplete={setComplete} />
            <Section section="sobremesa" title="Por fim, sua sobremesa" setComplete={setComplete} />
        </main>
    );
}