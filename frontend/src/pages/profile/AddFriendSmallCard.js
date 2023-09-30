export default function AddFriendSmallCard({ item }) {
  return (
    <div className="AddFriendCard">
      <div className="addfriend_imgsamall">
        <img src={item.profile_picture} alt="" />
        <div className="addfriend_infos">
          <div className="addfriend_name">
            {item.profile_name.length > 11
              ? `${item.profile_name.substring(0, 11)}...`
              : item.profile_name}
          </div>
          <div className="light_green_btn">
            <img
              src="../../../icons/addFriend.png"
              alt=""
              className="filter_green"
            />
            Add Friend
          </div>
        </div>
      </div>
    </div>
  );
}
