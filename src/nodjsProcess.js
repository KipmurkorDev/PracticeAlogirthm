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


function prepareProcess(name, disposeCallback) {
    process.title = 'ndb/' + name;
    function silentRpcErrors(error) {
     if (!process.connected && error.code === 'ERR_IPC_CHANNEL_CLOSED')
      return;
     throw error;
    }
    process.on('uncaughtException', silentRpcErrors);
    process.on('unhandledRejection', silentRpcErrors);
    // dispose when child process is disconnected
    process.on('disconnect', () => disposeCallback());
   }

   stopSignals.forEach(function (signal) {
    process.on(signal, function () {
      console.log(`Got ${signal}, stopping workers...`);
      stopping = true;
      cluster.disconnect(function () {
        console.log("All workers stopped, exiting.");
        process.exit(0);
      });
    });
  });