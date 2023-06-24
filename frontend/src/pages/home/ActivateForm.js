import HashLoader from "react-spinners/HashLoader";

export default function qActivateForm({ type, header, text, loading }) {
  return (
    <div className="blur">
      <div className="popup">
        <div
          className={`popup_header ${
            type === "success" ? "success_text" : "error_text"
          }`}
        >
          {header}
        </div>
        <div className="popup_message">{text}</div>
        <HashLoader className="hash-loader" color="#2AAA8A" size={50} loading={loading} />
      </div>
    </div>
  );
}
