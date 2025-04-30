"use client";
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import * as signalR from "@microsoft/signalr";
import { useAppDispatch } from "@/app/redux/store";
import { setUserDetails } from "@/app/redux/Slices/UserDetails/userSlice";

type SignalRContextType = {
    connection: signalR.HubConnection | null;
};

const SignalRContext = createContext<SignalRContextType>({ connection: null });

export const SignalRProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const connectionRef = useRef<signalR.HubConnection | null>(null);
    const [connection, setConnection] = useState<signalR.HubConnection | null>(
        null
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:5216/chat", {
                accessTokenFactory: () => localStorage.getItem("token") || "",
                transport:
                    // signalR.HttpTransportType.WebSockets |
                    signalR.HttpTransportType.LongPolling,
                withCredentials: true,
            })
            .withAutomaticReconnect()
            // .configureLogging(signalR.LogLevel.Information)
            .build();

        newConnection
            .start()
            .then(() => {
                console.log("SignalR connected");
                newConnection.on("UserDetails", (res) => {
                    dispatch(setUserDetails({ userId: res }));
                });
                connectionRef.current = newConnection;
                setConnection(newConnection);
            })
            .catch((err) => console.error("SignalR connection failed: ", err));

        return () => {
            connectionRef.current?.stop();
        };
    }, []);

    return (
        <SignalRContext.Provider value={{ connection }}>
            {children}
        </SignalRContext.Provider>
    );
};

export const useSignalR = () => useContext(SignalRContext);
