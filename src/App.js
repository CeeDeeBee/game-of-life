import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	// init WASM
	useEffect(() => {
		const loadWASM = async () => {
			const { instance } = await WebAssembly.instantiateStreaming(
				fetch("main.wasm"),
				window.go.importObject
			);
			await window.go.run(instance);
		};
		loadWASM();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
