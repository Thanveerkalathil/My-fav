import { useState } from "react";
import "./style.css";
import Bio from "./Bio";

export default function Intro({ details, visitor }) {
  const initial = {
    bio: details?.bio ? details.bio : "Welcome to my Profile",
    othername: details?.othername ? details.othername : "",
    job: details?.job ? details.job : "Web developer",
    workplace: details?.workplace ? details.workplace : "",
    highSchool: details?.highSchool ? details.highSchool : "rasheediya",
    collage: details?.collage ? details.collage : "nalanda",
    currentCity: details?.currentCity ? details.currentCity : "melattur",
    hometown: details?.hometown ? details.hometown : "Kerala",
    relationship: details?.relationship ? details.relationship : "Single",
    instagram: details?.instagram ? details.instagram : "thanveer_kalathil",
  };

  const [infos, setInfos] = useState(initial);
  const [showBio, setShowBio] = useState(true);
  const [max, setMax] = useState(infos?.bio ? 100 - infos?.bio.length : 100);
  const handleBioChange = (e) => {
    setInfos({ ...infos, bio: e.target.value });
    setMax(100 - e.target.value.length);
  };
  return (
    <div className="profile_card">
      <div className="profile_card_header">Intro</div>
      {infos.bio && !showBio && (
        <div className="info_col">
          <span className="info_text">{infos.bio}</span>
          {!visitor && (
            <button
              className="gray_btn hover1"
              onClick={() => setShowBio(true)}
            >
              Edit bio
            </button>
          )}
        </div>
      )}
      {showBio && (
        <Bio
          infos={infos}
          max={max}
          handleBioChange={handleBioChange}
          setShowBio={setShowBio}
        />
      )}
      {infos.job && infos.workplace ? (
        <div className="info_profile">
          <img src="../../../icons/job.png" alt="" />
          Work as {infos.job} at <b>{infos.workplace}</b>
        </div>
      ) : infos.job && !infos.workplace ? (
        <div className="info_profile">
          <img src="../../../icons/job.png" alt="" />
          Work as {infos.job}
        </div>
      ) : (
        infos.workplace &&
        !infos.job && (
          <div className="info_profile">
            <img src="../../../icons/job.png" alt="" />
            Work at {infos.workplace}
          </div>
        )
      )}
      {infos.relationship && (
        <div className="info_profile">
          <img src="../../../icons/relationship.png" alt="" />
          {infos.relationship}
        </div>
      )}
      {infos.collage && (
        <div className="info_profile">
          <img src="../../../icons/studies.png" alt="" />
          Studied at {infos.collage}
        </div>
      )}
      {infos.highSchool && (
        <div className="info_profile">
          <img src="../../../icons/studies.png" alt="" />
          Studied at {infos.highSchool}
        </div>
      )}
      {infos.currentCity && (
        <div className="info_profile">
          <img src="../../../icons/home.png" alt="" />
          Lives in {infos.currentCity}
        </div>
      )}
      {infos.hometown && (
        <div className="info_profile">
          <img src="../../../icons/home.png" alt="" />
          From {infos.hometown}
        </div>
      )}
      {infos.instagram && (
        <div className="info_profile">
          <img src="../../../icons/instagram.png" alt="" />
          <a href={`https://instagram.com/${infos.instagram}`} target="blank">
            {infos.instagram}
          </a>
        </div>
      )}
      {!visitor && (
        <button className="gray_btn hover1 w100">Edit Details</button>
      )}
      {!visitor && (
        <button className="gray_btn hover1 w100">Add Hobbies</button>
      )}
      {!visitor && (
        <button className="gray_btn hover1 w100">Add Featured</button>
      )}
    </div>
  );
}
