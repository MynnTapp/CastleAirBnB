import logo from "./images/princess_castle_airbnb_logo.png";
import "./homePage.css";
import { Link } from "react-router-dom";
import castle1 from "./CastleImages/800_3642382_crbbsgag7woq5l6ffzcekzmp3v6pn2mduy3m0s6z.jpg";
import castle2 from "./CastleImages/Fairy-House-Kawaii-Magic-Castle-63104854-1 (1).png";
import castle3 from "./CastleImages/castle_in_the_sky_by_misconceptionaiart_dfxz8nm-pre.jpg";
import castle4 from "./CastleImages/Inside_and_Seek_(20).png";

// export default function HomePage() {
//   return (
//     <div>
//       <Link to="/">
//         <img src={logo} alt="princess AirBnB" />
//       </Link>
//       <div className="castle-gallery">
//         <Link to="/spots/1" className="castle-item">
//           <img src={castle1} alt="Castle 1" title="pretty pink Skycastle" />
//           <div className="castle-caption">🌟5/5</div>
//           <p className="info">Savannah, Georgia</p>
//           <p className="info">$123.54 night</p>
//         </Link>
//         <Link to="/spots/2" className="castle-item">
//           <img src={castle2} alt="Castle 2" title="sparkly mexican castle" />
//           <div className="castle-caption">🌟1/5</div>
//           <p className="info">$900.67 night</p>
//           <p className="info">Santa Fe, New Mexico</p>
//         </Link>
//         <Link to="/spots/3" className="castle-item">
//           <img src={castle3} alt="Castle 3" title="Castle in the woods" />
//           <div className="castle-caption">🌟4/5</div>
//           <p className="info">$679.93 night</p>
//           <p className="info">Aspen, Colorado</p>
//         </Link>
//         <Link to="/spots/4" className="castle-item">
//           <img src={castle4} alt="Castle 4" title="hide and seek castle" />
//           <p className="info">$320.56 night</p>
//           <p className="info">Newport, Rhode Island</p>
//           <div className="castle-caption">🌟4/5</div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// import { useDispatch } from "react-redux";
// import { fetchSpotDetails } from "../../store/SpotDetailsReducer"; // Adjust the import path as necessary

// export default function HomePage() {
//   const dispatch = useDispatch();

//   const handleImageClick = (spotId) => {
//     dispatch(fetchSpotDetails(spotId));
//   };

//   return (
//     <div>
//       <Link to="/">
//         <img src={logo} alt="Princess AirBnB" />
//       </Link>
//       <div className="castle-gallery">
//         <Link to="/spots/1" className="castle-item" onClick={() => handleImageClick(1)}>
//           <img src={castle1} alt="Castle 1" title="Pretty Pink Skycastle" />
//           <div className="castle-caption">5/5</div>
//           <p className="info">Savannah, Georgia</p>
//           <p className="info">$123.54 night</p>
//         </Link>
//         <Link to="/spots/2" className="castle-item" onClick={() => handleImageClick(2)}>
//           <img src={castle2} alt="Castle 2" title="Sparkly Mexican Castle" />
//           <div className="castle-caption">1/5</div>
//           <p className="info">$900.67 night</p>
//           <p className="info">Santa Fe, New Mexico</p>
//         </Link>
//         <Link to="/spots/3" className="castle-item" onClick={() => handleImageClick(3)}>
//           <img src={castle3} alt="Castle 3" title="Castle in the Woods" />
//           <div className="castle-caption">4/5</div>
//           <p className="info">$679.93 night</p>
//           <p className="info">Aspen, Colorado</p>
//         </Link>
//         <Link to="/spots/4" className="castle-item" onClick={() => handleImageClick(4)}>
//           <img src={castle4} alt="Castle 4" title="Hide and Seek Castle" />
//           <p className="info">$320.56 night</p>
//           <p className="info">Newport, Rhode Island</p>
//           <div className="castle-caption">4/5</div>
//         </Link>
//       </div>
//     </div>
//   );
// }

import { useDispatch } from "react-redux";
import { fetchSpotDetails } from "../../store/SpotDetailsReducer"; // Adjust the import path as necessary

export default function HomePage() {
  const dispatch = useDispatch();

  // Sample data - replace with your actual data source
  const spots = [
    { id: 1, img: castle1, title: "Pretty Pink Skycastle", rating: 4.5, city: "Savannah", state: "Georgia", price: 123.54 },
    { id: 2, img: castle2, title: "Sparkly Mexican Castle", rating: 3.2, city: "Santa Fe", state: "New Mexico", price: 900.67 },
    { id: 3, img: castle3, title: "Castle in the Woods", rating: 4.7, city: "Aspen", state: "Colorado", price: 679.93 },
    { id: 4, img: castle4, title: "Hide and Seek Castle", rating: 5.0, city: "Newport", state: "Rhode Island", price: 320.56 },
  ];

  const handleImageClick = (spotId) => {
    dispatch(fetchSpotDetails(spotId));
  };

  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Princess AirBnB" />
      </Link>
      <div className="castle-gallery">
        {spots.map((spot) => (
          <Link to={`/spots/${spot.id}`} className="castle-item" onClick={() => handleImageClick(spot.id)} key={spot.id}>
            <img src={spot.img} alt={spot.title} title={spot.title} />
            <div className="castle-caption">
              <span>{spot.rating ? `${spot.rating.toFixed(1)}★` : "New"}</span>
            </div>
            <p className="info">
              {spot.city}, {spot.state}
            </p>
            <p className="info">${spot.price.toFixed(2)} night</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
