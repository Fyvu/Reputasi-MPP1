import { moods } from "../objects/theme-mood";

export default function MyButton({ Click, Label }) {
  const StoredMood = localStorage.getItem("StoreMood");
  const theme = moods[StoredMood] || moods["Biasa"];

  return (
    <button onClick={Click ? Click : null} className={` ${theme.button}`}>
      {Label || "Button"}
    </button>
  );
}
