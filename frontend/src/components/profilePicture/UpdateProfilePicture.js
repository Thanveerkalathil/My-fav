import { useState } from "react";

export default function UpdateProfilePicture({ setImage }) {
  const [discription, setDiscription] = useState("");
  return (
    <div className="postBox update_img">
      <div className="box_header">
        <div className="small_circle" onClick={() => setImage("")}>
          <i className="exit_icon"></i>
        </div>
        <span>Update profile picture</span>
      </div>
      <div className="update_image_desc">
        <textarea
          placeholder="Description"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
          className="textarea_green details_input"
        ></textarea>
      </div>
      <div className="update_center">
        <div className="crooper"></div>
      </div>
    </div>
  );
}
