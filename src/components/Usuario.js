import { useState } from "react";

export default function Usuario(props) {

    /* const usuario = [
        {
            imagem: "./assets/img/catanacomics.svg",
            alt: "imagem de perfil",
            nome: "catanacomics" 
        }
    ]; */

    const [nomeUsuario, setNomeUsuario] = useState(props.nome);
    const [imagemPerfil, setImagemPerfil] = useState(props.imagem);

    function trocarNome() {
        const novoNome = prompt("Qual é o seu nome?");
        if(novoNome !== null && novoNome !== undefined && novoNome !== "") {
            setNomeUsuario(novoNome);
        }
    }

    function trocarImagem() {
        const novoImagem = prompt("Insira o link da sua nova imagem de perfil");
        if(novoImagem !== null && novoImagem !== undefined && novoImagem !== "") {
            setImagemPerfil(novoImagem);
        }
    }

    /* function clicarLapis() {
        const novoNome = prompt("Qual é o seu nome?");
        setNomeUsuario(novoNome);
    } */

    /* function trocaImgPerfil() {
        const novaImgPerfil = prompt("Insira o link da sua nova imagem de perfil");
        setImgPerfil(novaImgPerfil);
    } */

    /* return (
        <div className="usuario">
            {usuario.map(u => <img onClick={trocaImgPerfil} src={imgPerfil} alt={nomeUsuario} data-test="profile-image" />)}
            <div className="texto" data-test="name">
              <span>
                <strong>{usuario.map(u => nomeUsuario)}</strong>
                <ion-icon onClick={clicarLapis} name="pencil" data-test="edit-name" ></ion-icon>
              </span>
            </div>
        </div>
    ); */

    return (
        <div className="usuario">
            <img onClick={trocarImagem} src={imagemPerfil} alt="imagem de perfil" data-test="profile-image" />
            <div className="texto">
              <span>
                <strong data-test="name">{nomeUsuario}</strong>
                <ion-icon onClick={trocarNome} name="pencil" data-test="edit-name" ></ion-icon>
              </span>
            </div>
        </div>
    );
}