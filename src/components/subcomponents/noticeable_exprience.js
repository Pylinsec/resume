import react from "react";
import { NoticeableExperiences } from "../json/social";
export default function Noticeable_experiences() {
  return (
    <div>
      {NoticeableExperiences.map(item => (
        <div className="flex flex-col items-start">
          <h5>{item}</h5>
        </div>
      ))}
    </div>
  );
}
