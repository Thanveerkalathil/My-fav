import LeftLink from "./LeftLink";
import "./style.css";
import { left } from "../../../data/home";

export default function LeftHome({ user }) {
  return (
    <div className="left_home">
      <div className="left_link">
        <img src={user?.picture} alt="" />
        <span>
          {user?.first_name}
          {user.last_name}
        </span>
      </div>
      {left.slice(0, 8).map((link, i) => (
        <LeftLink key={i} img={link.img} text={link.text} notification={link.notification}/>
      ))}
    </div>
  );
}
