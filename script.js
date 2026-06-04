const STORAGE_KEY = "seven-rooms-progress-v1";

const stages = [
  {
    id: "intro",
    label: "Prologue",
    roomNumber: 0,
    theme: "導入",
    ruleTag: "ルール説明",
    title: "閉じた世界のはじまり",
    text:
      "目が覚めると、白い壁と静かな照明しかない部屋にいた。出口は1つだけ。ここがどういう場所なのかはわからない。ただ、各部屋に1つずつ妙な読み方があることだけは、すぐに気づくはずだ。",
    objective:
      "7部屋を抜ける。最初は各部屋のルールを覚え、後半でそれらを組み合わせる。",
    prompt: "準備ができたら「はじめる」と入力",
    answer: ["はじめる"],
    hintText: "開始の言葉そのものが鍵になっている。",
    hints: ["最初は深読みしなくていい。始める合図を入力する。"],
    artClass: "stage-intro",
    feedbackText: "密室のルールは、部屋ごとに1つずつある。",
    clues: [
      {
        title: "進め方",
        body: "各部屋には1つのルールがある。順番、鏡、文字目のような見方の違いを掴むのが先だ。",
      },
      {
        title: "バッドエンド",
        body: "各部屋で3回連続して間違えると、その部屋専用の小さな失敗エンドになる。",
      },
      {
        title: "伏線",
        body: "前の部屋で見つけたルールは、後ろの部屋でもそのまま必要になる。",
      },
      {
        title: "主人公",
        body: "主人公は名前のないあなた自身。特別な設定はないが、最後に理由は見えてくる。",
      },
    ],
  },
  {
    id: "room-1",
    label: "Room 1",
    roomNumber: 1,
    theme: "白い封鎖室",
    ruleTag: "順番",
    title: "白い封鎖室",
    text:
      "蛍光灯の白さだけがやけに眩しい。窓はなく、空気は無臭。壁のプレートにはこう刻まれている。『AからDまで、順に数字を入れて』。",
    objective: "A-Dの手がかりから4桁の数字を作る。",
    prompt: "4桁の数字を入力",
    answer: ["1324"],
    hintText: "部屋の中にある4つの手がかりは、A-Dの順番で読むだけでいい。",
    hints: [
      "A, B, C, D の順に、それぞれの数字だけ拾う。",
      "Aは1本、Bは3冊、Cは2回、Dは4時。答えは 1324。",
    ],
    artClass: "stage-1",
    feedbackText: "壁の静けさに比べて、数字だけが妙に明確だ。",
    memo: {
      title: "Room 1: 順番",
      body: "A-Dの順で読むルールを見つけた。以後、この施設は手がかりの並べ方そのものを試してくる。",
    },
    clues: [
      {
        title: "手がかり A",
        body: "白い塗装の上に、爪で引いたような細い傷が残っている。",
        mark: "線は1本だけ。",
      },
      {
        title: "手がかり B",
        body: "几帳面に並んだ本の列に、不自然な空白がある。",
        mark: "抜けている本は3冊。",
      },
      {
        title: "手がかり C",
        body: "一定の間隔で、照明がわずかに明滅する。",
        mark: "点滅は2回。",
      },
      {
        title: "手がかり D",
        body: "秒針は動かない。時刻だけがこちらを見ている。",
        mark: "4時で止まっている。",
      },
    ],
    badEnding: {
      kind: "Bad End 01",
      title: "清掃モード",
      text:
        "非常ボタンだと思って押した赤いスイッチは、自動清掃の起動キーだった。白い泡が足元まで満ち、あなたは部屋ごと丁寧に洗われる。しばらくすると、また最初の位置に立っていた。",
    },
  },
  {
    id: "room-2",
    label: "Room 2",
    roomNumber: 2,
    theme: "反転記録室",
    ruleTag: "鏡読み",
    title: "反転記録室",
    text:
      "壁も机も鏡面に近い金属でできた部屋。中央の端末だけが普通の文字を映している。表示は一行。『この部屋では、最初に見えたものを疑え』。",
    objective: "鏡として読んだときに現れる合言葉を見つける。",
    prompt: "合言葉をひらがなで入力",
    answer: ["みらい"],
    hintText: "裏から読むのではなく、鏡として読む。",
    hints: [
      "文字は反対から読むのではなく、鏡越しに見た形をそのまま読む。",
      "最初の札は『かがみ』、端末は『かがみの つぎを よめ』。次の札は『みらい』になる。",
    ],
    artClass: "stage-2",
    feedbackText: "見えている文字と、読める文字が一致しない。",
    memo: {
      title: "Room 2: 鏡読み",
      body: "この施設には鏡として読む表示がある。反転したままでも、意味を持つものが混ざっている。",
    },
    clues: [
      {
        title: "鏡札 01",
        body: "磨かれた板に、見慣れない文字が浮かんでいる。",
        mark: '<span class="mirror-text">みがか</span>',
      },
      {
        title: "端末ログ",
        body: "これだけは普通に読める。",
        mark: "『かがみの つぎを よめ』",
      },
      {
        title: "鏡札 02",
        body: "薄く青く発光する札。こちらも裏返ったように読みにくい。",
        mark: '<span class="mirror-text">いらみ</span>',
      },
      {
        title: "壁の刻印",
        body: "隅に小さく、擦れた数字が見える。",
        mark: "2091",
      },
    ],
    badEnding: {
      kind: "Bad End 02",
      title: "割れ鏡",
      text:
        "焦って鏡札を外そうとした瞬間、金属壁が一斉にこちらの顔を映した。無数の自分と目が合ったまま、照明だけが静かに落ちる。次に明かりが戻ると、あなたはまた入口に立っていた。",
    },
  },
  {
    id: "room-3",
    label: "Room 3",
    roomNumber: 3,
    theme: "停止時計室",
    ruleTag: "順番 + 鏡",
    title: "停止時計室",
    text:
      "丸い大型時計が天井近くで止まっている。秒針はない。端末にはこう表示される。『最初の部屋の順で、鏡の数字を年として読め』。",
    objective: "A-Dの順番と鏡読みを使い、この場所が示す年を特定する。",
    prompt: "4桁の数字を入力",
    answer: ["2091"],
    hintText: "Room 1 の順番と Room 2 の鏡読みを、そのまま重ねる。",
    hints: [
      "並びは Room 1 の答えと同じ 1324。",
      "A, C, B, D の順に鏡の数字を読めば 2091 になる。",
    ],
    artClass: "stage-3",
    feedbackText: "未来を指して止まったままの時計に見える。",
    memo: {
      title: "Room 3: 2091年",
      body: "この施設が示している時代は2091年。単なる密室ではなく、時間そのものがずれている。",
    },
    clues: [
      {
        title: "数字札 A",
        body: "文字盤の横にある薄いガラス札。数字が鏡向きになっている。",
        mark: '<span class="mirror-text">2</span>',
      },
      {
        title: "数字札 B",
        body: "傷の少ない新しい札。こちらも反転している。",
        mark: '<span class="mirror-text">9</span>',
      },
      {
        title: "数字札 C",
        body: "丸く曇った札。中心だけが拭き取られている。",
        mark: '<span class="mirror-text">0</span>',
      },
      {
        title: "数字札 D",
        body: "細長い札。貼り直した跡がある。",
        mark: '<span class="mirror-text">1</span>',
      },
    ],
    badEnding: {
      kind: "Bad End 03",
      title: "停止中のまま",
      text:
        "時計を無理に回そうとした瞬間、部屋全体の照明が消えた。次に光が戻ったとき、針もあなたも最初の位置に戻されている。時間だけが少しも進んでいない。",
    },
  },
  {
    id: "room-4",
    label: "Room 4",
    roomNumber: 4,
    theme: "無人食堂",
    ruleTag: "頭文字",
    title: "無人食堂",
    text:
      "椅子も食器もきれいに並んでいるのに、人の気配だけがない。温かいはずのスープ皿は空だ。端末には『各メモの最初の一文字だけ読め』とある。",
    objective: "食堂に残された短いメモから、この場所の状態を読む。",
    prompt: "今の状況をひらがなで入力",
    answer: ["だれも"],
    hintText: "文そのものより、文の最初の文字に意味がある。",
    hints: [
      "3つのメモの冒頭だけを読む。",
      "『だ』『れ』『も』で、答えは だれも。",
    ],
    artClass: "stage-4",
    feedbackText: "食器だけが人の代わりに待っている。",
    memo: {
      title: "Room 4: 誰もいない",
      body: "2091年のこの施設には、もう誰もいない。残っているのは整えられた生活の跡だけだ。",
    },
    clues: [
      {
        title: "メモ A",
        body: "だいぶ前に配膳は止まりました。けれど席だけは減っていません。",
      },
      {
        title: "メモ B",
        body: "れいぞう庫だけが静かに稼働中です。厨房担当の呼び出しには応答がありません。",
      },
      {
        title: "メモ C",
        body: "もう人員確認は不要です。自動保守のみで運用を継続します。",
      },
      {
        title: "端末",
        body: "短い命令文が点滅している。",
        mark: "『各メモの最初の一文字だけ読め』",
      },
    ],
    badEnding: {
      kind: "Bad End 04",
      title: "補給待ち",
      text:
        "配膳口に手を入れた瞬間、トレーが勢いよく飛び出してきた。空っぽの皿だけを受け取り続ける羽目になり、あなたは補給待ちの席に静かに座らされる。また気づけば入口に戻っていた。",
    },
  },
  {
    id: "room-5",
    label: "Room 5",
    roomNumber: 5,
    theme: "空庭温室",
    ruleTag: "文字目",
    title: "空庭温室",
    text:
      "最後の密室らしさが薄れ、青緑の光と植物の匂いが入ってくる。ガラス越しの外は穏やかだ。端末には『鉢ごとに示された数字の文字目を拾え』とある。",
    objective: "苗札の単語と数字から、この場所の印象を表す言葉を抜き出す。",
    prompt: "この場所の印象をひらがなで入力",
    answer: ["らくえん"],
    hintText: "数字は順番ではなく、単語の中の何文字目かを示している。",
    hints: [
      "各鉢で、単語の指定された文字目を拾う。",
      "きらめきの2文字目、しずくの4文字目、かえでの2文字目、あんどんの2文字目で『らくえん』。",
    ],
    artClass: "stage-5",
    feedbackText: "ここだけは、むしろ出たくなくなるくらい穏やかだ。",
    memo: {
      title: "Room 5: 楽園",
      body: "外の景色は荒廃ではなく、むしろ整いすぎた楽園に近い。怖さより、静けさのほうが強い。",
    },
    clues: [
      {
        title: "苗札 A",
        body: "白い小花の鉢。札には『きらめき』とある。",
        mark: "2枚葉",
      },
      {
        title: "苗札 B",
        body: "細い茎の鉢。札には『しずく』とある。",
        mark: "4枚葉",
      },
      {
        title: "苗札 C",
        body: "小さな木の苗。札には『かえで』とある。",
        mark: "2枚葉",
      },
      {
        title: "苗札 D",
        body: "やわらかな光を受ける鉢。札には『あんどん』とある。",
        mark: "2枚葉",
      },
    ],
    badEnding: {
      kind: "Bad End 05",
      title: "自動散水",
      text:
        "近くの扉を試しに開けた瞬間、自動散水が全開になった。未来の温室は容赦がない。ずぶ濡れのまま滑って転び、また入口の前に戻される。",
    },
  },
  {
    id: "room-6",
    label: "Room 6",
    roomNumber: 6,
    theme: "避難記録庫",
    ruleTag: "年代順",
    title: "避難記録庫",
    text:
      "壁一面に保存ケースが並び、年号つきの記録板が無音で光っている。表示はひとつだけ。『古い順に並べ、角の文字だけ読め』。",
    objective: "記録板を年代順に読み、この区画の種類を特定する。",
    prompt: "この区画の種類をひらがなで入力",
    answer: ["ひなんしつ"],
    hintText: "見るべきなのは本文よりも年号の順番と、角に残った文字。",
    hints: [
      "年号を古い順に並べる。2087, 2088, 2089, 2090, 2091。",
      "角印を順に読むと『ひなんしつ』になる。",
    ],
    artClass: "stage-6",
    feedbackText: "ここは収容施設ではなく、誰かを守るための区画だったらしい。",
    memo: {
      title: "Room 6: 避難室",
      body: "この建物は実験施設ではなく避難室。争いのあとに残された、最後の受け入れ場所だった可能性が高い。",
    },
    clues: [
      {
        title: "記録板 2090",
        body: "保守人員の退去完了。外部生態系は安定と記載されている。",
        mark: "角印: し",
      },
      {
        title: "記録板 2087",
        body: "避難区画を初期化。遅延到着者用の自動起床を開始。",
        mark: "角印: ひ",
      },
      {
        title: "記録板 2091",
        body: "最終受け入れ待機。以後は自動運営へ移行。",
        mark: "角印: つ",
      },
      {
        title: "記録板 2089",
        body: "移住完了後の生活圏を上層庭園へ集約。",
        mark: "角印: ん",
      },
      {
        title: "記録板 2088",
        body: "内部設備の常時稼働を確認。食堂、温室、監視系は無人運転へ。",
        mark: "角印: な",
      },
    ],
    badEnding: {
      kind: "Bad End 06",
      title: "記録保全",
      text:
        "保存ケースを無理に引き抜いた途端、記録保全シャッターが一斉に閉じた。閉じ込められたと思った次の瞬間、あなたはなぜか入口の前に立たされている。施設は情報にだけ妙に厳しい。",
    },
  },
  {
    id: "room-7",
    label: "Room 7",
    roomNumber: 7,
    theme: "帰還ゲート室",
    ruleTag: "総合",
    title: "帰還ゲート室",
    text:
      "最後の扉は、これまでのどの部屋より静かだった。柔らかい白金色の光だけが床に落ちている。端末にはこうある。『最初の部屋の順で並べ、鏡として読み、数字の文字目を拾え』。",
    objective: "これまでのルールを組み合わせ、最後の扉の言葉を読む。",
    prompt: "最後の扉の言葉をひらがなで入力",
    answer: ["おかえり"],
    hintText: "Room 1 の順番、Room 2 の鏡読み、Room 5 の文字目を全部使う。",
    hints: [
      "まず札は 1324 の順に並べる。",
      "鏡として読むと『とおく』『まえぶれ』『ひかり』『ひかり』になる。指定文字を拾うと『おかえり』。",
    ],
    artClass: "stage-7",
    feedbackText: "扉の向こうは、もう出口というより帰還先に見える。",
    memo: {
      title: "Room 7: おかえり",
      body: "最後の扉はあなたを拒まず、『おかえり』と迎える。ここは罰の施設ではなく、遅れて帰る誰かを待つ場所だった。",
    },
    clues: [
      {
        title: "札 A",
        body: "数字指定も鏡文字も混ざった札。",
        mark: '<span class="mirror-text">くおと</span> / 2文字目',
      },
      {
        title: "札 B",
        body: "古い傷のある札。こちらも反転したままだ。",
        mark: '<span class="mirror-text">れぶえま</span> / 2文字目',
      },
      {
        title: "札 C",
        body: "光にかざすと少しだけ透ける札。",
        mark: '<span class="mirror-text">りかひ</span> / 2文字目',
      },
      {
        title: "札 D",
        body: "同じ語に見えるが、数字が違う。",
        mark: '<span class="mirror-text">りかひ</span> / 3文字目',
      },
    ],
    badEnding: {
      kind: "Bad End 07",
      title: "待機継続",
      text:
        "扉に違う言葉を送ると、やさしい合成音声が『待機を継続します』とだけ告げた。拒絶ではないのが逆に怖い。気づけば、また最後の扉の前に立っている。",
    },
  },
];

