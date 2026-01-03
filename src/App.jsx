import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { moods } from "./objects/theme-mood";
import PageAnimated from "./pages/PageAnimated";

function App() {
  const [currentMood, setCurrentMood] = useState("Biasa");
  const theme = moods[currentMood] || moods["Biasa"];

  useEffect(() => {
    const StoredMood = localStorage.getItem("StoreMood");
    if (StoredMood) {
      setCurrentMood(StoredMood);
    }
  }, []);

  useEffect(() => {
    document.body.classList.add(...theme.color.split(" "));

    return () => {
      document.body.classList.remove(...theme.color.split(" "));
    };
  }, [theme]);

  return (
    <div className={`h-screen ${theme.color} ${theme.font}`}>
      <BrowserRouter>
        <PageAnimated onSelectMood={setCurrentMood} />
      </BrowserRouter>
    </div>
  );
}

export default App;
