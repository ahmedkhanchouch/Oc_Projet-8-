import Card from "../Card";
import '../../styles/Location.scss';
const Data =[ 
    
    {
    id: 'c67ab8a7',
    title: 'Appartement cosy',
    covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    }
   , {
    id: 'c67ab8a7',
    title: 'Appartement cosy',
    covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    }
    ,{
    id: 'c67ab8a7',
    title: 'Appartement cosy',
    covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    }
    ,{
    id: 'c67ab8a7',
    title: 'Appartement cosy',
    covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    }
    ,{
    id: 'c67ab8a7',
    title: 'Appartement cosy',
    covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    }
    ,{
    id: 'c67ab8a7',
    title: 'Appartement cosy',
    covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    }
    ,{
    id: 'c67ab8a7',
    title: 'Appartement cosy',
    covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    }
    ,{
    id: 'c67ab8a7',
    title: 'Appartement cosy',
    covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    }
    ,{
    id: 'c67ab8a7',
    title: 'Appartement cosy',
    covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    }
    ,{
    id: 'c67ab8a7',
    title: 'Appartement cosy',
    covers: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    }
    ]

const cover = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
function Location() {
    return (
    
    <div className="CardWrapper">
        {Data.map((profile) => (
          <Card
            key={profile.id}
            label={profile.title}
            title={profile.cover}
            picturer={cover}
          />
        ))}
    </div>
    
    )
}
export default Location;