const successEnding = {
  kind: "True End",
  title: "ようこそ、2091年へ",
  text:
    "扉の先にあったのは処刑場でも廃墟でもなく、風と光だけが静かに行き交う無人の居住区だった。避難室の記録どおり、人々はもっと先の生活圏へ移っていったのだろう。最後の表示は『おかえり』。あなたは遅れて目覚めた最後の到着者だったらしい。争いの終わったあとに残されたこの楽園で、少しずつ暮らし方を覚えていけばいい。急ぐ理由は、もうどこにもない。",
};

const state = {
  stageIndex: 0,
  maxReached: 0,
  attempts: 0,
  hintIndex: 0,
  audioEnabled: false,
  audioContext: null,
  oscillators: [],
  gainNode: null,
  loadedFromSave: false,
};

const stageLabel = document.getElementById("stage-label");
const stageCounter = document.getElementById("stage-counter");
const themeChip = document.getElementById("theme-chip");
const ruleChip = document.getElementById("rule-chip");
const stageTitle = document.getElementById("stage-title");
const stageText = document.getElementById("stage-text");
const objectiveText = document.getElementById("objective-text");
const promptText = document.getElementById("prompt-text");
const clueGrid = document.getElementById("clue-grid");
const hintText = document.getElementById("hint-text");
const attemptText = document.getElementById("attempt-text");
const feedback = document.getElementById("feedback");
const answerForm = document.getElementById("answer-form");
const answerInput = document.getElementById("answer-input");
const hintButton = document.getElementById("hint-button");
const resetButton = document.getElementById("reset-button");
const audioToggle = document.getElementById("audio-toggle");
const clearSaveButton = document.getElementById("clear-save-button");
const sceneArt = document.getElementById("scene-art");
const saveStatus = document.getElementById("save-status");
const timeline = document.getElementById("timeline");
const timelineText = document.getElementById("timeline-text");
const memoList = document.getElementById("memo-list");
const logbookStatus = document.getElementById("logbook-status");
const dialog = document.getElementById("ending-dialog");
const endingKind = document.getElementById("ending-kind");
const endingTitle = document.getElementById("ending-title");
const endingText = document.getElementById("ending-text");
const dialogPrimary = document.getElementById("dialog-primary");
const dialogSecondary = document.getElementById("dialog-secondary");

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

