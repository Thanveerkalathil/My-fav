import { useEffect, useReducer } from "react";
import Header from "../../components/header";
import "./style.css";
import { getFriendsPageInfos } from "../../functions/user";
import { useSelector } from "react-redux";
import { friendspage } from "../../functions/reducers";
import Card from "./Card";
export default function Friends() {
  const { user } = useSelector((state) => ({ ...state }));
  const [{ loading, error, data }, dispatch] = useReducer(friendspage, {
    loading: false,
    data: {},
    error: "",
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    dispatch({ type: "FRIENDS_REQUEST" });
    const data = await getFriendsPageInfos(user.token);
    if (data.status === "ok") {
      dispatch({ type: "FRIENDS_SUCCESS", payload: data.data });
    } else {
      dispatch({ type: "FRIENDS_ERROR", payload: data.data });
    }
  };

  return (
    <>
      <Header page="friends" />
      <div className="friends">
        <div className="friends_left">
          <div className="friends_left_header">
            <h3>Friends</h3>
            <div className="small_circle">
              <i className="settings_filled_icon"></i>
            </div>
          </div>
          <div className="friends_left_wrap">
            <div className="mmenu_item hover3 active_friends">
              <div className="small_circle" style={{ background: "#2aaa8a" }}>
                <i className="friends_home_icon invert"></i>
              </div>
              <span>Home</span>
            </div>
            <div className="mmenu_item hover3">
              <div className="small_circle">
                <i className="friends_requests_icon"></i>
              </div>
              <span>Friend Request</span>
              <div className="rArrow">
                <i className="right_icon"></i>
              </div>
            </div>
            <div className="mmenu_item hover3">
              <div className="small_circle">
                <i className="friends_requests_icon"></i>
              </div>
              <span>Sent Request</span>
              <div className="rArrow">
                <i className="right_icon"></i>
              </div>
            </div>
            <div className="mmenu_item hover3">
              <div className="small_circle">
                <i className="friends_suggestions_icon"></i>
              </div>
              <span>Suggestions</span>
              <div className="rArrow">
                <i className="right_icon"></i>
              </div>
            </div>
            <div className="mmenu_item hover3">
              <div className="small_circle">
                <i className="all_friends_icon"></i>
              </div>
              <span>All Friends</span>
              <div className="rArrow">
                <i className="right_icon"></i>
              </div>
            </div>
            <div className="mmenu_item hover3">
              <div className="small_circle">
                <i className="birthdays_icon"></i>
              </div>
              <span>Birthdays</span>
              <div className="rArrow">
                <i className="right_icon"></i>
              </div>
            </div>
            <div className="mmenu_item hover3">
              <div className="small_circle">
                <i className="all_friends_icon"></i>
              </div>
              <span>Custom List</span>
              <div className="rArrow">
                <i className="right_icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="friends_right">
          <div className="friends_right_wrap">
            <div className="friends_left_header">
              <h3>Friend Requests</h3>
              <a className="see_link hover3">See all</a>
            </div>
            <div className="flex_wrap">
              {data.requests &&
                data.requests.map((user) => (
                  <Card user={user} key={user._id} type="request" />
                ))}
            </div>
          </div>
          <div className="friends_right_wrap">
            <div className="friends_left_header">
              <h3>Sent Requests</h3>
              <a className="see_link hover3">See all</a>
            </div>
            <div className="flex_wrap">
              {data.sentRequests &&
                data.sentRequests.map((user) => (
                  <Card user={user} key={user._id} type="sent" />
                ))}
            </div>
          </div>
          <div className="friends_right_wrap">
            <div className="friends_left_header">
              <h3>Friends</h3>
              <a className="see_link hover3">See all</a>
            </div>
            <div className="flex_wrap">
              {data.friends &&
                data.friends.map((user) => (
                  <Card user={user} key={user._id} type="friends" />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
