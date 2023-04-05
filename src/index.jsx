import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPageNotFound } from "./pages/error/ErrorPageNotFound";
import Home from "./pages/home/Home";
import ApartmentPage from "./pages/apartmentPage/ApartmentPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/flat",
		element: <ApartmentPage />,
	},
	{
		path: "/about",
		element: <h1>A propos</h1>
	},
	{
		path: "*",
		element: <ErrorPageNotFound />
	}
])
ReactDOM.createRoot (document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);