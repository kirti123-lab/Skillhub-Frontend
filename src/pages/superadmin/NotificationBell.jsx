import { useEffect, useState } from "react";

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("skillhub-backend-production-e6ee.up.railway.app/api/user-announcements")
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setOpen(false);

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* Bell Icon */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        style={{ cursor: "pointer", fontSize: "22px" }}
      >
        🔔
      </div>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            background: "white",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            width: "280px",
            padding: "10px",
            zIndex: 10,
          }}
        >
          {notifications.length === 0 ? (
            <p>No announcements</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                style={{
                  padding: "8px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <strong>{n.title}</strong>
                <p style={{ fontSize: "13px" }}>{n.message}</p>
                <small style={{ color: "#777" }}>
                  {n.createdAt?.toDate
                    ? n.createdAt.toDate().toLocaleString()
                    : ""}
                </small>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;