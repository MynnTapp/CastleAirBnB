////////////////////////////////////////////////////////////////////////////////

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchSpotDetails } from "../../store/SpotDetailsReducer";
// import logo from "../homePage/images/princess_castle_airbnb_logo.png";
// import { NavLink } from "react-router-dom";

// const ManageSpots = () => {

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
//     <div className="spot-detail">
//       <div className="logo">
//         <NavLink to="/">
//           {" "}
//           <img src={logo} alt="princss logo" />
//         </NavLink>
//       </div>
//       <img src={spot.SpotImages?.url} alt={spot.name} className="large-image" />
//       <h1>{spot.name}</h1>
//       <p className="location">
//         Location: {spot.city}, {spot.state}, {spot.country}
//       </p>
//       <div className="spot-host">
//         <p>
//           Hosted by {spot.Owner.firstName} {spot.Owner.lastName}
//         </p>
//         <p>{spot.description}</p>
//       </div>
//       <div className="callout-box">
//         <p>Price: ${spot.price} per night</p>
//         <p>Rating: {spot.rating}</p>
//       </div>
//     </div>
//   );
// };

// export default ManageSpots;

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadSpots } from "../../store/ManageSpotsReducer";
//import { useNavigate } from "react-router";

export default function ManageSpots() {
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadSpots());
  }, [dispatch]);

  const user = useSelector((state) => state.session.user);
  const allSpots = useSelector((state) => state.allSpots);
  console.log(allSpots);
  console.log(allSpots);
  const ownedSpots = allSpots.filter((spot) => spot.ownerId === user.id);
  console.log(ownedSpots);

  // const createSpot = () => {
  //   navigate("/spots/new");
  // };

  return (
    <div className="manageSpots">
      <h1 className="title">Manage Spots</h1>
      {ownedSpots.length > 0 ? null : (
        // <button className="newSpot" onClick={createSpot}>
        // Create a New Spot
        // </button>
        <h1>you dont got spots</h1>
      )}
    </div>
  );
}
