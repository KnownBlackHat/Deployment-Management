import Navbar from "@/components/Dashboard/NavBar"
import Head  from "next/head";
import TrackCard from "@/components/StatsCard";

import { io } from "socket.io-client";
import { useState, useEffect, useRef } from "react";

export default function Dashboard () {

    return ( 
        <>
        <Head>
        <title>Dashboard - Status</title>
        </Head>
        <Navbar/>
        {process.env.NEXT_PUBLIC_WS_URL?
            JSON.parse(process.env.NEXT_PUBLIC_WS_URL).map(url => {
                return ( <StatsCard key={url} WSURL={url}/> )
            }):
            <p className="h-screen w-screen flex items-center justify-center">
            No Servers Found!</p> }
        </>
    )}

export function StatsCard ({WSURL}) {

    const [ConnectionStatus, setConnectionStatus] = useState("Initiating")
    const [Data, setData] = useState({})
    const socket = useRef()

    useEffect(() => {
        const SocksInit = async () => {
            socket.current = io(WSURL);

            await socket.current.on("statsres", (data) => { setData(data) });
            setInterval(()=>{socket.current.volatile.emit("statsreq")}, 1000)
            
            socket.current.on("connect", () => {
                setConnectionStatus("Up") 
                clearTimeout(SocksTimeOut)
            } )

            const SocksTimeOut = setTimeout(() => {
                setConnectionStatus("Down")
                socket.current.close()
            }, 10000)

            socket.current.on("disconnect", () => {
                setConnectionStatus("Down")
            })
        }
        SocksInit()
        return() => {socket.current.disconnect()}
    }, [WSURL])



    return (
        <div className="m-2 border-2 
            rounded transition-all delay-500 
            bg-contain bg-cover bg-no-repeat 
            bg-[url('https://source.unsplash.com/2000x600/?server')]">

        <ul className="flex flex-wrap mb-4 justify-between 
            bg-black/70 border-black border-2 
            rounded p-4 font-bold text-center">

        <li>Host: {Data.hostname}</li>
        <li>OS: {Data.platform} </li>
        <li>Uptime: {Data.uptime}</li>

        </ul>
        <div id="status" 
        className="flex flex-col items-center justify-center 
            p-2 text-center 
            md:space-x-4 space-y-4 md:space-y-0 md:flex-row">

        <TrackCard name="Memory" percent={Data.memUsage}
        used={Data.usedmem} total={Data.totalmem} />
        <TrackCard name="Disk" percent={Data.diskUsage} 
        used={Data.usedDiskSpace} total={Data.totalDiskSpace}  />

        </div>
        <div className="flex items-center justify-center 
        p-2 text-center">
        <span className={`text-center p-2 rounded
            bg-${ConnectionStatus==="Initiating"?
                    "yellow":(ConnectionStatus==="Up"?"green":"red")}-500`}>
        {ConnectionStatus==="Initiating"?
                    "Connecting":(ConnectionStatus==="Up"?"Online":"Offline")}
        </span>
        </div>
        </div>
    )

}
