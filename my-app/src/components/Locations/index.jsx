import Card from "../Card";
import {Link} from "react-router-dom";
import Data from "../../backend/fichier.json";
import '../../styles/Location.scss';

function Location() {
    return (
    
        <div className="Cardcontainer">
            {Data.map((profile) => (
                <Link to={`/logement/${profile.id}`} >
                        <Card
                            key={profile.id}
                            title={profile.title}
                            // title={profile.cover}
                            picture={profile.cover}
                        />
                </Link>  
            ))}
        </div>
    
    )
}
export default Location;