export default function Bio({ infos, handleBioChange, max, setShowBio }) {
  return (
    <div className="add_bio_wrap">
      <textarea
        placeholder="Add Bio"
        name="bio"
        value={infos?.bio}
        maxLength="100"
        className="textarea_green details_input"
        onChange={handleBioChange}
      ></textarea>
      <div className="remaining">{max}Charecter remaining</div>
      <div className="flex">
        <div className="flex flex_left">
          <i className="public_icon"></i>Public
        </div>
        <div className="flex flex_right">
          <button className="gray_btn" onClick={() => setShowBio(false)}>
            Cancel
          </button>
          <button className="fav_button">Save</button>
        </div>
      </div>
    </div>
  );
}
