document.addEventListener("DOMContentLoaded", () => {
  LottieInteractivity.create({
    player: "#lottie", // lottie-playerに追加したid
    mode: "cursor", // マウスイベント
    actions: [
      {
        type: "click", // クリック
        forceFlag: false, // 再生完了を待つ
      },
    ],
  });
});
