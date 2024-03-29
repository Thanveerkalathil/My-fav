import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
export default function DisplayAccessibility({ setVisible }) {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector((state) => ({ ...state }));
  const handleDarkThemeChange = (newValue) => {
    Cookies.set("darkTheme", newValue);
    newValue ? dispatch({ type: "DARK" }) : dispatch({ type: "LIGHT" });
  };

  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div
          className="circle hover1"
          onClick={() => {
            setVisible(0);
          }}
        >
          <i className="arrow_back_icon"></i>
        </div>
        Display and Accessibility
      </div>
      <div className="mmenu_main">
        <div className="small_circle" style={{ width: "60px" }}>
          <i className="dark_filled_icon"></i>
        </div>
        <div className="mmenu_col">
          <span className="mmenu_span1">Dark Mode</span>
          <span className="mmenu_span2">
            Adjust the appearance of Facebook to reduce glare and give your eyes
            a break.
          </span>
        </div>
      </div>
      <label
        htmlFor="darkOff"
        className="hover1"
        onClick={() => {
          Cookies.set("darkTheme", false);
          dispatch({ type: "LIGHT" });
        }}
      >
        <span>Off</span>
        <input
          type="radio"
          name="dark"
          id="darkOff"
          checked={!darkTheme}
          onChange={() => handleDarkThemeChange(false)}
        />
      </label>
      <label
        htmlFor="darkOn"
        className="hover1"
        onClick={() => {
          Cookies.set("darkTheme", true);
          dispatch({ type: "DARK" });
        }}
      >
        <span>On</span>
        <input
          type="radio"
          name="dark"
          id="darkOn"
          checked={darkTheme}
          onChange={() => handleDarkThemeChange(true)}
        />
      </label>
      <div className="mmenu_main">
        <div className="small_circle" style={{ width: "50px" }}>
          <i className="compact_icon"></i>
        </div>
        <div className="mmenu_col">
          <span className="mmenu_span1">Compact Mode</span>
          <span className="mmenu_span2">
            Make your font size smaller so that more content can fit on the
            screen.
          </span>
        </div>
      </div>
      <label htmlFor="compactOff" className="hover1">
        <span>Off</span>
        <input type="radio" name="compact" id="compactOff" />
      </label>
      <label htmlFor="compactOn" className="hover1">
        <span>On</span>
        <input type="radio" name="copact" id="compactOn" />
      </label>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="keyboard_icon"></i>
        </div>
        <span>Keyboard</span>
        <div className="rArrow">
          <i className="right_icon"></i>
        </div>
      </div>
    </div>
  );
}
