import Home from "./pages/home/Home";
import ApartmentPage from "./pages/apartmentPage/ApartmentPage";
import About from "./pages/about/About";
import ErrorPageNotFound from "./pages/error/ErrorPageNotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Définit les différentes routes //
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/flat",
        element: <ApartmentPage />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "*",
        element: <ErrorPageNotFound />
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;