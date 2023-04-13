import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPageNotFound } from "./pages/error/ErrorPageNotFound";
import Home from "./pages/home/Home";
import ApartmentPage from "./pages/apartmentPage/ApartmentPage";
import About from "./pages/about/About";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/flat/props.id",
		element: <ApartmentPage />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "*",
		element: <ErrorPageNotFound />
	}
])
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);