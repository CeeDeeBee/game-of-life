import React, { useRef, useState, useEffect } from "react";
import { useInterval } from "./hooks/useInterval";
import "./App.css";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

function App() {
	const grid = useRef(null);
	// normalize width and height to exactaly fit tiles
	const xTiles = Math.floor((window.innerWidth * 0.9) / 20);
	const yTiles = Math.floor((window.innerHeight * 0.9) / 20);
	const width = xTiles * 20;
	const height = yTiles * 20;
	const [tiles, setTiles] = useState(new Array(xTiles * yTiles).fill(false));
	const [ctx, setCtx] = useState(null);
	const [generation, setGeneration] = useState(0);
	const [running, setRunning] = useState(false);
	const [speed, setSpeed] = useState(1000);
	const neighbors = [
		-(xTiles - 1),
		-xTiles,
		-(xTiles + 1),
		-1,
		1,
		xTiles - 1,
		xTiles,
		xTiles + 1,
	];

	useEffect(() => {
		setCtx(grid.current.getContext("2d"));
	}, []);

	useEffect(() => {
		if (ctx) initGrid();
	}, [ctx]);

	const initGrid = () => {
		// draw vertical lines
		for (var i = 20; i < width; i += 20) {
			ctx.beginPath();
			ctx.moveTo(i, 0);
			ctx.lineTo(i, height);
			ctx.stroke();
		}
		// draw horizontal lines
		for (var i = 20; i < height; i += 20) {
			ctx.beginPath();
			ctx.moveTo(0, i);
			ctx.lineTo(width, i);
			ctx.stroke();
		}
	};

	const clear = () => {
		ctx.clearRect(0, 0, width, height);
		setTiles(new Array(xTiles * yTiles).fill(false));
		setGeneration(0);
		setRunning(false);
		initGrid();
	};

	const toggleTile = (x, y, tileIndex) => {
		// toggle tile
		if (tiles[tileIndex]) {
			ctx.fillStyle = "#FFFFFF";
		} else {
			ctx.fillStyle = "#000000";
		}
		ctx.fillRect(x + 1, y + 1, 18, 18);
		// update tiles array
		const newTiles = [...tiles];
		newTiles[tileIndex] = !newTiles[tileIndex];
		setTiles(newTiles);
	};

	const drawTiles = () => {
		for (var i = 0; i < tiles.length; i++) {
			if (tiles[i]) {
				ctx.fillStyle = "#000000";
			} else {
				ctx.fillStyle = "#FFFFFF";
			}
			ctx.fillRect(
				Math.floor(i % xTiles) * 20 + 1,
				Math.floor(i / xTiles) * 20 + 1,
				18,
				18
			);
		}
	};

	const runGame = () => {
		drawTiles();
		const newTiles = [...tiles];
		for (var i = 0; i < tiles.length; i++) {
			const tileNeighbors = neighbors.map((neighbor) => neighbor + i);
			var count = 0;
			// count alive neighbors
			for (var j = 0; j < tileNeighbors.length; j++) {
				if (tiles[tileNeighbors[j]]) {
					count += 1;
				}
			}

			if (tiles[i]) {
				if (count !== 2 && count !== 3) {
					newTiles[i] = false;
				}
			} else {
				if (count === 3) {
					newTiles[i] = true;
				}
			}
		}
		setTiles(newTiles);
		setGeneration(generation + 1);
	};

	const handleGridClick = (e) => {
		if (!running) {
			const rect = grid.current.getBoundingClientRect();
			const x = Math.floor((e.clientX - rect.left) / 20);
			const y = Math.floor((e.clientY - rect.top) / 20);
			const tileIndex = xTiles * y + x;
			toggleTile(x * 20, y * 20, tileIndex);
		}
	};

	useInterval(() => {
		if (running) runGame();
	}, speed);

	const startAnimation = () => {
		runGame();
		setRunning(true);
	};

	const stopAnimation = () => {
		setRunning(false);
	};

	const random = () => {
		const newTiles = [...tiles];
		for (var i = 0; i < newTiles.length; i++) {
			const rand = Math.random();
			if (rand > 0.8) {
				newTiles[i] = true;
			}
		}
		setTiles(newTiles);
		drawTiles();
	};

	return (
		<div className="App">
			<canvas
				className="grid"
				ref={grid}
				width={width}
				height={height}
				onClick={handleGridClick}
			></canvas>
			<p>Generation: {generation}</p>
			<button onClick={startAnimation}>Start</button>
			<button onClick={stopAnimation}>Stop</button>
			<button onClick={runGame}>Next</button>
			<button onClick={clear}>Clear</button>
			<button onClick={() => setSpeed(speed - 100)}>Increase Speed</button>
			<button onClick={() => setSpeed(speed + 100)}>Decrease Speed</button>
			<button onClick={random}>Random</button>
		</div>
	);
}

export default App;
