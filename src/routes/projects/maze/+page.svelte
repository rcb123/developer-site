<script lang="ts">
	import { onMount } from 'svelte';

	let algorithm = 'BFS';
	let rows: number = 5;
	let cols: number = 5;
	let rowInputEl: HTMLInputElement;
	let colInputEl: HTMLInputElement;

	let maze: string[][] = Array.from({ length: rows }, () =>
		Array.from({ length: cols }, () => '.')
	);

	const invalidMazeMessage = 'Invalid maze.';
	const noPathMessage = 'No path could be found!';

	function solve() {
		const rows = maze.length;
		const cols = maze[0].length;
		let result;
		if (algorithm === 'BFS') {
			result = mazeSearchBFS(maze, rows, cols);
		} else if (algorithm === 'DFS') {
			result = mazeSearchDFS(maze, rows, cols);
		} else {
			alert('Invalid algorithm selected');
			return;
		}
		if (result === 1) {
			printMaze();
		} else if (result === 0) {
			alert(noPathMessage);
		} else {
			alert(invalidMazeMessage);
		}
	}

	function mazeSearch(maze: string[][], rows: number, cols: number): number {
		// Start and finish locations are fixed
		let start: [number, number] = [0, 0];
		let finish: [number, number] = [rows - 1, cols - 1];

		// Declare directions for neighboring cells
		const directions = [
			[-1, 0],
			[0, 1],
			[1, 0],
			[0, -1]
		];

		// Create arrays for previously explored cells and predecessor array for shortest path
		const explored: boolean[] = Array(rows * cols).fill(false);
		const predecessor: Array<[number, number]> = Array(rows * cols).fill([0, 0]);

		// Start queue at the starting position
		let queue: Array<[number, number]> = [];
		queue.push(start);

		// Keep going until finish is found or all possible locations have been visited
		while (queue.length > 0) {
			// Get current location
			const current = queue.shift();

			if (current) {
				// Check for finish
				if (current[0] === finish[0] && current[1] === finish[1]) {
					// Backtrack through predecessor array for shortest path
					backtrack(maze, cols, predecessor, start, finish);
					return 1;
				}

				for (const direction of directions) {
					const nextRow = current[0] + direction[0];
					const nextCol = current[1] + direction[1];
					const idx = nextRow * cols + nextCol;
					if (
						nextRow >= 0 &&
						nextRow < rows &&
						nextCol >= 0 &&
						nextCol < cols &&
						maze[nextRow][nextCol] !== '#' &&
						!explored[idx]
					) {
						queue.push([nextRow, nextCol]);
						explored[idx] = true;
						predecessor[idx] = current;
					}
				}
			}
		}
		return 0;
	}

	function mazeSearchBFS(maze: string[][], rows: number, cols: number): number {
		// Start and finish locations are fixed
		let start: [number, number] = [0, 0];
		let finish: [number, number] = [rows - 1, cols - 1];

		// Declare directions for neighboring cells
		const directions = [
			[-1, 0],
			[0, 1],
			[1, 0],
			[0, -1]
		];

		// Create arrays for previously explored cells and predecessor array for shortest path
		const explored: boolean[] = Array(rows * cols).fill(false);
		const predecessor: Array<[number, number]> = Array(rows * cols).fill([0, 0]);

		// Start queue at the starting position
		let queue: Array<[number, number]> = [];
		queue.push(start);

		// Keep going until finish is found or all possible locations have been visited
		while (queue.length > 0) {
			// Get current location
			const current = queue.shift();

			if (current) {
				// Check for finish
				if (current[0] === finish[0] && current[1] === finish[1]) {
					// Backtrack through predecessor array for shortest path
					backtrack(maze, cols, predecessor, start, finish);
					return 1;
				}

				for (const direction of directions) {
					const nextRow = current[0] + direction[0];
					const nextCol = current[1] + direction[1];
					const idx = nextRow * cols + nextCol;
					if (
						nextRow >= 0 &&
						nextRow < rows &&
						nextCol >= 0 &&
						nextCol < cols &&
						maze[nextRow][nextCol] !== '#' &&
						!explored[idx]
					) {
						queue.push([nextRow, nextCol]);
						explored[idx] = true;
						predecessor[idx] = current;
					}
				}
			}
		}
		return 0;
	}

	function mazeSearchDFS(maze: string[][], rows: number, cols: number): number {
		// Start and finish locations are fixed
		let start: [number, number] = [0, 0];
		let finish: [number, number] = [rows - 1, cols - 1];

		// Declare directions for neighboring cells
		const directions = [
			[-1, 0],
			[0, 1],
			[1, 0],
			[0, -1]
		];

		// Create arrays for previously explored cells and predecessor array for shortest path
		const explored: boolean[] = Array(rows * cols).fill(false);
		const predecessor: Array<[number, number]> = Array(rows * cols).fill([0, 0]);

		// Start stack at the starting position
		let stack: Array<[number, number]> = [];
		stack.push(start);

		// Keep going until finish is found or all possible locations have been visited
		while (stack.length > 0) {
			// Get current location
			const current = stack.pop();

			if (current) {
				// Check for finish
				if (current[0] === finish[0] && current[1] === finish[1]) {
					// Backtrack through predecessor array for shortest path
					backtrack(maze, cols, predecessor, start, finish);
					return 1;
				}

				for (const direction of directions) {
					const nextRow = current[0] + direction[0];
					const nextCol = current[1] + direction[1];
					const idx = nextRow * cols + nextCol;
					if (
						nextRow >= 0 &&
						nextRow < rows &&
						nextCol >= 0 &&
						nextCol < cols &&
						maze[nextRow][nextCol] !== '#' &&
						!explored[idx]
					) {
						stack.push([nextRow, nextCol]);
						explored[idx] = true;
						predecessor[idx] = current;
					}
				}
			}
		}
		return 0;
	}

	function backtrack(
		maze: string[][],
		cols: number,
		predecessor: [number, number][],
		start: [number, number],
		finish: [number, number]
	) {
		let current: [number, number] | undefined = finish;
		while (current[0] !== start[0] || current[1] !== start[1]) {
			const idx: number = current[0] * cols + current[1];
			current = predecessor[idx];

			if (maze[current[0]][current[1]] !== 'S') {
				maze[current[0]][current[1]] = '*';
			}
		}
	}

	function printMaze(): void {
		let board: HTMLTableElement | null = document.getElementById('board') as HTMLTableElement;
		if (!board) {
			return;
		}
		board.innerHTML = '';
		for (let rowNum = 0; rowNum < rows; rowNum++) {
			let row = board.insertRow();
			for (let colNum = 0; colNum < cols; colNum++) {
				let cell = row.insertCell();
				if (rowNum == 0 && colNum == 0) {
					cell.innerHTML = 'S';
					cell.className = 'w-16 h-16 text-center text-blue-500';
					continue;
				} else if (rowNum == rows - 1 && colNum == cols - 1) {
					cell.innerHTML = 'F';
					cell.className = 'w-16 h-16 text-center text-blue-500';
					continue;
				} else {
					cell.innerHTML = maze[rowNum][colNum];
					cell.className = 'w-16 h-16 text-center';
					cell.addEventListener('click', () => {
						// Toggles location between wall and free space
						if (maze[rowNum][colNum] === '#') {
							maze[rowNum][colNum] = '.';
							cell.innerHTML = '.';
						} else {
							maze[rowNum][colNum] = '#';
							cell.innerHTML = '#';
						}
					});
				}
			}
		}
	}

	function clear(): void {
		maze = Array.from({ length: rows }, () => Array.from({ length: cols }, () => '.'));
		printMaze();
	}

	function clearPath(): void {
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				if (maze[r][c] === '*') {
					maze[r][c] = '.';
				}
			}
		}
		printMaze(); // Redraw the maze to reflect the cleared path
	}

	function changeDimension(): void {
		rows = Number(rowInputEl.value);
		cols = Number(colInputEl.value);
		maze = Array.from({ length: rows }, () => Array.from({ length: cols }, () => '.'));
		printMaze();
	}

	function changeAlgorithm(event: Event): void {
		algorithm = (event.target as HTMLSelectElement).value;
	}

	onMount(() => {
		printMaze();
	});
