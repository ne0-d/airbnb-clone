import photo from "../images/katie-zeferes.png"
import star from "../images/star.png"

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img className="product-image" src={require("../images/"+props.img)} />
            <p className=""><span><img className="star" src={star} /></span>{props.rating} <span className="rating">({props.reviewCount}).{props.country} </span></p>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    );
}