function clampStageIndex(index) {
  return Math.max(0, Math.min(index, stages.length - 1));
}

function saveProgress() {
  try {
    const payload = {
      stageIndex: state.stageIndex,
      maxReached: state.maxReached,
      completed: state.maxReached >= stages.length,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore storage failures and keep the game playable.
  }
}

function clearStoredProgress() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage failures.
  }
}

function loadProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    if (typeof parsed.stageIndex !== "number" || typeof parsed.maxReached !== "number") {
      return;
    }

    state.stageIndex = clampStageIndex(parsed.stageIndex);
    state.maxReached = Math.max(0, Math.min(parsed.maxReached, stages.length));
    state.loadedFromSave = state.stageIndex > 0 || state.maxReached > 0;
  } catch {
    // Ignore broken save data.
  }
}

function getCurrentStage() {
  return stages[state.stageIndex];
}

function getCurrentRoomNumber() {
  return getCurrentStage().roomNumber;
}

function getCompletedRoomCount() {
  return Math.max(0, Math.min(7, state.maxReached - 1));
}

function updateSaveStatus() {
  if (state.maxReached >= stages.length) {
    saveStatus.textContent = "全7部屋クリア済み。最後の到着者として再開可能。";
    return;
  }

  if (state.stageIndex > 0) {
    saveStatus.textContent = `Room ${getCurrentRoomNumber()} から再開中`;
    return;
  }

  if (state.loadedFromSave && state.maxReached > 0) {
    saveStatus.textContent = "中断データはあるが、現在はタイトル画面にいる";
    return;
  }

  saveStatus.textContent = "新規プレイ";
}

