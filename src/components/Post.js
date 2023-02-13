import { useState } from "react";

export default function Post(props) {

  const [coracao, setCoracao] = useState("");

  function clicarCoracao() {
    if(coracao === "vermelho") {
      setCoracao(coracao);
    }
  }

  function like() {
    clicarCoracao();
  }

  function salvar() {

  }

  return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.post.imgUsuario} alt={props.post.usuario} />
          {props.post.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img onClick={like} src={props.post.foto} alt={props.post.nomeFoto} data-test="post-image" />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon className={coracao} onClick={clicarCoracao} name="heart-outline" data-test="like-post" ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={salvar} name="bookmark-outline" data-test="save-post"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.post.imgCurtida} alt={props.post.usuarioCurtida} />
          <div class="texto" data-test="likes-number">
            Curtido por <strong>{props.post.usuarioCurtida}</strong> e <strong>outras {props.post.numCurtida} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}