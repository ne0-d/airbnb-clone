import photo from "../photo-grid.png"
export default function Navbar(){
    return(

        <div>
            <img className="photo--grid" src={photo} />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            
        </div>
    );
}