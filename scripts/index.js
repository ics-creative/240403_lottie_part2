document.addEventListener("DOMContentLoaded", () => {
  const textBox = document.querySelector("#search-text");
  const button = document.querySelector("#search-button");
  const player = document.querySelector("#lottie-search");
  const result = document.querySelector("#search-result");

  const anim = lottie.loadAnimation({
    container: player,
    renderer: "svg", // 描画形式
    path: "/lottie/search-anim.json", // jsonのパス
    autoplay: false, // 自動再生するか
  });
  anim.setSpeed(1.8); // 少し早めのスピードに変更

  const validate = () => {
    const validForm = document.querySelector("form:valid");
    button.disabled = validForm === null;
  };
  validate();
  textBox.addEventListener("input", validate);

  button.addEventListener("click", async (e) => {
    e.preventDefault();
    await onSearch(anim, result);
  });

  document.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      await onSearch(anim, result);
    }
  });
});

const onSearch = async (anim, result) => {
  const statusText = document.querySelector("#search-status");
  anim.play();
  result.classList.add("isLoading");
  statusText.innerText="検索中";

  await delay(2000);

  anim.stop();
  result.classList.remove("isLoading");
  statusText.innerText="結果";
};

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
