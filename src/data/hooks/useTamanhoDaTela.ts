import { useState, useEffect } from 'react';

export default function useTamanhoDaTela() {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Adiciona o listener
    window.addEventListener('resize', handleResize);

    // Atualiza imediatamente ao montar
    handleResize();

    // Remove o listener ao desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
