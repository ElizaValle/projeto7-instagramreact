import Story from "./Story"

export default function Stories() {

    const story = [ 
        {
            imagem: "./assets/img/9gag.svg",
            usuario: "meowed"
        },

        {
            imagem: "./assets/img/barked.svg",
            usuario: "barked"
        },

        {
            imagem: "./assets/img/nathanwpylestrangeplanet.svg",
            usuario: "nathanwpylestrangeplanet"
        },

        {
            imagem: "./assets/img/wawawicomics.svg",
            usuario: "wawawicomics"
        },

        {
            imagem: "./assets/img/respondeai.svg",
            usuario: "respondeai"
        }, 

        {
            imagem: "./assets/img/filomoderna.svg",
            usuario: "filomoderna"
        }, 

        {
            imagem: "./assets/img/memeriagourmet.svg",
            usuario: "memeriagourmet"
        }
        
    ];

    return (
        <div class="stories">
            {story.map(s => (<Story imagem={s.imagem} usuario={s.usuario} />))}
   {/*          <Story imagem="./assets/img/9gag.svg" texto="9gag" />
            <Story imagem="./assets/img/barked.svg" texto="barked" />
            <Story imagem="./assets/img/nathanwpylestrangeplanet.svg" texto="nathanwpylestrangeplanet" />
            <Story imagem="./assets/img/wawawicomics.svg" texto="wawawicomics" />
            <Story imagem="./assets/img/respondeai.svg" texto="respondeai" />
            <Story imagem="./assets/img/filomoderna.svg" texto="filomoderna" />
            <Story imagem="./assets/img/memeriagourmet.svg" texto="memeriagourmet" /> */}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}