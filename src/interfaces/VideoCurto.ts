import { Timestamp } from "firebase/firestore";

export default interface VideoCurto {
    id: string
    idDoVideo: string;
    titulo: string;
    url: string;
    plataforma: "youtube" | "tiktok" | "instagram";
    data: string | Timestamp;
    linkCanal: string
}