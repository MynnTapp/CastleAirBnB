// // components/ManageSpots.jimport { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserSpots } from "../../store/ManageSpotsReducer"; // Ensure correct import path
// import { useEffect, Link } from "react";

// const ManageSpots = () => {
//   const dispatch = useDispatch();
//   const userSpots = useSelector((state) => state.spots.userSpots);

//   useEffect(() => {
//     dispatch(fetchUserSpots());
//   }, [dispatch]);

//   if (!userSpots.length) {
//     return <div>No spots found.</div>;
//   }

//   return (
//     <div className="manage-spots">
//       <h1>Manage Your Spots</h1>
//       <ul className="spots-list">
//         {userSpots.map((spot) => (
//           <li key={spot.id} className="spot-item">
//             <div className="spot-details">
//               <img src={spot.previewImage} alt={spot.name} className="spot-image" />
//               <h2>{spot.name}</h2>
//               <p>{spot.description}</p>
//               <p>
//                 Location: {spot.city}, {spot.state}, {spot.country}
//               </p>
//               <p>Price: ${spot.price} per night</p>
//               <p>Rating: {spot.avgRating}</p>
//               <Link to={`/spots/${spot.id}`} className="view-details-link">
//                 View Details
//               </Link>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ManageSpots;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSpots } from "../../store/ManageSpotsReducer"; // Ensure correct import path
import { Link } from "react-router-dom";

const ManageSpots = () => {
  const dispatch = useDispatch();
  const userSpots = useSelector((state) => state.spots);

  useEffect(() => {
    dispatch(fetchUserSpots());
  }, [dispatch]);

  if (!Array.isArray(userSpots)) {
    return <div>No spots found.</div>;
  }

  return (
    <div className="manage-spots">
      <h1>Manage Your Spots</h1>
      <ul className="spots-list">
        {userSpots.map((spot) => (
          <li key={spot.id} className="spot-item">
            <div className="spot-details">
              <img src={spot.previewImage} alt={spot.name} className="spot-image" />
              <h2>{spot.name}</h2>
              <p>{spot.description}</p>
              <p>
                Location: {spot.city}, {spot.state}, {spot.country}
              </p>
              <p>Price: ${spot.price} per night</p>
              <p>Rating: {spot.avgRating}</p>
              <Link to={`/spots/${spot.id}`} className="view-details-link">
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageSpots;
