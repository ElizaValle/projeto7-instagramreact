export default function Usuario() {

    const usuario = [
        {
            imagem: "./assets/img/catanacomics.svg",
            alt: "imagem de perfil",
            nome: "catanacomics" 
        }];

    return (
        <div class="usuario">
            {usuario.map(u => <img src={u.imagem} alt={u.alt} />)}
            <div class="texto">
              <span>
                <strong>{usuario.map(u => u.nome)}</strong>
                <ion-icon name="pencil"></ion-icon>
              </span>
            </div>
        </div>
    );
}