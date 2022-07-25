import photo from "../images/photo.png"
export default function Navbar(){
    return(
        <div className="hero">
            <img className="hero--photo" src={photo} />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}