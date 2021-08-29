import menu from "../menu";
import Card from "./Card"

export default function Section({ section, title, setComplete }) {
    return (
        <div className={"secao " + section}>
            <h2>{title}</h2>
            <ul className='container-cards'>
                {menu.map((e, key) => (e.type === section) ? <Card key={key} index={key} object={e} setComplete={setComplete} /> : "")}
            </ul>
        </div>
    );
};