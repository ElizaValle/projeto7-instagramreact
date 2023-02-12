import Sugestao from "./Sugestao"

export default function Sugestoes() {

    const sugestao = [
        {
            imagem: "./assets/img/catanacomics.svg",
            nome: "bad.vibes.memes"
        }, 

        {
            imagem: "./assets/img/chibirdart.svg",
            nome: "chibirdart"
        }, 

        {
            imagem: "./assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar"
        }, 

        {
            imagem: "./assets/img/adorable_animals.svg",
            nome: "adorable_animals"
        }, 

        {
            imagem: "./assets/img/smallcutecats.svg",
            nome: "smallcutecats"
        }
    ];

    return (
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {sugestao.map((s) => <Sugestao imagem={s.imagem} nome={s.nome} />)}

            <div class="links">
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
              Hashtags • Idioma
            </div>

            <div class="copyright">
              © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}