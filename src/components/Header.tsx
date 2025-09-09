import "../css/App.css";

interface HeaderNoticeProps {
  onClose: () => void;
}

export default function HeaderNotice({ onClose }: HeaderNoticeProps) {
  return (
    <header id="header">
      <p id="header-p">
        This application is currently still in Pre-Alpha phase
        <button
          className="close-header-btn"
          onClick={onClose}
          aria-label="Close notification"
        >
          ✖
        </button>
      </p>
    </header>
  );
}
