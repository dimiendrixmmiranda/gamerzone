"use client";
import { useState, useRef } from "react";
import { AiFillSound } from "react-icons/ai";

interface LerPorVozProps{
    texto: string
}

export default function LerPorVoz({ texto }: LerPorVozProps) {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

    const toggleSpeak = () => {
        // Se não estiver falando nada → iniciar leitura
        if (!isSpeaking && !isPaused) {
            window.speechSynthesis.cancel();

            const utter = new SpeechSynthesisUtterance(texto);
            utter.lang = "pt-BR";
            utter.rate = 1;
            utter.pitch = 1;

            utter.onstart = () => {
                setIsSpeaking(true);
                setIsPaused(false);
            };

            utter.onend = () => {
                setIsSpeaking(false);
                setIsPaused(false);
            };

            utterRef.current = utter;
            window.speechSynthesis.speak(utter);
            return;
        }

        // Se está falando → pausar
        if (isSpeaking && !isPaused) {
            window.speechSynthesis.pause();
            setIsPaused(true);
            setIsSpeaking(false);
            return;
        }

        // Se está pausado → retomar
        if (isPaused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
            setIsSpeaking(true);
        }
    };

    return (
        <button
            onClick={toggleSpeak}
            className="p-2 rounded-full hover:scale-110 transition-all text-black flex items-center gap-2 border-2 border-black"
            title={
                !isSpeaking && !isPaused ? "Ler texto" :
                isSpeaking ? "Pausar" : "Continuar leitura"
            }
        >
            <AiFillSound size={22} />
            <p>De Play da Notícia!</p>
        </button>
    );
}
