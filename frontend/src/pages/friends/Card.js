import { Link } from "react-router-dom";

export default function Card({ user, type }) {
  console.log(user);
  return (
    <div className="req_card">
      <Link to={`/profile/${user.username}`}>
        <img src={user.picture} alt="" />
      </Link>
      <div className="req_name">
        {user.first_name} {user.last_name}
      </div>
      {type === "sent" ? (
        <button className="fav_button">Cancel Request</button>
      ) : type === "request" ? (
        <>
          <button className="fav_button">Confirm</button>
          <button className="gray_btn">Delete</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
