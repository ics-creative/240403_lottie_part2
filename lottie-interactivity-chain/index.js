// クリックしてアニメーションのスピードが上がっていく作例
LottieInteractivity.create({
  player: "#lottie", // lottie-playerに追加したid
  mode: "chain",
  actions: [
    // ループ再生
    {
      state: "loop",
      transition: "click", // クリックした時に次のセグメントへ
      frames: [0, 61],
    },
    // 繋ぎのアニメーション
    {
      state: "autoplay",
      transition: "onComplete", // 指定フレームまでの再生終了後、次のセグメントへ
      frames: [61, 113],
    },
    // ループ再生
    {
      state: "loop",
      transition: "click",
      frames: [113, 174],
      speed: 2, // 倍速に変更してみる
    },
    // 繋ぎのアニメーション
    {
      state: "autoplay",
      transition: "onComplete",
      frames: [174, 217],
      speed: 2,
    },
    {
      state: "loop",
      transition: "click",
      frames: [0, 61],
      speed: 3,
    },
    {
      state: "autoplay",
      transition: "onComplete",
      frames: [61, 100],
      speed: 3,
    },
    {
      state: "loop",
      transition: "click",
      frames: [100, 161],
      speed: 4,
    },
    {
      state: "autoplay",
      transition: "onComplete",
      frames: [161, 217],
      speed: 4,
    },
    {
      state: "loop",
      transition: "click",
      frames: [0, 61],
      speed: 7,
    },
  ],
});
