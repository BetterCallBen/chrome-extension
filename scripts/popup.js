function sendCheesifyMsg() {
  console.log("j'ai appellé ma fonction");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, "cheesify");
  });
}

const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", () => {
  sendCheesifyMsg();
});
