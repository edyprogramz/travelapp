function TripData(props) {
    return (  
        <div className="trip-card">
            <div className="img-div">
                <img alt="#" src={props.img}/>
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default TripData;