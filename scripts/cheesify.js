function cheesify() {
  document.querySelectorAll("img").forEach((image) => {
    image.src =
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    image.srcset = image.src;
  });
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message === "cheesify") {
    cheesify();
  }
});