function renderTimeline() {
  timeline.innerHTML = "";
  const currentRoom = getCurrentRoomNumber();

  for (const stage of stages.filter((item) => item.roomNumber > 0)) {
    const card = document.createElement("div");
    const isCleared = state.maxReached > stage.roomNumber;
    const isActive = currentRoom === stage.roomNumber;
    const isLocked = state.maxReached < stage.roomNumber && !isActive;

    card.className = "timeline-card";
    if (isCleared) {
      card.classList.add("cleared");
    }
    if (isActive) {
      card.classList.add("active");
    }
    if (isLocked) {
      card.classList.add("locked");
    }

    const title = document.createElement("strong");
    title.textContent = `Room ${stage.roomNumber}`;

    const subtitle = document.createElement("span");
    subtitle.textContent = stage.theme;

    card.append(title, subtitle);
    timeline.append(card);
  }

  timelineText.textContent = `Room ${getCompletedRoomCount()} / 7 Cleared`;
}

function renderLogbook() {
  memoList.innerHTML = "";
  const entries = stages
    .slice(1, state.maxReached)
    .filter((stage) => stage.memo);

  if (!entries.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "各部屋を抜けるたび、ここに重要な発見が蓄積される。";
    memoList.append(empty);
    logbookStatus.textContent = "まだ記録はない";
    return;
  }

  logbookStatus.textContent = `${entries.length} 件の発見を記録中`;

  for (const stage of entries) {
    const card = document.createElement("article");
    card.className = "memo-card";

    const title = document.createElement("h4");
    title.textContent = stage.memo.title;

    const body = document.createElement("p");
    body.textContent = stage.memo.body;

    card.append(title, body);
    memoList.append(card);
  }
}

