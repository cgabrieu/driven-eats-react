export default function Header({ title, subtitle }) {
    return (
        <header>
            <div className="conteudo-topo">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </div>
        </header>
    );
};