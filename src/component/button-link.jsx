import { Link } from "react-router-dom";
import { moods } from "../objects/theme-mood";

export default function ButtonLink({ link, Label, Click }) {
  const StoredMood = localStorage.getItem("StoreMood");
  const theme = moods[StoredMood] || moods["Biasa"];

  return (
    <Link to={link ? link : "/"}>
      <button onClick={Click ? Click : null} className={`${theme.button}`}>
        {Label || "Button"}
      </button>
    </Link>
  );
}
