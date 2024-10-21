import "./SpotsDetails.css";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchSpotDetails } from "../../store/SpotDetailsReducer"; // Adjust the import path as necessary

// const SpotDetail = () => {
//   const { spotId } = useParams();
//   const dispatch = useDispatch();
//   const spot = useSelector((state) => state.spotDetails.spot);

//   useEffect(() => {
//     dispatch(fetchSpotDetails(spotId));
//   }, [dispatch, spotId]);

//   console.log("Spot details:", spot); // Debug log for verification

//   if (!spot) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <img src={spot.SpotImages[0]?.url} alt={spot.name} />
//       <h1>{spot.name}</h1>
//       <p>{spot.description}</p>
//       <p>
//         Location: {spot.city}, {spot.state}
//       </p>
//       <p>Price: ${spot.price} per night</p>
//       <p>Rating: {spot.rating}</p>
//       <p>
//         Owner: {spot.Owner.firstName} {spot.Owner.lastName}
//       </p>
//     </div>
//   );
// };

// export default SpotDetail;
//////////////////////////////////////////////////////////////////////////////////////////////////////
import "./SpotsDetails.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpotDetails } from "../../store/SpotDetailsReducer";
import logo from "../homePage/images/princess_castle_airbnb_logo.png";
import castle1 from "./spotGallery/360_F_568320248_mAyBY6lxiYqWfdw3iK6YZsQ1R0qpE7jm.jpg";
import castle2 from "./spotGallery/360_F_801409763_JzEa8bsuStUq85v5IKimfyb5pb07puL3.jpg";
import castle3 from "./spotGallery/Elegant-Soft-Intricate-Details-Holographic-Winter-Glow-Snow-Covered-Princess-49501716-1.png";
import castle4 from "./spotGallery/s-l400.jpg";
import { NavLink } from "react-router-dom";

const SpotDetail = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spotDetails.spot);

  useEffect(() => {
    dispatch(fetchSpotDetails(spotId));
  }, [dispatch, spotId]);

  console.log("Spot details:", spot); // Debug log for verification

  if (!spot) {
    return <div>Loading...</div>;
  }

  return (
    <div className="spot-detail">
      <div className="logo">
        <NavLink to="/">
          {" "}
          <img src={logo} alt="princss logo" />
        </NavLink>
      </div>
      <img src={spot.SpotImages[0]?.url} alt={spot.name} className="large-image" />
      <h1>{spot.name}</h1>
      <p className="location">
        Location: {spot.city}, {spot.state}, {spot.country}
      </p>
      <div className="spot-host">
        <p>
          Hosted by {spot.Owner.firstName} {spot.Owner.lastName}
        </p>
        <p>{spot.description}</p>
      </div>
      <div className="callout-box">
        <p>Price: ${spot.price} per night</p>
        <p>Rating: {spot.rating}</p>
      </div>

      <div className="fourphotos">
        <img src={castle1} />
        <img src={castle2} />
        <img src={castle3} />
        <img src={castle4} />
      </div>
      <div className="buttonborder">
        <button className="featurebutton" onClick={() => alert("Feature Coming Soon...")}>
          Reserve
        </button>
      </div>
    </div>
  );
};

export default SpotDetail;
