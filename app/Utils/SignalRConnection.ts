"use client";
import * as signalR from "@microsoft/signalr";
import { useAppDispatch } from "@/app/redux/store";
import { setSignalRConnection } from "@/app/redux/Slices/SignalR/signalRConnectionSlice";

const connect = async () => {
    // const dispatch = useAppDispatch();
    // const connection = new signalR.HubConnectionBuilder()
    //     .withUrl("http://localhost:5216/chat", {
    //         // accessTokenFactory: () => yourJwtToken, // If using JWT
    //         withCredentials: true,
    //         transport:
    //             signalR.HttpTransportType.WebSockets |
    //             signalR.HttpTransportType.LongPolling,
    //     })
    //     .configureLogging(signalR.LogLevel.Information)
    //     .withAutomaticReconnect()
    //     .build();

    // connection
    //     .start()
    //     .then(async () => {
    //         await connection.send("CreateConnection", "123");
    //         dispatch(setSignalRConnection(connection));
    //     })
    //     .catch((err) => console.log("SignalR error : " + err));
};

export default connect;