function renderStage() {
  const stage = getCurrentStage();
  const roomNumber = stage.roomNumber;

  stageLabel.textContent = stage.label;
  stageCounter.textContent = `${roomNumber} / 7 Rooms`;
  themeChip.textContent = stage.theme;
  ruleChip.textContent = stage.ruleTag;
  stageTitle.textContent = stage.title;
  stageText.textContent = stage.text;
  objectiveText.textContent = stage.objective;
  promptText.textContent = stage.prompt;
  hintText.textContent = stage.hintText;
  attemptText.textContent = `ミス ${state.attempts} / 3`;
  feedback.textContent = stage.feedbackText;
  feedback.className = "feedback";
  answerInput.value = "";
  answerInput.focus();

  sceneArt.className = `scene-art ${stage.artClass}`;
  clueGrid.innerHTML = "";

  for (const clue of stage.clues) {
    const card = document.createElement("article");
    card.className = "clue-card";

    const title = document.createElement("h3");
    title.textContent = clue.title;

    const body = document.createElement("p");
    body.textContent = clue.body;
    card.append(title, body);

    if (clue.mark) {
      const mark = document.createElement("p");
      mark.className = "clue-mark";
      mark.innerHTML = clue.mark;
      card.append(mark);
    }

    clueGrid.append(card);
  }

  renderTimeline();
  renderLogbook();
  updateSaveStatus();
  updateAudioForStage();
  saveProgress();
}

