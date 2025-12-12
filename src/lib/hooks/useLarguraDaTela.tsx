import { useEffect, useState } from "react";

export default function useLarguraDaTela() {
    const [larguraDaTela, setLarguraDaTela] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize() {
            setLarguraDaTela({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Executa no mount
        handleResize();

        // Listener
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return larguraDaTela;
}
