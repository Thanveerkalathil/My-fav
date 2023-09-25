import { useState } from "react";
import MenuItems from "./MenuItems";

export default function PostMenu({ userId, postUserId, imagesLength }) {
  const [test, setTest] = useState(userId === postUserId ? true : false);
  return (
    <ul className="post_menu">
      {test && <MenuItems icon="pin_icon" title="Pin Post" />}
      <MenuItems
        icon="save_icon"
        title="Save Post"
        subtitle="Add this to your saved items."
      />
      <div className="line"></div>
      {test && <MenuItems icon="edit_icon" title="Edit Post" />}
      {imagesLength && <MenuItems icon="download_icon" title="Download Post" />}
      {imagesLength && (
        <MenuItems icon="fullscreen_icon" title="Enter Fullscreen" />
      )}
      {test && (
        <MenuItems img="../../../icons/lock.png" title="Edit audience" />
      )}
      {test && (
        <MenuItems
          icon="turnOffNotifications_icon"
          title="Turn off notifications from this post"
        />
      )}
      {test && (
        <MenuItems
          icon="delete_icon"
          title="Turn off translations"
        />
      )}
    </ul>
  );
}
