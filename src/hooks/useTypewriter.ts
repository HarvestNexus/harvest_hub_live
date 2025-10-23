
import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 80) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    setTypedText("");

    const interval = setInterval(() => {
      setTypedText((prev) => {
        const nextChar = text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
        return prev + nextChar;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return typedText;
}
