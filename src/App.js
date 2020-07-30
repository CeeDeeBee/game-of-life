import React, { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
	const grid = useRef(null);
	// normalize width and height to exactaly fit tiles
	const xTiles = Math.floor((window.innerWidth * 0.9) / 20);
	const yTiles = Math.floor((window.innerHeight * 0.9) / 20);
	const width = xTiles * 20;
	const height = yTiles * 20;
	// console.log(xTiles);
	// console.log(yTiles);
	// console.log(xTiles * yTiles);
	const [tiles, setTiles] = useState(new Array(xTiles * yTiles).fill(false));
	const [ctx, setCtx] = useState(null);

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

	const toggleTile = (x, y, tileIndex) => {
		const newTiles = [...tiles];
		console.log(y);
		console.log(tileIndex);
		newTiles[tileIndex] = !newTiles[tileIndex];
		console.log(newTiles.length);
		setTiles(newTiles);
		console.log(tiles);
		ctx.fillRect(x + 1, y + 1, 18, 18);
	};

	useEffect(() => {
		setCtx(grid.current.getContext("2d"));
	}, []);

	useEffect(() => {
		console.log(tiles.length);
	}, [tiles]);

	useEffect(() => {
		if (ctx) initGrid();
	}, [ctx]);

	const handleGridClick = (e) => {
		const rect = grid.current.getBoundingClientRect();
		const x = Math.floor((e.clientX - rect.left) / 20);
		const y = Math.floor((e.clientY - rect.top) / 20);
		const tileIndex = xTiles * y + x;
		toggleTile(x * 20, y * 20, tileIndex);
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
		</div>
	);
}

export default App;
