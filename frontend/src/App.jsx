// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormModal/LoginFormModal";
// import SignupFormPage from "./components/SignupFormPage";
// import Navigation from "./components/Navigation";
// import * as sessionActions from "./store/session";

// function Layout() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => {
//       setIsLoaded(true);
//     });
//   }, [dispatch]);

//   return (
//     <>
//       <Navigation isLoaded={isLoaded} />
//       {isLoaded && <Outlet />}
//     </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <h1>Welcome!</h1>,
//       },
//       {
//         path: "login",
//         element: <LoginFormPage />,
//       },
//       {
//         path: "signup",
//         element: <SignupFormPage />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import * as sessionActions from "./store/session";
// import HomePage from "./components/homePage/homePage";
// import { restoreUser } from "./store/session";

// function Layout() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => {
//       setIsLoaded(true);
//     });
//   }, [dispatch]);

//   return (
//     <>
//       <Navigation isLoaded={isLoaded} />
//       {isLoaded && <Outlet />}
//     </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//     ],
//   },
// ]);

// function App() {
//   useEffect(() => {
//     dispatch(restoreUser()); // Restore user on app load
//   }, [dispatch]);

//   return <RouterProvider router={router} />;
// }

// export default App;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import HomePage from "./components/homePage/homePage";

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
