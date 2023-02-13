import { useState } from "react";

export default function Usuario() {

    const usuario = [
        {
            imagem: "./assets/img/catanacomics.svg",
            alt: "imagem de perfil",
            nome: "catanacomics" 
        }
    ];

    const [nomeUsuario, setNomeUsuario] = useState("catanacomics");
    const [imgPerfil, setImgPerfil] = useState("./assets/img/catanacomics.svg");

    function clicarLapis() {
        const novoNome = prompt("Qual é o seu nome?");
        setNomeUsuario(novoNome);
    }

    function trocaImgPerfil() {
        const novaImgPerfil = prompt("Insira o link da sua nova imagem de perfil");
        setImgPerfil(novaImgPerfil);
    }

    return (
        <div class="usuario">
            {usuario.map(u => <img onClick={trocaImgPerfil} src={imgPerfil} alt={nomeUsuario} data-test="profile-image" />)}
            <div class="texto" data-test="name">
              <span>
                <strong>{usuario.map(u => nomeUsuario)}</strong>
                <ion-icon onClick={clicarLapis} name="pencil" data-test="edit-name" ></ion-icon>
              </span>
            </div>
        </div>
    );
}