function showEnding(data, mode) {
  endingKind.textContent = data.kind;
  endingTitle.textContent = data.title;
  endingText.textContent = data.text;

  if (mode === "success") {
    dialogPrimary.textContent = "最初から遊ぶ";
    dialogSecondary.textContent = "閉じる";
  } else {
    dialogPrimary.textContent = "この部屋からやり直す";
    dialogSecondary.textContent = "タイトルへ";
  }

  dialog.dataset.mode = mode;
  dialog.showModal();
}

function advanceStage() {
  state.stageIndex += 1;
  state.maxReached = Math.max(state.maxReached, state.stageIndex);
  state.attempts = 0;
  state.hintIndex = 0;

  if (state.stageIndex >= stages.length) {
    state.stageIndex = stages.length - 1;
    state.maxReached = stages.length;
    saveProgress();
    renderTimeline();
    renderLogbook();
    updateSaveStatus();
    showEnding(successEnding, "success");
    return;
  }

  renderStage();
}

function resetRun() {
  state.stageIndex = 0;
  state.maxReached = 0;
  state.attempts = 0;
  state.hintIndex = 0;
  state.loadedFromSave = false;
  clearStoredProgress();
  renderStage();
}

function retryCurrentRoom() {
  state.attempts = 0;
  state.hintIndex = 0;
  renderStage();
}

answerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const stage = getCurrentStage();
  const input = normalizeAnswer(answerInput.value);

  if (!input) {
    feedback.textContent = "空欄では反応しない。";
    feedback.className = "feedback error";
    return;
  }

  const isCorrect = stage.answer.some((answer) => normalizeAnswer(answer) === input);

  if (isCorrect) {
    feedback.textContent = "扉のロックが外れる音がした。";
    feedback.className = "feedback success";
    window.setTimeout(advanceStage, 700);
    return;
  }

  state.attempts += 1;
  attemptText.textContent = `ミス ${state.attempts} / 3`;
  feedback.textContent = "反応はない。部屋のルールをもう一度見直す必要がある。";
  feedback.className = "feedback error";

  if (stage.badEnding && state.attempts >= 3) {
    window.setTimeout(() => showEnding(stage.badEnding, "bad"), 300);
  }
});

hintButton.addEventListener("click", () => {
  const stage = getCurrentStage();

  if (state.hintIndex >= stage.hints.length) {
    hintText.textContent = "これ以上のヒントはない。もう解けるはずだ。";
    return;
  }

  hintText.textContent = stage.hints[state.hintIndex];
  state.hintIndex += 1;
});

resetButton.addEventListener("click", () => {
  resetRun();
});

clearSaveButton.addEventListener("click", () => {
  resetRun();
});

dialogPrimary.addEventListener("click", () => {
  const mode = dialog.dataset.mode;
  dialog.close();

  if (mode === "success") {
    resetRun();
    return;
  }

  retryCurrentRoom();
});

dialogSecondary.addEventListener("click", () => {
  const mode = dialog.dataset.mode;
  dialog.close();

  if (mode === "success") {
    renderStage();
    return;
  }

  resetRun();
});

async function toggleAudio() {
  if (!state.audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    state.audioContext = new AudioContextClass();
    state.gainNode = state.audioContext.createGain();
    state.gainNode.gain.value = 0.03;
    state.gainNode.connect(state.audioContext.destination);
  }

  if (!state.audioEnabled) {
    await state.audioContext.resume();
    state.audioEnabled = true;
    audioToggle.textContent = "BGM ON";
    updateAudioForStage();
    return;
  }

  state.audioEnabled = false;
  audioToggle.textContent = "BGM OFF";
  stopOscillators();
}

function stopOscillators() {
  for (const oscillator of state.oscillators) {
    try {
      oscillator.stop();
    } catch {
      // Ignore already stopped oscillators.
    }
  }
  state.oscillators = [];
}

function updateAudioForStage() {
  if (!state.audioEnabled || !state.audioContext || !state.gainNode) {
    return;
  }

  stopOscillators();

  const soundscapes = [
    { type: "sine", notes: [196, 246.94] },
    { type: "triangle", notes: [220, 293.66] },
    { type: "sine", notes: [174.61, 261.63] },
    { type: "triangle", notes: [155.56, 233.08] },
    { type: "square", notes: [146.83, 220] },
    { type: "sine", notes: [196, 311.13] },
    { type: "triangle", notes: [164.81, 246.94] },
    { type: "sine", notes: [220, 329.63] },
  ];

  const room = getCurrentRoomNumber();
  const config = soundscapes[room] || soundscapes[0];

  for (const frequency of config.notes) {
    const oscillator = state.audioContext.createOscillator();
    const stageGain = state.audioContext.createGain();

    oscillator.type = config.type;
    oscillator.frequency.value = frequency;
    stageGain.gain.value = 0.018;

    oscillator.connect(stageGain);
    stageGain.connect(state.gainNode);
    oscillator.start();

    state.oscillators.push(oscillator);
  }
}

audioToggle.addEventListener("click", () => {
  toggleAudio().catch(() => {
    feedback.textContent = "この環境ではBGMを開始できなかった。";
    feedback.className = "feedback error";
  });
});

loadProgress();
renderStage();
