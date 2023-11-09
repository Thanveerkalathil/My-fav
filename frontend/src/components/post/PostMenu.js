import { useRef, useState } from "react";
import MenuItems from "./MenuItems";
import useOnClickOutside from "../../helpers/clickOutside";
import { savePost } from "../../functions/post";
import { useEffect } from "react";
import { saveAs } from "file-saver";

export default function PostMenu({
  userId,
  postUserId,
  imagesLength,
  setShowMenu,
  postId,
  token,
  checkSaved,
  setCheckSaved,
  images,
}) {
  const [test, setTest] = useState(postUserId === userId ? true : false);
  const menu = useRef(null);
  useOnClickOutside(menu, () => setShowMenu(false));
  const saveHandler = () => {
    savePost(postId, token);
    if (checkSaved) {
      setCheckSaved(false);
    } else {
      setCheckSaved(true);
    }
  };
  const downloadImages = async () => {
    images.map((img) => {
      saveAs(img.url, "imageM#fdownload.jpg");
    });
  };

  return (
    <ul className="post_menu" ref={menu}>
      {test && <MenuItems icon="pin_icon" title="Pin Post" />}
      <div onClick={() => saveHandler()}>
        {checkSaved ? (
          <MenuItems
            icon="save_icon"
            title="Unsave Post"
            subtitle="Remove this from your saved items."
          />
        ) : (
          <MenuItems
            icon="save_icon"
            title="Save Post"
            subtitle="Add this to your saved items."
          />
        )}
      </div>
      <div className="line"></div>
      {test && <MenuItems icon="edit_icon" title="Edit Post" />}
      {!test && (
        <MenuItems
          icon="turnOnNotification_icon"
          title="Turn on notification for this post"
        />
      )}
      {imagesLength && (
        <div onClick={() => downloadImages()}>
          <MenuItems icon="download_icon" title="Download Post" />
        </div>
      )}
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
      {test && <MenuItems icon="delete_icon" title="Turn off translations" />}
      {test && <MenuItems icon="date_icon" title="Edit date" />}
      {test && (
        <MenuItems icon="refresh_icon" title="Refresh share attachment" />
      )}
      {test && <MenuItems icon="archive_icon" title="Move to archive" />}
      {test && <MenuItems icon="archive_icon" title="Move to archive" />}
      {test && (
        <MenuItems
          icon="trash_icon"
          title="Move to trash"
          subtitle="Items in your trash are deleted after 30 days"
        />
      )}
      {!test && <div className="line"></div>}
      {!test && (
        <MenuItems
          img="../../../icons/report.png"
          title="Report post"
          subtitle="I'm concerned about this post"
        />
      )}
    </ul>
  );
}
