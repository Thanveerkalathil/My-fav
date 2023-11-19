import { Link } from "react-router-dom";
import {
  acceptRequest,
  cancelRequest,
  deleteRequest,
} from "../../functions/user";
import { useSelector } from "react-redux";

export default function Card({ userr, type, getData }) {
  const { user } = useSelector((state) => ({ ...state }));
  const cancelRequestHandler = async (userId) => {
    const res = await cancelRequest(userId, user.token);
    if (res == "ok") {
      getData();
    }
  };
  const confirmHandler = async (userId) => {
    const res = await acceptRequest(userId, user.token);
    if (res == "ok") {
      getData();
    }
  };
  const deleteHandler = async (userId) => {
    const res = await deleteRequest(userId, user.token);
    if (res == "ok") {
      getData();
    }
  };
  return (
    <div className="req_card">
      <Link to={`/profile/${userr.username}`}>
        <img src={userr.picture} alt="" />
      </Link>
      <div className="req_name">
        {userr.first_name} {userr.last_name}
      </div>
      {type === "sent" ? (
        <button
          className="fav_button"
          onClick={() => cancelRequestHandler(userr._id)}
        >
          Cancel Request
        </button>
      ) : type === "request" ? (
        <>
          <button
            className="fav_button"
            onClick={() => confirmHandler(userr._id)}
          >
            Confirm
          </button>
          <button className="gray_btn" onClick={() => deleteHandler(userr._id)}>
            Delete
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
