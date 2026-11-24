(() => {
  "use strict";

  const questions = [
    {
      cards: [
        { name: "いぬ", file: "01_dog.png" },
        { name: "ねこ", file: "02_cat.png" },
        { name: "うま", file: "03_horse.png" },
        { name: "すずめ", file: "04_sparrow.png" }
      ],
      intro: "ちがう いきものは<br>どれでしょう？",
      correctCard: 4
    },
    {
      cards: [
        { name: "りんご", file: "01_apple.png" },
        { name: "みかん", file: "02_orange.png" },
        { name: "ばなな", file: "03_banana.png" },
        { name: "にんじん", file: "04_carrot.png" }
      ],
      intro: "ちがう たべものは<br>どれでしょう？",
      correctCard: 4,
      explanation: "りんご・みかん・ばななは くだもの、にんじんは やさいです"
    },
    {
      cards: [
        { name: "じどうしゃ", file: "01_car.png" },
        { name: "しんかんせん", file: "02_shinkansen.png" },
        { name: "ひこうき", file: "03_airplane.png" },
        { name: "じてんしゃ", file: "04_bicycle.png" }
      ],
      intro: "ちがう のりものは<br>どれでしょう？",
      correctCard: 4,
      explanation: "ほかの のりものは エンジンで うごきますが、じてんしゃは ひとが こいで すすみます"
    },
    {
      cards: [
        { name: "ぞう", file: "01_elephant.png" },
        { name: "うし", file: "02_cow.png" },
        { name: "ぱんだ", file: "03_panda.png" },
        { name: "ぺんぎん", file: "04_penguin.png" }
      ],
      intro: "ちがう なかまは<br>どれでしょう？",
      correctCard: 4,
      explanation: "ぞう・うし・ぱんだは けものの なかま、ぺんぎんは とりです"
    },
    {
      cards: [
        { name: "ほうちょう", file: "01_knife.png" },
        { name: "まないた", file: "02_cutting_board.png" },
        { name: "ふらいぱん", file: "03_frying_pan.png" },
        { name: "ほうき", file: "04_broom.png" }
      ],
      intro: "ちがう どうぐは<br>どれでしょう？",
      correctCard: 4,
      explanation: "ほうちょう・まないた・ふらいぱんは りょうりの どうぐ、ほうきは そうじの どうぐです"
    },
    {
      cards: [
        { name: "こたつ", file: "01_kotatsu.png" },
        { name: "せんぷうき", file: "02_electric_fan.png" },
        { name: "せきゆすとーぶ", file: "03_kerosene_stove.png" },
        { name: "ひばち", file: "04_hibachi.png" }
      ],
      intro: "ちがう どうぐは<br>どれでしょう？",
      correctCard: 2,
      explanation: "こたつ・せきゆすとーぶ・ひばちは あたためる どうぐ、せんぷうきは かぜを おくる どうぐです"
    },
    {
      cards: [
        { name: "たうえ", file: "01_rice_planting.png" },
        { name: "いねかり", file: "02_rice_harvesting.png" },
        { name: "だっこく", file: "03_threshing.png" },
        { name: "さかなつり", file: "04_fishing.png" }
      ],
      intro: "ちがう さぎょうは<br>どれでしょう？",
      correctCard: 4,
      explanation: "たうえ・いねかり・だっこくは こめづくりの さぎょう、さかなつりは ちがいます"
    },
    {
      cards: [
        { name: "ちゃわん", file: "01_rice_bowl.png" },
        { name: "ゆのみ", file: "02_teacup.png" },
        { name: "きゅうす", file: "03_teapot.png" },
        { name: "まくら", file: "04_pillow.png" }
      ],
      intro: "ちがう どうぐは<br>どれでしょう？",
      correctCard: 4,
      explanation: "ちゃわん・ゆのみ・きゅうすは しょっき、まくらは ねるときに つかうものです"
    },
    {
      cards: [
        { name: "はる", file: "01_spring.png" },
        { name: "なつ", file: "02_summer.png" },
        { name: "あき", file: "03_autumn.png" },
        { name: "しょうがつ", file: "04_new_year.png" }
      ],
      intro: "ちがう きせつは<br>どれでしょう？",
      correctCard: 4,
      explanation: "はる・なつ・あきは きせつ、しょうがつは としの はじめの ぎょうじです"
    },
    {
      cards: [
        { name: "らじお", file: "01_radio.png" },
        { name: "れいぞうこ", file: "02_refrigerator.png" },
        { name: "ぶらうんかんてれび", file: "03_crt_television.png" },
        { name: "ちくおんき", file: "04_gramophone.png" }
      ],
      intro: "ちがう きかいは<br>どれでしょう？",
      correctCard: 2,
      explanation: "らじお・ぶらうんかんてれび・ちくおんきは おとを きく きかい、れいぞうこは たべものを ひやします"
    },
    {
      cards: [
        { name: "かまど", file: "01_kamado.png" },
        { name: "しちりん", file: "02_hibachi_grill.png" },
        { name: "でんしれんじ", file: "03_microwave.png" },
        { name: "ひばち", file: "04_hibachi.png" }
      ],
      intro: "ちがう どうぐは<br>どれでしょう？",
      correctCard: 3,
      explanation: "かまど・しちりん・ひばちは すみや まきで あたためますが、でんしれんじは でんきで あたためます"
    },
    {
      cards: [
        { name: "そろばん", file: "01_abacus.png" },
        { name: "けいさんじゃく", file: "02_slide_rule.png" },
        { name: "でんたく", file: "03_calculator.png" },
        { name: "ものさし", file: "04_ruler.png" }
      ],
      intro: "ちがう どうぐは<br>どれでしょう？",
      correctCard: 4,
      explanation: "そろばん・けいさんじゃく・でんたくは けいさんの どうぐ、ものさしは ながさを はかる どうぐです"
    },
    {
      cards: [
        { name: "つばめ", file: "01_swallow.png" },
        { name: "ぺんぎん", file: "02_penguin.png" },
        { name: "うぐいす", file: "03_uguisu.png" },
        { name: "ひばり", file: "04_skylark.png" }
      ],
      intro: "ちがう とりは<br>どれでしょう？",
      correctCard: 2,
      explanation: "つばめ・うぐいす・ひばりは そらを とびますが、ぺんぎんは そらを とべません"
    },
    {
      cards: [
        { name: "しゃみせん", file: "01_shamisen.png" },
        { name: "こと", file: "02_koto.png" },
        { name: "たいこ", file: "03_taiko_drum.png" },
        { name: "びわ", file: "04_biwa.png" }
      ],
      intro: "ちがう がっきは<br>どれでしょう？",
      correctCard: 3,
      explanation: "しゃみせん・こと・びわは いとを はじいて ならす がっき、たいこは たたいて ならす がっきです"
    },
    {
      cards: [
        { name: "てこぎぼーと", file: "01_rowboat.png" },
        { name: "よっと", file: "02_sailboat.png" },
        { name: "へりこぷたー", file: "03_helicopter.png" },
        { name: "おおがたきゃくせん", file: "04_cruise_ship.png" }
      ],
      intro: "ちがう のりものは<br>どれでしょう？",
      correctCard: 3,
      explanation: "てこぎぼーと・よっと・おおがたきゃくせんは みずの うえを すすみますが、へりこぷたーは そらを とびます"
    }
  ];
  const answerSymbols = ["", "①", "②", "③", "④"];
  const gapMs = 2000;
  let questionIndex = 0;
  let attempt = 0;
  let timers = [];
  let animationToken = 0;
  const introAudio = new Audio("audio/intro.wav");
  const endingAudio = new Audio("audio/ending.wav");

  function stopAllAudio() {
    [introAudio, endingAudio].forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  }

  function shuffle(values) {
    const shuffled = [...values];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const other = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
    }
    return shuffled;
  }

  function makeOrder(correctCard, correctNumber) {
    const order = shuffle([1, 2, 3, 4]);
    const oldPosition = order.indexOf(correctCard);
    [order[correctNumber - 1], order[oldPosition]] =
      [order[oldPosition], order[correctNumber - 1]];
    return order;
  }

  // Randomize each pass on every page load. The first two questions use four
  // distinct positions; later questions still always differ between their passes.
  const firstTwoQuestionNumbers = shuffle([1, 2, 3, 4]);
  questions.forEach((question, index) => {
    let firstNumber;
    let retryNumber;
    if (index < 2) {
      firstNumber = firstTwoQuestionNumbers[index * 2];
      retryNumber = firstTwoQuestionNumbers[index * 2 + 1];
    } else {
      firstNumber = Math.floor(Math.random() * 4) + 1;
      const retryChoices = [1, 2, 3, 4].filter((number) => number !== firstNumber);
      retryNumber = retryChoices[Math.floor(Math.random() * retryChoices.length)];
    }
    question.firstPassOrder = makeOrder(question.correctCard, firstNumber);
    question.retryOrder = makeOrder(question.correctCard, retryNumber);
  });

  const questionParameter = new URLSearchParams(window.location.search).get("question");
  const parsedQuestionNumber = Number(questionParameter);
  const hasDirectStart = questionParameter !== null
    && /^\d+$/.test(questionParameter)
    && parsedQuestionNumber >= 1
    && parsedQuestionNumber <= questions.length;
  const initialQuestionIndex = hasDirectStart ? parsedQuestionNumber - 1 : 0;
  const finalQuestionIndex = hasDirectStart ? initialQuestionIndex : questions.length - 1;

  const currentQuestion = () => questions[questionIndex];
  const currentCards = () => currentQuestion().cards.map((card) => ({
    ...card,
    src: `images/parts/set${String(questionIndex + 1).padStart(2, "0")}/${card.file}`
  }));
  const currentOrder = () => attempt === 0
    ? currentQuestion().firstPassOrder
    : currentQuestion().retryOrder;
  const currentCorrectNumber = () =>
    currentOrder().indexOf(currentQuestion().correctCard) + 1;

  const screens = {
    welcome: document.querySelector("#welcome"),
    motion: document.querySelector("#motion-screen"),
    answer: document.querySelector("#answer-screen"),
    reveal: document.querySelector("#reveal-screen"),
    finish: document.querySelector("#finish-screen")
  };
  const movingCard = document.querySelector("#moving-card");
  const movingImage = document.querySelector("#moving-image");
  const motionMessage = document.querySelector("#motion-message");
  const actions = document.querySelector("#staff-actions");
  const status = document.querySelector("#staff-status");
  const difficulty = document.querySelector("#difficulty");
  const answerTitle = document.querySelector("#answer-title");
  const answerHint = document.querySelector("#answer-hint");
  const resultTitle = document.querySelector("#result-title");
  const resultDetail = document.querySelector("#result-detail");
  const revealGrid = document.querySelector("#reveal-grid");
  const questionCount = document.querySelector("#question-count");
  const welcomeTitle = document.querySelector("#welcome-title");
  const welcomeSubtitle = document.querySelector("#welcome-subtitle");
  const finishGreeting = document.querySelector("#finish-greeting");
  const finishTitle = document.querySelector("#finish-title");
  const finishSubtitle = document.querySelector("#finish-subtitle");
  const finishClosing = document.querySelector("#finish-closing");

  // intro.wav: 最初の問題開始時（startQuestion の冒頭）に再生
  // ending.wav: 全問終了後の finish 画面（showFinish）で再生
  function cancelTimers() {
    timers.forEach(window.clearTimeout);
    timers = [];
    animationToken += 1;
  }

  function later(callback, delay) {
    const timer = window.setTimeout(callback, delay);
    timers.push(timer);
    return timer;
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, element]) => {
      element.hidden = key !== name;
    });
  }

  function setActions(buttons) {
    actions.replaceChildren(...buttons);
  }

  function makeButton(label, className, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `button ${className}`;
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  function makeAnswerButtons() {
    setActions([1, 2, 3, 4].map((number) =>
      makeButton(`${number}ばん`, "button-number", () => submitAnswer(number))
    ));
  }

  function updateQuestionHeader(index) {
    const fullWidthNumbers = ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９", "１０", "１１", "１２", "１３", "１４", "１５"];
    questionCount.textContent = `だい${fullWidthNumbers[index + 1]}もん`;
    welcomeTitle.innerHTML = questions[index].intro;
    welcomeSubtitle.textContent = "４まいの えを よくみてください";
  }

  // intro.wav を再生し、終了後（またはタイムアウト後）に「はじめる」ボタンを表示する
  // タイムアウトは安全策：音声が読み込めなかった場合でもゲームが止まらない
  const INTRO_TIMEOUT_MS = 30000; // 最大30秒待機

  function launchGame() {
    cancelTimers();
    stopAllAudio();
    updateQuestionHeader(initialQuestionIndex);
    setActions([]); // ボタンを無効化して二重押しを防ぐ
    status.textContent = "いまから はじめます…";

    // intro.wav 終了後に「はじめる」ボタンを表示する
    function showStartButton() {
      setActions([
        makeButton("はじめる", "button-primary", beginAfterDelay)
      ]);
      status.textContent = "スタッフが「はじめる」をおしてください";
    }

    // 「はじめる」押下後、2秒待ってから第一問を開始する
    function beginAfterDelay() {
      setActions([]);
      status.textContent = "えを よくみてください";
      later(() => startQuestion(initialQuestionIndex), 2000);
    }

    // タイムアウトフォールバック：音声が終わらなくても必ず「はじめる」ボタンを出す
    const timeoutId = window.setTimeout(showStartButton, INTRO_TIMEOUT_MS);

    // 音声終了イベントで「はじめる」ボタンを表示
    introAudio.addEventListener("ended", function onEnded() {
      introAudio.removeEventListener("ended", onEnded);
      window.clearTimeout(timeoutId);
      showStartButton();
    }, { once: true });

    // 音声再生失敗時もすぐに「はじめる」ボタンを出す（ブラウザ制限・ファイルエラーなど）
    introAudio.play().catch(() => {
      window.clearTimeout(timeoutId);
      showStartButton();
    });
  }

  function startQuestion(index) {
    cancelTimers();
    stopAllAudio();
    questionIndex = index;
    attempt = 0;
    updateQuestionHeader(questionIndex);
    answerTitle.textContent = "ちがうのは なんばんめ？";
    answerHint.textContent = "こたえを くちで おしえてください";
    status.textContent = "えを よくみてください";
    beginSequence(currentQuestion().firstPassOrder, "right");
  }

  function beginSequence(order, direction, message = "") {
    cancelTimers();
    showScreen("motion");
    motionMessage.textContent = message;
    motionMessage.hidden = !message;
    setActions([]);
    const token = animationToken;
    const duration = Number(difficulty.value);
    const cardWidth = () => movingCard.getBoundingClientRect().width;
    const cards = currentCards();

    function play(index) {
      if (token !== animationToken) return;
      if (index >= order.length) {
        showAnswer();
        return;
      }

      const card = cards[order[index] - 1];
      movingImage.src = card.src;
      movingImage.alt = "";
      movingCard.style.transition = "none";
      movingCard.style.left = direction === "right"
        ? `${window.innerWidth}px`
        : `${-cardWidth()}px`;
      void movingCard.offsetWidth;
      const destination = direction === "right"
        ? -cardWidth()
        : window.innerWidth;
      movingCard.style.transition = `left ${duration}ms linear`;
      movingCard.style.left = `${destination}px`;

      later(() => {
        if (token !== animationToken) return;
        if (index === order.length - 1) {
          showAnswer();
          return;
        }
        later(() => play(index + 1), gapMs);
      }, duration);
    }

    play(0);
  }

  function showAnswer() {
    answerTitle.textContent = "ちがうのは なんばんめ？";
    answerHint.textContent = attempt === 0
      ? "こたえを くちで おしえてください"
      : "もういちど こたえを くちで おしえてください";
    showScreen("answer");
    makeAnswerButtons();
    status.textContent = attempt === 0
      ? "スタッフが こたえのばんごうを えらんでください"
      : "もういちど こたえを えらんでください";
  }

  function submitAnswer(number) {
    cancelTimers();
    if (number === currentCorrectNumber()) {
      revealAnswer(true, false);
      return;
    }

    attempt += 1;
    if (attempt === 1) {
      status.textContent = "もういちど えを みてください";
      beginSequence(currentQuestion().retryOrder, "left", "もういちど、よくみてください");
      return;
    }
    revealAnswer(false, true);
  }

  function revealAnswer(correct, showSolution) {
    showScreen("reveal");
    const displayOrder = currentOrder();
    const correctNumber = currentCorrectNumber();
    const correctName = currentQuestion().cards[currentQuestion().correctCard - 1].name;
    resultTitle.textContent = correct
      ? "せいかい！"
      : `ざんねん！\nこたえは${answerSymbols[correctNumber]}の${correctName}です`;
    resultTitle.classList.toggle("is-wrong", !correct);
    resultDetail.textContent = correct
      ? "どうして ちがうのか、みんなで はなしましょう"
      : currentQuestion().explanation;
    revealGrid.replaceChildren();

    const cards = currentCards();
    displayOrder.forEach((cardNumber, index) => {
      const card = cards[cardNumber - 1];
      const tile = document.createElement("div");
      tile.className = `reveal-card${cardNumber === currentQuestion().correctCard ? " is-answer" : ""}`;
      const image = document.createElement("img");
      image.src = card.src;
      image.alt = card.name;
      const label = document.createElement("span");
      label.className = "reveal-number";
      label.textContent = `${index + 1}ばん`;
      tile.append(image, label);
      revealGrid.append(tile);
    });

    if (correct || showSolution) {
      status.textContent = correct
        ? "みんなで はなしあってください"
        : "こたえを かくにんして、はなしあいましょう";
      setActions([
        makeButton("つぎへ", "button-next", advanceQuestion)
      ]);
    }
  }

  function advanceQuestion() {
    if (questionIndex < finalQuestionIndex) {
      startQuestion(questionIndex + 1);
      return;
    }
    showFinish();
  }

  function showFinish() {
    cancelTimers();
    stopAllAudio();
    showScreen("finish");
    const fullWidthNumbers = ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９", "１０", "１１", "１２", "１３", "１４", "１５"];
    const isLastQuestion = questionIndex === questions.length - 1;
    if (isLastQuestion) {
      endingAudio.play().catch(() => {});
    }
    finishGreeting.textContent = isLastQuestion
      ? "みなさん、さいごまでご参加ありがとうございました！"
      : "おつかれさまでした";
    finishTitle.innerHTML = isLastQuestion
      ? "たくさん考えて、<br>たくさん気づけましたね。"
      : `だい${fullWidthNumbers[questionIndex + 1]}もんの<br>かくにんは ここまでです`;
    finishSubtitle.textContent = isLastQuestion
      ? "これからも、みなさん元気で楽しい毎日をお過ごしください。"
      : "このもんだいの かくにんは おわりです";
    finishClosing.textContent = isLastQuestion ? "またいっしょに遊びましょう！" : "";
    status.textContent = `だい${fullWidthNumbers[questionIndex + 1]}もんは おわりです`;
    setActions([
      makeButton("もういちど あそぶ", "button-primary", launchGame)
    ]);
  }

  document.querySelector("#start-button").addEventListener("click", launchGame);
  updateQuestionHeader(initialQuestionIndex);
  window.addEventListener("resize", () => {
    if (!screens.motion.hidden) movingCard.style.transition = "none";
  });
})();
