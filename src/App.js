import React, { useState, useEffect } from "react";
import Modal from "./Modal/index";
import logo from "./logo.svg";
import SuccessCatch from "./images/SuccessCatch.gif";
import "./App.css";

function App() {
	const [showModal, setShowModal] = useState(false);

	const onOpenModal = () => {
		setShowModal(true);
	};

	useEffect(() => {
		document.addEventListener("keydown", listenToEscape);

		return () => {
			document.removeEventListener("keydown", listenToEscape);
		};
	}, []);

	const listenToEscape = (e) => {
		if (e.key === "Escape") {
			setShowModal(false);
		}
	};

	const onClose = () => {
		setShowModal(false);
	};

	const headerTemplate = () => <>Template Header</>;

	const bodyTemplate = () => (
		<div className="body-template">
			<img src={SuccessCatch} alt="images" />
			<p>
				lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum." "Sed ut perspiciatis unde omnis iste natus
				error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
				beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
				voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
				dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
				est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
				sed quia non numquam eius modi tempora incidunt ut labore et dolore
				magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
				nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
				aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
				qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
				illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</p>
		</div>
	);

	const footerTemplate = () => (
		<>Copyright © (2022) Footer. All rights reserved. - Template Footer.</>
	);

	return (
		<>
			{showModal && (
				<Modal
					onClose={onClose}
					bodyTemplate={bodyTemplate}
					headerTemplate={headerTemplate}
					footerTemplate={footerTemplate}
				/>
			)}
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Open Modal below to see result</p>
					<button onClick={onOpenModal} className="App-link">
						Open Modal
					</button>
				</header>
			</div>
		</>
	);
}

export default App;
