import react from "react";
import { language } from "../json/social";
export default function Language() {
  return (
    <div>
      {language.map(lan => (
        <div className="flex flex-col items-start">
          <h5>{lan}</h5>
        </div>
      ))}
    </div>
  );
}
