import Post from "./Post"

export default function Posts() {

    const post = [
        {
            imgUsuario: "./assets/img/meowed.svg",
            usuario: "meowed",
            foto: "./assets/img/gato-telefone.svg",
            nomeFoto: "gato-telefone",
            imgCurtida: "./assets/img/respondeai.svg",
            usuarioCurtida: "respondeai",
            numCurtidas: "101.523"
        },

        {
            imgUsuario: "./assets/img/barked.svg",
            usuario: "barked",
            foto: "./assets/img/dog.svg",
            nomeFoto: "adorable_animals",
            imgCurtida: "./assets/img/adorable_animals.svg",
            usuarioCurtida: "adorable_animals",
            numCurtidas: "99.159"
        },
        
        {
            imgUsuario: "./assets/img/barked.svg",
            usuario: "barked",
            foto: "./assets/img/dog.svg",
            nomeFoto: "adorable_animals",
            imgCurtida: "./assets/img/adorable_animals.svg",
            usuarioCurtida: "adorable_animals",
            numCurtidas: "99.159"
        }
    ];

    return (
        <div class="posts">
            {post.map((p) => <Post post={p} />)}
        </div>
    );
}