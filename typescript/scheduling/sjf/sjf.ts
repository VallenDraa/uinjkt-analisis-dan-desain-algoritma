type Process = {
	id: number;
	burstTime: number;
	waitingTime?: number;
	turnaroundTime?: number;
};

const processes: Process[] = [
	{ id: 5, burstTime: 30, waitingTime: 0, turnaroundTime: 30 },
	{ id: 4, burstTime: 25, waitingTime: 20, turnaroundTime: 45 },
	{ id: 1, burstTime: 30, waitingTime: 26, turnaroundTime: 45 },
	{ id: 8, burstTime: 35, waitingTime: 0, turnaroundTime: 45 },
	{ id: 6, burstTime: 40, waitingTime: 25, turnaroundTime: 65 },
	{ id: 2, burstTime: 60, waitingTime: 35, turnaroundTime: 95 },
	{ id: 3, burstTime: 60, waitingTime: 55, turnaroundTime: 115 },
	{ id: 9, burstTime: 65, waitingTime: 55, turnaroundTime: 120 },
	{ id: 7, burstTime: 40, waitingTime: 60, turnaroundTime: 100 },
	{ id: 10, burstTime: 45, waitingTime: 30, turnaroundTime: 75 },
];

function sjf(processes: Process[]) {
	let total = 0;
	let avg_wt: number;
	let avg_tat: number;

	console.log('P\tBT\tWT\tTAT');
	for (let i = 0; i < processes.length; i++) {
		total += processes[i].waitingTime!;
		console.log(
			`P${processes[i].id}\t${processes[i].burstTime}\t${processes[i].waitingTime}\t${processes[i].turnaroundTime}`,
		);
	}

	avg_wt = total / processes.length;
	total = 0;

	for (let i = 0; i < processes.length; i++) {
		total += processes[i].turnaroundTime!;
	}

	avg_tat = total / processes.length;
	console.log('Average Waiting Time = ' + avg_wt);
	console.log('Average Turnaround Time = ' + avg_tat);
}

sjf(processes);
