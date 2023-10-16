import { useState } from "react";
import Bio from "./Bio";

export default function Detail({ header, value, img, placeholder, name }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className="details_header">{header}</div>
      <div className="add_details_flex no_underline">
        {value ? (
          <div className="info_profile">
            <img src={`../../../icons/${img}.png`} alt="" />
            {value}
            <i className="edit_icon"></i>
          </div>
        ) : (
          <>
            <i className="rounded_plus_icon"></i>
            Add {header}
          </>
        )}
      </div>
      {show && <Bio placeholder={placeholder} name={name} />}
    </div>
  );
}
