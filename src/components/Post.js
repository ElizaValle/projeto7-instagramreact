import { useState } from "react";

export default function Post(props) {

  /* recebe false por que nada foi salvo inicialmente */
  const [salvar, setSalvar] = useState(false);
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(props.post.numInicialCurtidas);
  const [animation, setAnimation] = useState(false);

  function curtir() {
    if(curtido) {
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setNumeroCurtidas(numeroCurtidas + 1)
    }
    setCurtido(!curtido)
  }

  function curtirPelaImagem() {
    if(!curtido) {
      setNumeroCurtidas(numeroCurtidas + 1)
      setCurtido(true);
    }

    const animationTiming = 500;
    setAnimation(true);

    setTimeout(() => {
      setAnimation(false);
    }, animationTiming)
  }
    
  return (
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.post.imgUsuario} alt={props.post.usuario} />
          {props.post.usuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <ion-icon name="heart" class={`animated-heart ${animation ? "scale-up" : "invisible"}`} />
        <img onDoubleClick={curtirPelaImagem} src={props.post.foto} alt="conteúdo do post" data-test="post-image" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon 
              class={curtido ? "vermelho" : ""}
              name={curtido ? "heart" : "heart-outline"} 
              data-test="like-post" 
              onClick={curtir}
            />
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={() => setSalvar(!salvar)} name={salvar ? "bookmark" : "bookmark-outline"}  data-test="save-post"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.post.imgCurtida} alt={props.post.usuarioCurtida} />
          <div className="texto">
            Curtido por <strong>{props.post.usuarioCurtida}</strong> e <strong>outras <span data-test="likes-number">{numeroCurtidas}</span> pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}