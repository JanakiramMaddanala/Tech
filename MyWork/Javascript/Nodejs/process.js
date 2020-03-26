console.log(process.argv);

process.stdout.write('Hello Node! \n');
process.stdout.write('How are you doing?')

process.stdin.on('data', (data) => {
    console.log(data.toString());
});

process.on('exit', () => {
    console.log("Process Completed");
});