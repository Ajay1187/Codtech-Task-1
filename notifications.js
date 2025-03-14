// notifications.js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    document.title = "New message!";
  } else {
    document.title = "Real-Time Chat App";
  }
});
