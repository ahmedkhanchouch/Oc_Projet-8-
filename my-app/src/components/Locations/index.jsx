import Card from "../Card";
import {Link} from "react-router-dom";
// import Logement from "../pages/Logement/index.jsx";
import Data from "../../backend/fichier.json";
import '../../styles/Location.scss';
// const Data =[ 
    
//     {
//     id: 'c67ab8a7',
//     title: 'Appartement cosy',
//     covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     }
//    , {
//     id: 'c67ab8a7',
//     title: 'Appartement cosy',
//     covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     }
//     ,{
//     id: 'c67ab8a7',
//     title: 'Appartement cosy',
//     covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     }
//     ,{
//     id: 'c67ab8a7',
//     title: 'Appartement cosy',
//     covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     }
//     ,{
//     id: 'c67ab8a7',
//     title: 'Appartement cosy',
//     covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     }
//     ,{
//     id: 'c67ab8a7',
//     title: 'Appartement cosy',
//     covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     }
//     ,{
//     id: 'c67ab8a7',
//     title: 'Appartement cosy',
//     covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     }
//     ,{
//     id: 'c67ab8a7',
//     title: 'Appartement cosy',
//     covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     }
//     ,{
//     id: 'c67ab8a7',
//     title: 'Appartement cosy',
//     covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     }
//     ,{
//     id: 'c67ab8a7',
//     title: 'Appartement cosy',
//     covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     }
//     ]


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