import Sugestao from "./Sugestao"

export default function Sugestoes() { 

    const sugestao = [
        {
            imagem: "./assets/img/catanacomics.svg",
            nome: "bad.vibes.memes",
            reason: "Segue você",
        }, 

        {
            imagem: "./assets/img/chibirdart.svg",
            nome: "chibirdart",
            reason: "Segue você",
        }, 

        {
            imagem: "./assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            reason: "Novo no Instagram",
        }, 

        {
            imagem: "./assets/img/adorable_animals.svg",
            nome: "adorable_animals",
            reason: "Segue você",
        }, 

        {
            imagem: "./assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            reason: "Segue você",
        }
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {/* key serve pro React passar a lista mais otimizado, não pode se repetir
            cada s é um objeto do array */}
            {sugestao.map((s) => <Sugestao key={s.nome} imagem={s.imagem} nome={s.nome} reason={s.reason} />)}

            <div className="links">
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
              Hashtags • Idioma
            </div>

            <div className="copyright">
              © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}