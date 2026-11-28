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
        { name: "ばす", file: "03_bus.png" },
        { name: "じてんしゃ", file: "04_bicycle.png" }
      ],
      intro: "ちがう のりものは<br>どれでしょう？",
      correctCard: 4,
      explanation: "ほかの のりものは でんきや エンジンで うごきますが、じてんしゃは ひとが こいで すすみます"
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
  let still = true; // true：4まいを とまったまま いっぺんに見せる
  const introAudio = new Audio("audio/intro.wav");
  const endingAudio = new Audio("audio/ending.wav");

  // ---- 口パク（声の大きさを測って、4枚の画像を切りかえる） ----
  const CH = { close: "chara_close.jpg", half: "chara_half.jpg", open: "chara_open.jpg", blink: "chara_blink.jpg" };
  Object.values(CH).forEach((src) => { const im = new Image(); im.src = src; });
  const LIP_OPEN = 140, LIP_HALF = 60; // しきい値（声の大きさ。あとで調整できる）
  let lipCtx = null, lipAn = null, lipTimer = null, blinkTimer = null, blinking = false, lipAudio = null;
  const lipSrc = new WeakMap();
  function setChara(key) { document.querySelectorAll(".charaimg").forEach((im) => { im.src = CH[key]; }); }
  function lipEnsureCtx() {
    // 声の解析は、インターネット上（https）だけで使える。パソコン内のファイルを直接開いたときは、簡易の口パク。
    if (lipCtx || !/^https?:$/.test(location.protocol)) return;
    try {
      lipCtx = new (window.AudioContext || window.webkitAudioContext)();
      lipAn = lipCtx.createAnalyser(); lipAn.fftSize = 256; lipAn.smoothingTimeConstant = 0.3;
      lipAn.connect(lipCtx.destination);
    } catch (e) { lipCtx = null; lipAn = null; }
  }
  function lipStart(audio, canCreate) {
    lipStop(); lipAudio = audio;
    if (canCreate) lipEnsureCtx(); // 「あいさつ」ボタンを押した直後だけ作る（ブラウザの決まり）
    let useAn = false;
    if (lipAn) {
      try {
        if (!lipSrc.has(audio)) { const s = lipCtx.createMediaElementSource(audio); s.connect(lipAn); lipSrc.set(audio, s); }
        useAn = true;
        if (lipCtx.state === "suspended") lipCtx.resume();
      } catch (e) { useAn = false; }
    }
    const data = useAn ? new Uint8Array(lipAn.frequencyBinCount) : null;
    lipTimer = setInterval(() => {
      if (blinking) return;
      if (!lipAudio || lipAudio.paused || lipAudio.ended) { setChara("close"); return; }
      if (!useAn) { const r = Math.random(); setChara(r > .66 ? "open" : (r > .33 ? "half" : "close")); return; }
      lipAn.getByteFrequencyData(data);
      let sum = 0; for (let i = 0; i < 30; i += 1) sum += data[i];
      const avg = sum / 30; window.__lipAvg = avg;
      setChara(avg > LIP_OPEN ? "open" : (avg > LIP_HALF ? "half" : "close"));
    }, 90);
    const sched = () => { blinkTimer = setTimeout(() => {
      if (lipAudio && !lipAudio.paused && !lipAudio.ended) { blinking = true; setChara("blink"); setTimeout(() => { blinking = false; setChara("close"); }, 150); }
      sched();
    }, 3000 + Math.random() * 2000); };
    sched();
  }
  function lipStop() {
    clearInterval(lipTimer); clearTimeout(blinkTimer); lipTimer = null; blinkTimer = null; blinking = false; lipAudio = null;
    setChara("close");
  }

  function stopAllAudio() {
    lipStop();
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
  const currentOrder = () => (attempt === 0 || still)
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
    showScreen("welcome"); // 「もういちど あそぶ」のときも、あいさつの画面に戻す
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
    lipStart(introAudio, true);
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
    still = difficulty.value === "0";
    updateQuestionHeader(questionIndex);
    answerTitle.textContent = "ちがうのは なんばんめ？";
    answerHint.textContent = "こたえを くちで おしえてください";
    status.textContent = "えを よくみてください";
    if (still) { showStill(); return; }
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

  // 4まいの えと ばんごうを ならべる
  function fillGrid(onPick) {
    revealGrid.replaceChildren();
    const cards = currentCards();
    currentOrder().forEach((cardNumber, index) => {
      const card = cards[cardNumber - 1];
      const tile = document.createElement(onPick ? "button" : "div");
      tile.className = "reveal-card";
      if (onPick) {
        tile.type = "button";
        tile.addEventListener("click", () => onPick(index + 1));
      } else if (cardNumber === currentQuestion().correctCard) {
        tile.classList.add("is-answer");
      }
      const image = document.createElement("img");
      image.src = card.src;
      image.alt = onPick ? "" : card.name;
      const label = document.createElement("span");
      label.className = "reveal-number";
      label.textContent = `${index + 1}ばん`;
      tile.append(image, label);
      revealGrid.append(tile);
    });
  }

  // とまったまま版の もんだい画面
  function showStill() {
    cancelTimers();
    showScreen("reveal");
    screens.reveal.classList.add("still");
    resultTitle.innerHTML = currentQuestion().intro.replace("<br>", " ");
    resultTitle.classList.remove("is-wrong");
    resultDetail.textContent = "なんばんめか、こたえを おしえてください";
    fillGrid(submitAnswer);
    makeAnswerButtons();
    status.textContent = "スタッフが こたえのばんごう（または え）を おしてください";
  }

  function submitAnswer(number) {
    cancelTimers();
    if (number === currentCorrectNumber()) {
      revealAnswer(true, false);
      return;
    }

    attempt += 1;
    if (attempt === 1 && still) {
      resultTitle.textContent = "おしい！ もういちど！";
      resultTitle.classList.add("is-wrong");
      resultDetail.textContent = "ほかの えを よくみてください";
      [revealGrid.children[number - 1], actions.children[number - 1]].forEach((el) => {
        el.disabled = true;
        el.classList.add("is-out");
      });
      status.textContent = "もういちど こたえを えらんでください";
      return;
    }
    if (attempt === 1) {
      status.textContent = "もういちど えを みてください";
      beginSequence(currentQuestion().retryOrder, "left", "もういちど、よくみてください");
      return;
    }
    revealAnswer(false, true);
  }

  function revealAnswer(correct, showSolution) {
    showScreen("reveal");
    screens.reveal.classList.remove("still");
    const correctNumber = currentCorrectNumber();
    const correctName = currentQuestion().cards[currentQuestion().correctCard - 1].name;
    resultTitle.textContent = correct
      ? "せいかい！"
      : `ざんねん！\nこたえは${answerSymbols[correctNumber]}の${correctName}です`;
    resultTitle.classList.toggle("is-wrong", !correct);
    resultDetail.textContent = correct
      ? "どうして ちがうのか、みんなで はなしましょう"
      : currentQuestion().explanation;
    fillGrid(null);

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
      lipStart(endingAudio, false);
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
