import Post from "./Post"

export default function Posts() {

/*     const post = [
        {
            id: 
            userName: "",
            userImage: "",
            contentImage: "",
            likedByImage: "",
            likedByText: "respondeai",
            initialLikesAmount: 101.523
        }
    ] */

    const post = [
        {
            id: 1,
            imgUsuario: "./assets/img/meowed.svg",
            usuario: "meowed",
            foto: "./assets/img/gato-telefone.svg",
            nomeFoto: "gato-telefone",
            imgCurtida: "./assets/img/respondeai.svg",
            usuarioCurtida: "respondeai",
            numInicialCurtidas: 101.523,
        },

        {   
            id: 2,
            imgUsuario: "./assets/img/barked.svg",
            usuario: "barked",
            foto: "./assets/img/dog.svg",
            nomeFoto: "adorable_animals",
            imgCurtida: "./assets/img/adorable_animals.svg",
            usuarioCurtida: "adorable_animals",
            numInicialCurtidas: 99.159,
        },
        
        {
            id: 3,
            imgUsuario: "./assets/img/barked.svg",
            usuario: "barked",
            foto: "./assets/img/dog.svg",
            nomeFoto: "adorable_animals",
            imgCurtida: "./assets/img/adorable_animals.svg",
            usuarioCurtida: "adorable_animals",
            numInicialCurtidas: 99.159,
        }
    ];

    return (
        <div className="posts">
            {post.map((p) => <Post key={p.id} post={p} />)}
        </div>
    );
}