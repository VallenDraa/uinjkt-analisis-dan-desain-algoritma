import promptSync from 'prompt-sync';

interface Process {
	id: number;
	burstTime: number;
	waitingTime?: number;
	turnaroundTime?: number;
}

const A: Process[] = [];
let total = 0;
let index: number, temp: number;
let avg_wt: number, avg_tat: number;

const prompt = promptSync();
const n: number = parseInt(prompt('Enter the number of processes: ') || '0');

for (let i = 0; i < n; i++) {
	const input: string | null = prompt('P' + (i + 1) + ': ');
	if (input !== null) {
		A.push({ id: i + 1, burstTime: parseInt(input) });
	}
}

for (let i = 0; i < n; i++) {
	index = i;
	for (let j = i + 1; j < n; j++) {
		if (A[j].burstTime < A[index].burstTime) {
			index = j;
		}
	}

	temp = A[i].burstTime;
	A[i].burstTime = A[index].burstTime;
	A[index].burstTime = temp;

	temp = A[i].id;
	A[i].id = A[index].id;
	A[index].id = temp;
}

A[0].waitingTime = 0;
for (let i = 1; i < n; i++) {
	A[i].waitingTime = 0;
	for (let j = 0; j < i; j++) {
		A[i].waitingTime! += A[j].burstTime;
	}
	total += A[i].waitingTime!;
}

avg_wt = total / n;
total = 0;
console.log('P\tBT\tWT\tTAT');
for (let i = 0; i < n; i++) {
	A[i].turnaroundTime = A[i].burstTime + A[i].waitingTime!;
	total += A[i].turnaroundTime!;
	console.log(
		`P${A[i].id}\t${A[i].burstTime}\t${A[i].waitingTime}\t${A[i].turnaroundTime}`,
	);
}

avg_tat = total / n;
console.clear();
console.log('Average Waiting Time = ' + avg_wt);
console.log('Average Turnaround Time = ' + avg_tat);
