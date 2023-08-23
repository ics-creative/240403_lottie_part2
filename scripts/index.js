document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#search-button");
  const player = document.querySelector("#lottie-search");
  const result = document.querySelector("#search-result");

  const anim = lottie.loadAnimation({
    container: player,
    renderer: 'svg', // 描画形式
    path: '/lottie/search-anim.json', // jsonのパス
    autoplay: false, // 自動再生するか
  });
  anim.setSpeed(1.8); // 少し早めのスピードに変更

  button.addEventListener("click", () => {
    onSearch(anim, result);
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
      onSearch(anim, result);
    }
  })
})

const onSearch = (anim, result) => {
  anim.play();
  result.classList.add("isLoading");

  setTimeout(() => {
    anim.stop();
    result.classList.remove("isLoading");
  }, 2000)
}
