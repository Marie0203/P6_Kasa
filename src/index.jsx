import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPageNotFound } from "./pages/error/ErrorPageNotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/flat",
		element: <h1>Nos appartements</h1>
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