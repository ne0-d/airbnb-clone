// import photo from "../images/katie-zeferes.png"
// import star from "/images/star.png"

export default function Card(props){
    let badgeText
    if(props.item.openSpots === 0)
        badgeText = "SOLD OUT"
    else if(props.item.location=="Online")
        badgeText="ONLINE"
    return(
        <div className="card">
            {badgeText && <div className="class-badge">{badgeText}</div>}
            <img className="product-image" src={"/images/"+String(props.item.coverImg)} />
            <p className=""><span><img className="star" src="/images/star.png" /></span>{props.item.stats.rating} <span className="rating">({props.item.stats.reviewCount}).{props.item.location} </span></p>
            <p className="card--title">{props.item.title}</p>
            <p><strong>From ${props.item.price}</strong> / person</p>
        </div>

    );
}