process.on('exit', code => {
	setTimeout(() => {
		console.log('Will not get displayed');
	}, 0);

	console.log('Exited with status code:', code);
});
console.log('Execution Completed');



process.stdout.write('Hello World!' + '\n');

process.argv.forEach(function(val, index, array) {
	console.log(index + ': ' + val);
});