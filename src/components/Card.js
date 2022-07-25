import photo from "../images/katie-zeferes.png"
import star from "../images/star.png"

export default function Card(){
    return(
        <div className="card">
            <img className="product-image" src={photo} />
            <p className=""><span><img className="star" src={star} /></span>5.0 <span className="rating">(6).USA </span></p>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    );
}