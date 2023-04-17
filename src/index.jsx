import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Affichage de l'application react avec le composant App comme racine //
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);