import diskusage from 'diskusage';
import os from 'os';
import { Server } from 'socket.io';


// TODO: Replace with your own port & cors origin
const io = new Server(3000, { cors: { origin: '*' } });



function calculateUpTime() {
    // Calculate the uptime
    const seconds = os.uptime()
    // calculate the number of days
    const days = Math.floor(seconds / (24 * 60 * 60));
    // calculate the number of hours
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    // calculate the number of minutes
    const minutes = Math.floor((seconds % (60 * 60)) / 60); 
    return(
        (days===0 ? '' : days + 'd ') + 
        (hours===0 ? '' : hours + 'h ') + 
        (minutes===0 ? '' : minutes + 'm ')
    )

}


io.on('connection', (socket) => {
	console.log('[+] Client connected');
	socket.on('statsreq', () => {
		socket.volatile.emit("statsres",{
			hostname: os.hostname(),
			platform: os.type(),
			uptime: calculateUpTime(),
			
			totalmem: (os.totalmem()/(1024*1024)).toFixed(0)+" MiB",
			usedmem: ((os.totalmem() - os.freemem())/(1024*1024)).toFixed(0)+" MiB",
			memUsage: (((os.totalmem() - os.freemem()) / os.totalmem())*100).toFixed(2),

			totalDiskSpace: (diskusage.checkSync('/').total / 1000000000).toFixed(2)+" GiB",
			usedDiskSpace: ((diskusage.checkSync('/').total - diskusage.checkSync('/').free) / 1000000000).toFixed(2)+" GiB",
			diskUsage: ((diskusage.checkSync('/').total - diskusage.checkSync('/').free) / diskusage.checkSync('/').total * 100).toFixed(2),

		});})
	socket.on("disconnect", (reason) => {
		console.log('[!] Client Disconnected Reason: ',reason);
  });
})
