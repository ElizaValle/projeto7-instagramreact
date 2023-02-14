export default function Story(props) {
    return (
        <div className="story">
            <div className="image">
                <img src={props.imagem} alt={props.usuario}/>
            </div>
            <div className="usuario">
                {props.usuario}
            </div>
        </div>
    );
}