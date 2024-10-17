import "./SpotsDetails.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpotDetails } from "../../store/SpotDetailsReducer"; // Adjust the import path as necessary

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
    <div>
      <img src={spot.SpotImages[0]?.url} alt={spot.name} />
      <h1>{spot.name}</h1>
      <p>{spot.description}</p>
      <p>
        Location: {spot.city}, {spot.state}
      </p>
      <p>Price: ${spot.price} per night</p>
      <p>Rating: {spot.rating}</p>
      <p>
        Owner: {spot.Owner.firstName} {spot.Owner.lastName}
      </p>
    </div>
  );
};

export default SpotDetail;
