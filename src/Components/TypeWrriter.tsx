import { useEffect, useState } from "react";

export default function TypeWrriter(porps: { text: string[]; delay: number }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [textNo, setTextNo] = useState(0);

  useEffect(() => {
    if (!reverse) {
      if (currentIndex < porps.text[textNo].length) {
        const timeout = setTimeout(() => {
          setCurrentText(
            (prevText: string) => prevText + porps.text[textNo][currentIndex]
          );
          setCurrentIndex((prevIndex: number) => prevIndex + 1);
        }, porps.delay);

        return () => clearTimeout(timeout);
      }
      if (currentIndex === porps.text[textNo].length) {
        setReverse(true);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText: string) =>
            prevText.substring(0, currentIndex)
          );
          setCurrentIndex((prevIndex: number) => prevIndex - 1);
        }, porps.delay);

        return () => clearTimeout(timeout);
      }
      if (currentIndex === -1) {
        setReverse(false);
        setTextNo(textNo + 1);
        setCurrentIndex(0);
      }
      if (textNo >= porps.text.length - 1) {
        setTextNo(0);
      }
    }
  }, [currentIndex, porps.delay, porps.text, reverse]);

  return <span>{currentText}</span>;
}
