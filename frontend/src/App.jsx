import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import HomePage from "./components/homePage/homePage";
import SpotDetail from "./components/SpotsDetails/SpotsDetails";

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "spots/:spotId",
        element: <SpotDetail />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch(); // Add useDispatch here

  useEffect(() => {
    dispatch(sessionActions.restoreUser()); // Restore user on app load
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
