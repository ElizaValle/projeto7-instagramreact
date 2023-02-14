import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function SideBar() {
    return (
        <div className="sidebar">
            <Usuario nome={"catanacomics"} imagem={"./assets/img/catanacomics.svg"} />
            <Sugestoes />
        </div>
    );
}