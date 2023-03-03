const diskusage = require('diskusage');
const os = require('os');
const Server = require('socket.io');

// TODO: Replace with your own port & cors origin
const io = new Server.Server(3000, { cors: { origin: '*' } });

const cpususage = () => {
	// Calculate the total CPU usage
	let totalUsage = 0;
	for (let i = 0; i < os.cpus().length; i++) {
	const cpu = os.cpus()[i];
	const total = cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.idle;
	const usage = 100 - (cpu.times.idle / total) * 100;
	totalUsage += usage;
	}
	return totalUsage.toFixed(2)
}


function calculateFreeDiskSpace() {
	// Calculate the free disk space
	return diskusage.checkSync('/').free / 1000000000;
}



io.on('connection', (socket) => {
	console.log('Client connected');
	socket.on('statsreq', () => {
		socket.emit("statsres",{
			hostname: os.hostname(),
			release: os.release(),
			uptime: `${Math.floor(os.uptime() / 3600)} hr ${Math.floor(os.uptime() / 60)} min`,
			memUsage: (((os.totalmem() - os.freemem()) / os.totalmem())*100).toFixed(2),
			cpusUsage: cpususage(),
			freeDiskSpace: calculateFreeDiskSpace().toFixed(2),
		});})
})
