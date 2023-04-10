import './Hero.css';

function HeroData(props) {
    return (  
        <div className={props.type}>
            <img alt="img" src={props.imgUrl}/>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <a href="#">{props.text}</a>
            </div>
        </div>
    );
}

export default HeroData;