</script>

<div class="mx-[10vw] flex w-[80vw] flex-col pt-10">
	<h1 class="text-center text-3xl">Maze Solver</h1>

	<div class="mt-4">
		<h2 class="text-blue text-lg">Instructions</h2>
		<p>To use the maze solver, start designing a maze in the grid below.</p>
		<p>
			'#' is used to represent a wall, '.' represents an open space, and 'S' and 'F' represent the
			start and finish locations respectively.
		</p>
		<p>After solving the maze, the valid path will be displayed using '*' characters.</p>
	</div>

	<div class="flex flex-col items-center justify-center align-middle">
		<table id="board" class="table w-fit text-3xl" />

		<div class="form-control mt-5 w-fit">
			<label class="input-group">
				<span>Algorithm:</span>
				<select bind:value={algorithm} class="input-bordered input">
					<option value="BFS">BFS</option>
					<option value="DFS">DFS</option>
				</select>
				<span>Rows:</span>
				<input
					bind:this={rowInputEl}
					type="number"
					min="3"
					max="20"
					value="5"
					class="input-bordered input"
				/>
				<span>Columns:</span>
				<input
					bind:this={colInputEl}
					type="number"
					min="3"
					max="20"
					value="5"
					class="input-bordered input"
				/>
				<button on:click={changeDimension} class="btn-square btn w-fit px-3">Generate Board</button>
			</label>
			<div class="flex w-full flex-row justify-center space-x-[8%]">
				<button on:click={solve} class="btn mt-5 w-5/12">Solve</button>
				<button on:click={clear} class="btn mt-5 w-5/12">Clear</button>
			</div>
		</div>
	</div>
</div>
