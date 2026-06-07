const STORAGE_KEY = "seven-rooms-progress-v2";

const stages = [
  {
    id: "intro",
    label: "Prologue",
    roomNumber: 0,
    theme: "導入",
    ruleTag: "ルール説明",
    title: "閉じた世界のはじまり",
    text:
      "目が覚めると、白い壁と静かな照明しかない部屋にいた。出口は1つだけ。ここが何のための施設なのかはまだわからない。ただ、各部屋を抜けるたびに記憶ログと認証番号が回復し、最後の部屋でその意味がつながるらしい。",
    objective:
      "7つの部屋を抜け、各部屋の答えと一緒に記憶ログと認証番号を回収する。",
    prompt: "準備ができたら「はじめる」と入力",
    answer: ["はじめる"],
    hintText: "開始の言葉そのものが鍵になっている。",
    hints: [
      "最初は深読みしなくていい。始める合図を入力する。",
      "各部屋のクリア後、右側の手がかり欄に記憶ログと認証番号が蓄積される。",
    ],
    artClass: "stage-intro",
    feedbackText: "密室のルールは、部屋ごとに1つずつある。最後は回復した記憶を並べることになる。",
    clues: [
      {
        title: "進め方",
        body: "各部屋には1つの読み方がある。順番、鏡、文字目、年代順のような見方の違いを掴むのが先だ。",
      },
      {
        title: "回収対象",
        body: "各部屋を抜けるたびに、その部屋の答えだけでなく、記憶ログと認証番号も記録される。",
      },
      {
        title: "最終室",
        body: "最後の帰還ゲート室では、回復した記憶ログから認証番号に対応する文字を抜き出すことになる。",
      },
      {
        title: "失敗条件",
        body: "各部屋で3回連続して間違えると、その部屋専用の失敗エンドに分岐する。",
      },
    ],
  },
  {
    id: "room-1",
    label: "ROOM 01",
    roomNumber: 1,
    theme: "白い封鎖室",
    ruleTag: "観察力",
    title: "白い封鎖室",
    text:
      "蛍光灯の白さだけがやけに眩しい。窓はなく、空気は無臭。壁のプレートにはこう刻まれている。『AからDまで、順に数字を読め』。",
    objective: "A-Dの手がかりから4桁の数字を作る。",
    prompt: "4桁の数字を入力",
    answer: ["5123"],
    hintText: "A、B、C、Dの順番で数字を並べてください。",
    hints: [
      "A, B, C, D の順に、それぞれの数字だけ拾う。",
      "Aは5、Bは1、Cは2、Dは3。答えは 5123。",
    ],
    wrongMessage: "認証コードが一致しません。\nもう一度、AからDの順番を確認してください。",
    artClass: "stage-1",
    feedbackText: "壁の静けさに比べて、数字だけが妙に明確だ。",
    successText:
      "認証ログを回収した。\n記憶ログと認証番号が手がかり欄に追加された。",
    memoryLog: "シロイルームニチイサナオト",
    authNumbers: [8],
    clues: [
      {
        title: "手がかり A",
        body: "白い壁の隅に、黒い塗料で一文字だけ残されている。",
        mark: "A = 5",
      },
      {
        title: "手がかり B",
        body: "床の継ぎ目に沿って、かすれた数字が見える。",
        mark: "B = 1",
      },
      {
        title: "手がかり C",
        body: "照明パネルの端に、小さく刻印された番号がある。",
        mark: "C = 2",
      },
      {
        title: "手がかり D",
        body: "扉脇の封鎖ランプだけが、別の番号を示している。",
        mark: "D = 3",
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
    label: "ROOM 02",
    roomNumber: 2,
    theme: "反転記録室",
    ruleTag: "視点転換",
    title: "反転記録室",
    text:
      "壁も机も鏡面に近い金属でできた部屋。中央の端末だけが普通の文字を映している。表示は一行。『この部屋では、最初に見えたものを疑え』。",
    objective: "鏡文字と反転文字から、正しい認証語を読む。",
    prompt: "認証語を入力",
    answer: ["PHASE 1"],
    hintText: "そのまま読むのではなく、鏡に映したように反対側から読んでください。",
    hints: [
      "反転している英字を、鏡に映したときの並びへ戻す。",
      "札の語は『PHASE 1』になる。",
    ],
    wrongMessage: "読み取りに失敗しました。\n文字を反対側から見直してください。",
    artClass: "stage-2",
    feedbackText: "見えている文字と、読める文字が一致しない。",
    successText:
      "認証ログを回収した。\n記憶ログと認証番号が手がかり欄に追加された。",
    memoryLog: "キケンハカガミノムコウニアル",
    authNumbers: [1],
    clues: [
      {
        title: "鏡札 01",
        body: "磨かれた板に、反転した英字が白く浮かんでいる。",
        mark: '<span class="mirror-text">1 ESAHP</span>',
      },
      {
        title: "端末ログ",
        body: "これだけは普通に読める。",
        mark: "『反転を疑え』",
      },
      {
        title: "鏡札 02",
        body: "青く発光する札。上下も左右も信用できない。",
        mark: "PHASE と 1 を組み合わせろ",
      },
      {
        title: "壁の刻印",
        body: "視点が固定されると読めない、とだけ残されている。",
        mark: "視点を変えろ",
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
    label: "ROOM 03",
    roomNumber: 3,
    theme: "停止時計室",
    ruleTag: "時間理解",
    title: "停止時計室",
    text:
      "丸い大型時計が天井近くで止まっている。秒針はない。床の記録板には年号が散らばり、端末には『時計と年号、過去のルールを組み合わせろ』とある。",
    objective: "時計、年号、過去のルールを使って正しい年を特定する。",
    prompt: "4桁の数字を入力",
    answer: ["2068"],
    hintText: "第1試験の順番と、第2試験の反転読みを組み合わせてください。",
    hints: [
      "時計の針が指す位置と、4枚の年号札の並びを対応させる。",
      "止まった時刻と年号の組み合わせから、答えは 2068。",
    ],
    wrongMessage: "年号が一致しません。\n順番と反転の両方を確認してください。",
    artClass: "stage-3",
    feedbackText: "時計は止まっていても、記録の時間だけは進み続けている。",
    successText:
      "認証ログを回収した。\n記憶ログと認証番号が手がかり欄に追加された。",
    memoryLog: "トケイハミライヲチュウシンニトマル",
    authNumbers: [10],
    clues: [
      {
        title: "時計",
        body: "長針と短針は特定の年だけを指すように固定されている。",
        mark: "停止時刻: 20:68",
      },
      {
        title: "記録札 A",
        body: "古い管理ログには、過去の運用年が断片的に残っている。",
        mark: "20 / 68",
      },
      {
        title: "記録札 B",
        body: "天井の投影は、年号を2桁ずつ区切って考えろと示している。",
        mark: "前半2桁 + 後半2桁",
      },
      {
        title: "端末",
        body: "Room 1 と同じように、順に読むことを求めてくる。",
        mark: "『時計の示す順をそのまま採用せよ』",
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
    label: "ROOM 04",
    roomNumber: 4,
    theme: "無人食堂",
    ruleTag: "共同体理解",
    title: "無人食堂",
    text:
      "椅子も食器もきれいに並んでいるのに、人の気配だけがない。端末には『メニューと掲示物の頭文字だけ拾え』とある。",
    objective: "残されたメニューや掲示物の頭文字から、この食堂の現状を読む。",
    prompt: "現状をカタカナで入力",
    answer: ["ダレモイナイ"],
    hintText: "メニュー名の最初の文字だけを拾ってください。",
    hints: [
      "各メニューや掲示文の頭文字だけを拾う。",
      "並べると『ダレモイナイ』になる。",
    ],
    wrongMessage: "答えが一致しません。\nメニューの頭文字を順に読んでください。",
    artClass: "stage-4",
    feedbackText: "食器だけが人の代わりに、静かに待っている。",
    successText:
      "認証ログを回収した。\n記憶ログと認証番号が手がかり欄に追加された。",
    memoryLog: "ムジンノショクドウデウシナッタヒトヲオモウ",
    authNumbers: [9],
    clues: [
      {
        title: "掲示 A",
        body: "ダイニング閉鎖。配膳担当は全員退避済み。",
        mark: "ダ",
      },
      {
        title: "掲示 B",
        body: "レシピ保全。モジュール点検のため入室制限中。",
        mark: "レ",
      },
      {
        title: "メニュー札",
        body: "モーニング、イブニング、ナイト、インスタントの見出しだけが残っている。",
        mark: "モ / イ / ナ / イ",
      },
      {
        title: "端末",
        body: "短い命令文が点滅している。",
        mark: "『頭文字だけ読め』",
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
    label: "ROOM 05",
    roomNumber: 5,
    theme: "空庭温室",
    ruleTag: "自然共生",
    title: "空庭温室",
    text:
      "青緑の光と植物の匂いが満ちている。ガラス越しの外は穏やかだ。端末には『植物ラベルから指定文字を抜き出せ』とある。",
    objective: "植物ラベルの文字から、温室が求める言葉を抜き出す。",
    prompt: "導かれる言葉をカタカナで入力",
    answer: ["ミドリヲツナゲ"],
    hintText: "植物名の最初の文字だけを、1から7の順に読んでください。",
    hints: [
      "各ラベルに対応する文字を抜き出し、順に並べる。",
      "抜き出された語は『ミドリヲツナゲ』になる。",
    ],
    wrongMessage: "認証に失敗しました。\n植物ラベルの先頭文字を順番に確認してください。",
    artClass: "stage-5",
    feedbackText: "ここだけは、温室というより未来の庭に近い。",
    successText:
      "認証ログを回収した。\n記憶ログと認証番号が手がかり欄に追加された。",
    memoryLog: "ミドリヲミライヘツナグ",
    authNumbers: [4],
    clues: [
      {
        title: "苗札 A",
        body: "白い小花の鉢。苗札の語から指定文字を抜き出す必要がある。",
        mark: "ミドリ / 1文字目",
      },
      {
        title: "苗札 B",
        body: "細い茎の鉢。次も同じく文字位置指定だ。",
        mark: "ツナグ / 1文字目",
      },
      {
        title: "苗札 C",
        body: "葉脈の裏に、追加の抜き出し指示がある。",
        mark: "ミドリ / 4文字目",
      },
      {
        title: "苗札 D",
        body: "最後のラベルだけ、つなぐ対象まで書かれている。",
        mark: "ツナゲ / 4文字目",
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
    label: "ROOM 06",
    roomNumber: 6,
    theme: "避難記録庫",
    ruleTag: "歴史理解",
    title: "避難記録庫",
    text:
      "壁一面に保存ケースが並び、年号つきの記録板が無音で光っている。表示はひとつだけ。『記録を年代順に並べ、最後に残る語を答えよ』。",
    objective: "断片記録を年代順に並べ、この施設が待っていた存在を特定する。",
    prompt: "導かれる語をカタカナで入力",
    answer: ["サイゴノコウホシャ"],
    hintText: "過去から未来へ、記録を順番にたどってください。\n最後に残るのは、あなた自身の区分です。",
    hints: [
      "2087 から 2091 までの流れを追うと、誰を待っていた施設かが見えてくる。",
      "導かれる語は『サイゴノコウホシャ』。",
    ],
    wrongMessage: "記録の照合に失敗しました。\n年代順をもう一度確認してください。",
    artClass: "stage-6",
    feedbackText: "ここは記録庫であると同時に、待機室の履歴でもある。",
    successText:
      "認証ログを回収した。\n記憶ログと認証番号が手がかり欄に追加された。",
    memoryLog: "ワタシハモウイチドエラバレタ",
    authNumbers: [5],
    clues: [
      {
        title: "記録板 2090",
        body: "保守人員の退去完了。外部生態系は安定と記載されている。",
        mark: "待機対象は 1 名",
      },
      {
        title: "記録板 2087",
        body: "避難区画を初期化。遅延到着者用の自動起床を開始。",
        mark: "候補者選別を開始",
      },
      {
        title: "記録板 2091",
        body: "最終受け入れ待機。以後は自動運営へ移行。",
        mark: "最後の候補者を待つ",
      },
      {
        title: "記録板 2089",
        body: "移住完了後の生活圏を上層庭園へ集約。",
        mark: "残されたのは帰還対象",
      },
      {
        title: "記録板 2088",
        body: "内部設備の常時稼働を確認。食堂、温室、監視系は無人運転へ。",
        mark: "施設は再起動待機へ",
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
    label: "ROOM 07",
    roomNumber: 7,
    theme: "帰還ゲート室",
    ruleTag: "未来を選ぶ覚悟",
    title: "帰還ゲート室",
    text:
      "帰還認証を開始します。これまでの部屋で取得した認証番号を使用し、回復した記憶ログから該当する文字を抽出してください。抽出した文字を、部屋を通過した順に並べてください。それが、あなたの最終意思です。",
    objective: "ROOM 01〜07 の記憶ログと認証番号から文字を抽出し、最終意思を完成させる。",
    prompt: "最終意思をカタカナで入力",
    answer: ["チキュウヲモドセ", "地球を戻せ", "地球ヲ戻セ"],
    hintText:
      "手がかり欄の記憶ログを見てください。\nROOM 01は8文字目、ROOM 02は1文字目、ROOM 03は10文字目を読みます。\nROOM 07だけは、5文字目と19文字目の2文字を読みます。",
    hints: [
      "ROOM 01 から ROOM 07 まで、認証番号が示す文字だけを抜き出す。",
      "並ぶ語は『チキュウヲモドセ』になる。",
    ],
    wrongMessage: "最終意思が一致しません。\n記憶ログと認証番号を、部屋の順番に照合してください。",
    artClass: "stage-7",
    feedbackText:
      "右側の手がかり欄には、これまでに回復した記憶ログと認証番号が並んでいる。",
    successText:
      "帰還認証：完了\n選別試験を終了します。\n\n候補者の意思を確認しました。\nあなたは、未来へ逃げるのではない。\n地球を戻すために、2091年へ進む。",
    memoryLog: "ミライハドコカデハナイチキュウヘカエセ",
    authNumbers: [5, 19],
    showRecordWhileActive: true,
    clues: [
      {
        title: "認証端末",
        body: "抽出した文字を、部屋を通過した順に並べろとだけ表示されている。",
        mark: "ROOM 01 → ROOM 07",
      },
      {
        title: "ROOM 07 記憶ログ",
        body: "最後の記憶ログも、すでに画面上には回復している。",
        mark: "ミライハドコカデハナイチキュウヘカエセ",
      },
      {
        title: "ROOM 07 認証番号",
        body: "この部屋だけは2つの番号が並ぶ。",
        mark: "5 / 19",
      },
      {
        title: "抽出ルール",
        body: "これまでに回復した記憶ログを見返し、認証番号に対応する文字を拾う。",
        mark: "最終答えは12文字",
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
  kind: "帰還認証：完了",
  title: "ようこそ、2091年へ",
  text:
    "選別試験を終了します。\n\n候補者の意思を確認しました。\nあなたは、未来へ逃げるのではない。\n地球を戻すために、2091年へ進む。\n\n扉の先にあるのは、無人のまま保たれた楽園ではなく、やり直すために残された帰還地点だった。最後の到着者であるあなたが選んだのは、逃避ではなく帰還。ここから先は、失われた地球を取り戻すための時間になる。",
};

const trueEndingScene = {
  label: "TRUE END",
  title: "ようこそ、2091年へ",
  theme: "WHITE GARDEN",
  ruleTag: "2091",
  counter: "TRUE / END",
  kicker: "TRUE END / 2091",
  messages: [
    "扉の先に、風があった。",
    "白い施設の空気とは違う。",
    "水の音が聞こえる。",
    "遠くに、白い都市が見える。",
    "その周りには、緑が広がっていた。",
    "空は青かった。",
    "世界は、まだ終わっていなかった。",
    "ここは、楽園ではない。",
    "ここは、始まりの場所だ。",
    "あなたは一歩を踏み出す。",
    "地球を戻すために。",
    "ようこそ、2091年へ。",
  ],
  cardCopy: "地球を戻すための旅が、ここから始まる。",
};

const hotspotLayouts = {
  intro: [
    { x: 26, y: 30 },
    { x: 73, y: 28 },
    { x: 24, y: 71 },
    { x: 76, y: 70 },
  ],
  "room-1": [
    { x: 12, y: 26 },
    { x: 12, y: 56 },
    { x: 73, y: 31 },
    { x: 73, y: 58 },
  ],
  "room-2": [
    { x: 24, y: 28 },
    { x: 20, y: 68 },
    { x: 76, y: 34 },
    { x: 72, y: 62 },
  ],
  "room-3": [
    { x: 25, y: 27 },
    { x: 24, y: 68 },
    { x: 76, y: 35 },
    { x: 74, y: 68 },
  ],
  "room-4": [
    { x: 14, y: 83 },
    { x: 22, y: 62 },
    { x: 83, y: 84 },
    { x: 50, y: 24 },
  ],
  "room-5": [
    { x: 17, y: 69 },
    { x: 81, y: 68 },
    { x: 60, y: 44 },
    { x: 67, y: 38 },
  ],
  "room-6": [
    { x: 37, y: 37 },
    { x: 44, y: 39 },
    { x: 51, y: 35 },
    { x: 58, y: 39 },
    { x: 65, y: 37 },
  ],
  "room-7": [
    { x: 27, y: 55 },
    { x: 41, y: 72 },
    { x: 60, y: 72 },
    { x: 74, y: 55 },
  ],
};

const fallbackHotspots = [
  { x: 20, y: 28 },
  { x: 44, y: 34 },
  { x: 70, y: 28 },
  { x: 28, y: 72 },
  { x: 55, y: 62 },
  { x: 76, y: 70 },
];

const sceneDetails = {
  intro: {
    caption: "目覚めたばかりの密室。違和感を拾うところから始まる。",
    inspectLine: "まだ何も手に取っていない。まずは部屋のどこかを調べる。",
  },
  "room-1": {
    caption: "白く塗り固められた部屋。数字だけが不自然に浮いて見える。",
    inspectLine: "表面はきれいすぎる。わざと残された痕だけが目につく。",
  },
  "room-2": {
    caption: "金属と反射面の部屋。正面から見た情報ほど信用できない。",
    inspectLine: "鏡面が多すぎる。視線を返してくるものばかりだ。",
  },
  "room-3": {
    caption: "止まった時間を閉じ込めたような円形室。針は未来で止まっている。",
    inspectLine: "数字札は散っているのに、答えだけはひとつに収束していく。",
  },
  "room-4": {
    caption: "人のいない食堂。生活の気配だけが、席に残されたままだ。",
    inspectLine: "ここには会話の余韻がない。残っているのは文章だけだ。",
  },
  "room-5": {
    caption: "やわらかい光に満ちた温室。ここだけ空気が穏やかすぎる。",
    inspectLine: "植物は整いすぎている。誰かが去ったあとも、世話だけは続いている。",
  },
  "room-6": {
    caption: "保存ケースが並ぶ記録庫。ここでは年代の並びそのものが手がかりになる。",
    inspectLine: "保管された板の順番に、施設の本当の用途が滲んでいる。",
  },
  "room-7": {
    caption: "帰還のための最終室。出口ではなく、迎え入れるための扉に見える。",
    inspectLine: "ここまでの見方が全部試される。最後の言葉だけが静かに待っている。",
  },
};

const sceneIllustrations = {
  intro: "assets/figma-bg/intro-door.png",
  "room-1": "assets/figma-bg/room-1.png",
  "room-2": "assets/figma-bg/room-2.png",
  "room-3": "assets/figma-bg/room-3.png",
  "room-4": "assets/figma-bg/room-4.png",
  "room-5": "assets/figma-bg/room-5.png",
  "room-6": "assets/figma-bg/room-6.png",
  "room-7": "assets/figma-bg/room-7.png",
  "true-end": "assets/figma-bg/true-end.png",
};

const stageScenes = {
  intro: {
    kicker: "WHITE GARDEN / LOG",
    introMessages: [
      "プレイヤーは、白い密室で目を覚ます。",
      "自分が誰なのか、なぜここにいるのかは思い出せない。",
      "しかし、部屋を進むごとに少しずつ記憶が戻ってくる。",
      "この施設は、白庭選別施設 / WHITE GARDEN。",
      "未来へ送られるのは、ただ生き残りたい人間ではない。",
      "地球を再生する意思を持つ者だけが、2091年へ進める。",
      "あなたは、その最後の候補者である。",
    ],
    puzzleTitle: "接続確認",
    puzzleBody: [
      "最初の扉へ接続します。",
      "準備ができたら、開始の合図を入力してください。",
    ],
    successMessages: [
      "接続を受理しました。",
      "白い廊下の先で、最初の部屋のロックが解ける。",
      "試験が始まる。",
    ],
    doorPrompt: "最初の試験へ進む準備が整っている。",
  },
  "room-1": {
    kicker: "ROOM 01 / INTRO",
    introMessages: [
      "ここはどこなんだろうか・・・。",
      "目を覚ますと、白い部屋の中央に立っていた。",
      "壁も、床も、扉も、すべてが白い。",
      "人の気配はない。",
      "正面には、細い窓のついた扉がある。",
      "左右の壁には、A、B、C、Dの記号が見える。",
      "どこかから、機械のような声が聞こえた。",
      "「第1試験を開始します」",
      "「観察力の認証を行います」",
      "「扉に表示された情報を読み取り、認証コードを入力してください」",
    ],
    puzzleTitle: "第1試験：観察力",
    puzzleBody: [
      "AからDへ。",
      "順番に数字を読め。",
      "A、B、C、Dに対応する数字を確認し、4桁の認証コードを入力してください。",
    ],
    successMessages: [
      "認証コードを受理しました。",
      "白い扉の奥で、ロックが外れる音がした。",
      "その瞬間、短い記憶がよみがえる。",
      "白い廊下を歩いている。",
      "誰かの声が聞こえる。",
      "「最初の部屋では、焦らないで」",
      "「見ることから始めてください」",
      "これは、脱出ではない。",
      "何かの試験だ。",
    ],
    doorPrompt: "白い扉が認証待機に入っている。",
  },
  "room-2": {
    kicker: "ROOM 02 / INTRO",
    introMessages: [
      "扉の先は、白い記録室だった。",
      "壁には、無数の記録ファイルが並んでいる。",
      "けれど、正面の文字だけが読めない。",
      "文字が、左右に反転している。",
      "そのままでは意味を持たない。",
      "どこかから、同じ声が聞こえる。",
      "「第2試験を開始します」",
      "「視点転換の認証を行います」",
      "「見えているものを、そのまま信じてはいけません」",
    ],
    puzzleTitle: "第2試験：視点転換",
    puzzleBody: [
      "記録は反転している。",
      "鏡の向こうに、白化現象の段階が記されている。",
      "反転した表示を読み取り、白化段階を入力してください。",
    ],
    successMessages: [
      "白化段階を確認しました。",
      "反転していた記録が、正しい向きで表示される。",
      "PHASE 1。",
      "それは、地球の終わりの始まりだった。",
      "記憶が、少しだけ戻る。",
      "ニュースの音声が聞こえる。",
      "「白化現象は一時的な気象異常です」",
      "けれど、その言葉は信じられなかった。",
      "危機は、見方を変えなければ見えなかった。",
    ],
    doorPrompt: "鏡面の扉が、言葉を待っている。",
  },
  "room-3": {
    kicker: "ROOM 03 / INTRO",
    introMessages: [
      "次の部屋は、異様なほど静かだった。",
      "壁には、いくつもの時計が並んでいる。",
      "すべての針が止まっている。",
      "時間だけが、この部屋に置き去りにされたようだった。",
      "正面の大きな時計は、白い光を放っている。",
      "機械音声が響く。",
      "「第3試験を開始します」",
      "「時間理解の認証を行います」",
      "「過去の規則を用いて、始まりの年を導いてください」",
    ],
    puzzleTitle: "第3試験：時間理解",
    puzzleBody: [
      "止まった時計と記録を読み取れ。",
      "AからDへ。",
      "反転した時刻を正しい向きに戻せ。",
      "EDEN-7計画が始動した年を入力してください。",
    ],
    successMessages: [
      "年号を確認しました。",
      "2068年。",
      "EDEN-7計画、正式始動。",
      "白い時計の針が、一度だけ震えた。",
      "止まっていたのは、時計ではない。",
      "人類が、未来へ進むことをためらった時間だった。",
      "あなたは、その年を知っている。",
      "記憶の奥で、誰かが言った。",
      "「この計画は、逃避ではありません」",
      "「地球へ戻るための準備です」",
    ],
    doorPrompt: "止まった時計の部屋が、次の認証を促している。",
  },
  "room-4": {
    kicker: "ROOM 04 / INTRO",
    introMessages: [
      "扉の先には、食堂が広がっていた。",
      "白い机と椅子が、規則正しく並んでいる。",
      "食器は置かれている。",
      "配膳口も、照明も、まだ生きている。",
      "けれど、人の声はしない。",
      "誰かがいたはずの場所だけが残っている。",
      "機械音声が聞こえた。",
      "「第4試験を開始します」",
      "「共同体理解の認証を行います」",
      "「不在を読み取ってください」",
    ],
    puzzleTitle: "第4試験：共同体理解",
    puzzleBody: [
      "食堂のメニューには、6つの項目が並んでいる。",
      "ダイズスープ / レンズ豆パン / モリンガ茶 / イオン水 / ナノ米 / イチゴ培養ジャム",
      "各項目の頭文字を順番に読んでください。",
    ],
    successMessages: [
      "答えを確認しました。",
      "ダレモイナイ。",
      "その言葉が、食堂の白い壁に反響する。",
      "一瞬だけ、食器の音が聞こえた。",
      "誰かの笑い声。",
      "向かいの席にいたはずの人。",
      "けれど次の瞬間、椅子だけが残っていた。",
      "全員は救えなかった。",
      "それでも、忘れてはいけない。",
      "未来は、一人で作るものではない。",
    ],
    doorPrompt: "食堂の扉が、次の証言を待っている。",
  },
  "room-5": {
    kicker: "ROOM 05 / INTRO",
    introMessages: [
      "白い扉の先に、緑があった。",
      "これまでの部屋とは違う。",
      "空気が、少しだけ柔らかい。",
      "ガラスの天井から、淡い光が差し込んでいる。",
      "植物たちは、静かに息をしているように見えた。",
      "機械音声が、少しだけ遠く聞こえる。",
      "「第5試験を開始します」",
      "「自然共生の認証を行います」",
      "「未来へ残すべきものを読み取ってください」",
    ],
    puzzleTitle: "第5試験：自然共生",
    puzzleBody: [
      "植物ラベルを順番に確認してください。",
      "1. ミント 2. ドクダミ 3. リンドウ 4. ヲダマキ",
      "5. ツバキ 6. ナデシコ 7. ゲッケイジュ",
      "各ラベルの1文字目を採取してください。",
    ],
    successMessages: [
      "答えを確認しました。",
      "ミドリヲツナゲ。",
      "温室の光が、少しだけ強くなる。",
      "小さな苗木を持つ手を思い出す。",
      "誰かが聞いた。",
      "「未来に持っていけるものを一つだけ選べるなら？」",
      "あなたは、迷わなかった。",
      "緑を選んだ。",
      "この施設は、人類を逃がすためだけの場所ではない。",
      "地球を、もう一度緑に戻すための場所だった。",
    ],
    doorPrompt: "温室の扉が、次の記録庫へ続いている。",
  },
  "room-6": {
    kicker: "ROOM 06 / INTRO",
    introMessages: [
      "次の部屋には、無数の記録が保管されていた。",
      "棚には、年代別のファイルが並んでいる。",
      "白化現象。",
      "EDEN-7計画。",
      "白庭選別施設。",
      "どれも、知らない言葉ではない気がした。",
      "機械音声が響く。",
      "「第6試験を開始します」",
      "「歴史理解の認証を行います」",
      "「記録を正しい順に並べ、あなたの立場を確認してください」",
    ],
    puzzleTitle: "第6試験：歴史理解",
    puzzleBody: [
      "以下の記録を年代順に並べてください。",
      "2039 白化現象、初観測 / 2054 植物の大量枯死 / 2068 EDEN-7始動",
      "2076 白庭選別施設 稼働開始 / 2083 第1次候補者 未来移送 / 2091 再生圏 受け入れ開始",
      "末尾に表示される候補者区分を入力してください。",
    ],
    successMessages: [
      "記録照合を完了しました。",
      "サイゴノコウホシャ。",
      "その言葉を見た瞬間、胸の奥が冷たくなる。",
      "記録端末に、あなたの情報が表示される。",
      "EDEN-7 Last Candidate。",
      "状態：記憶初期化済み。",
      "備考：本人の意思確認を再実施すること。",
      "あなたは偶然ここにいたのではない。",
      "あなたは、最後の候補者だった。",
      "そして、これは再試験だった。",
    ],
    doorPrompt: "最後の扉が、帰還認証の準備に入っている。",
  },
  "room-7": {
    kicker: "ROOM 07 / RETURN GATE",
    introMessages: [
      "最後の部屋は、白い光に満ちていた。",
      "正面には、巨大な円形ゲートがある。",
      "これまでの部屋とは違う。",
      "ここは、出口ではない。",
      "何かを選ぶための場所だ。",
      "機械音声が、静かに告げる。",
      "「第7試験を開始します」",
      "「未来選択の認証を行います」",
      "「これまで回復した記憶を照合してください」",
      "「あなたの最終意思を入力してください」",
    ],
    puzzleTitle: "最終試験：帰還認証",
    puzzleBody: [
      "帰還認証を開始します。",
      "これまでの部屋で取得した認証番号を使用し、回復した記憶ログから該当する文字を抽出してください。",
      "抽出した文字を、部屋を通過した順に並べてください。",
      "それが、あなたの最終意思です。",
    ],
    successMessages: [
      "最終意思を確認しました。",
      "チキュウヲモドセ。",
      "帰還ゲートが、静かに起動する。",
      "これまでの記憶が、ひとつにつながっていく。",
      "あなたは、未来へ逃げるために選ばれたのではない。",
      "地球を戻すために選ばれた。",
      "機械音声が、最後に告げる。",
      "「選別試験を終了します」",
      "「候補者の意思を確認しました」",
      "「ようこそ、2091年へ」",
    ],
    doorPrompt: "集めた記憶を束ね、最後の扉に答えを返す。",
  },
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
  phase: "intro",
  activeMessages: [],
  messageIndex: 0,
  revealedRecordStageId: null,
  menuOpen: false,
};

const startGameButton = document.getElementById("start-game-button");
const continueGameButton = document.getElementById("continue-game-button");
const settingsButton = document.getElementById("settings-button");
const settingsPanel = document.getElementById("settings-panel");
const titleAudioToggle = document.getElementById("title-audio-toggle");
const titleClearSaveButton = document.getElementById("title-clear-save-button");
const stageLabel = document.getElementById("stage-label");
const stageCounter = document.getElementById("stage-counter");
const themeChip = document.getElementById("theme-chip");
const ruleChip = document.getElementById("rule-chip");
const stageTitle = document.getElementById("stage-title");
const sceneIllustration = document.getElementById("scene-illustration");
const sceneArt = document.getElementById("scene-art");
const transitionVeil = document.getElementById("transition-veil");
const narrativeWindow = document.getElementById("narrative-window");
const windowKicker = document.getElementById("window-kicker");
const narrativeMessage = document.getElementById("narrative-message");
const narrativeNext = document.getElementById("narrative-next");
const messageProgress = document.getElementById("message-progress");
const doorButton = document.getElementById("door-button");
const doorPrompt = document.getElementById("door-prompt");
const menuToggle = document.getElementById("menu-toggle");
const menuCloseButton = document.getElementById("menu-close-button");
const menuScrim = document.getElementById("menu-scrim");
const menuDrawer = document.getElementById("menu-drawer");
const memoList = document.getElementById("memo-list");
const logbookStatus = document.getElementById("logbook-status");
const puzzleOverlay = document.getElementById("puzzle-overlay");
const puzzleKicker = document.getElementById("puzzle-kicker");
const puzzleTitle = document.getElementById("puzzle-title");
const puzzleBody = document.getElementById("puzzle-body");
const closePuzzleButton = document.getElementById("close-puzzle-button");
const hintText = document.getElementById("hint-text");
const feedback = document.getElementById("feedback");
const answerForm = document.getElementById("answer-form");
const answerInput = document.getElementById("answer-input");
const promptText = document.getElementById("prompt-text");
const hintButton = document.getElementById("hint-button");
const resetButton = document.getElementById("reset-button");
const audioToggle = document.getElementById("audio-toggle");
const clearSaveButton = document.getElementById("clear-save-button");
const dialog = document.getElementById("ending-dialog");
const endingKind = document.getElementById("ending-kind");
const endingTitle = document.getElementById("ending-title");
const endingText = document.getElementById("ending-text");
const dialogPrimary = document.getElementById("dialog-primary");
const dialogSecondary = document.getElementById("dialog-secondary");
const trueEndingCard = document.getElementById("true-ending-card");
const trueEndingKind = document.getElementById("true-ending-kind");
const trueEndingTitle = document.getElementById("true-ending-title");
const trueEndingCopy = document.getElementById("true-ending-copy");
const trueEndingRestart = document.getElementById("true-ending-restart");
const trueEndingTitleButton = document.getElementById("true-ending-title-button");
const audioButtons = [audioToggle, titleAudioToggle].filter(Boolean);

function triggerTransientClass(element, className, duration = 700) {
  if (!element) {
    return;
  }

  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);

  window.setTimeout(() => {
    element.classList.remove(className);
  }, duration);
}

function playSoundEffect(kind) {
  if (!state.audioEnabled || !state.audioContext || !state.gainNode) {
    return;
  }

  const now = state.audioContext.currentTime;
  const oneShot = (config) => {
    const oscillator = state.audioContext.createOscillator();
    const gain = state.audioContext.createGain();

    oscillator.type = config.type || "sine";
    oscillator.frequency.setValueAtTime(config.frequency, now);
    if (config.frequencyEnd) {
      oscillator.frequency.exponentialRampToValueAtTime(config.frequencyEnd, now + config.duration);
    }

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(config.gain || 0.02, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + config.duration);

    oscillator.connect(gain);
    gain.connect(state.gainNode);
    oscillator.start(now);
    oscillator.stop(now + config.duration + 0.04);
  };

  if (kind === "success") {
    oneShot({ type: "sine", frequency: 392, frequencyEnd: 523.25, duration: 0.24, gain: 0.016 });
    oneShot({ type: "triangle", frequency: 523.25, frequencyEnd: 659.25, duration: 0.32, gain: 0.014 });
    return;
  }

  if (kind === "error") {
    oneShot({ type: "sawtooth", frequency: 196, frequencyEnd: 138.59, duration: 0.22, gain: 0.012 });
    return;
  }

  if (kind === "ending-bad") {
    oneShot({ type: "square", frequency: 220, frequencyEnd: 164.81, duration: 0.28, gain: 0.012 });
    oneShot({ type: "triangle", frequency: 164.81, frequencyEnd: 146.83, duration: 0.4, gain: 0.01 });
    return;
  }

  if (kind === "ending-true") {
    oneShot({ type: "sine", frequency: 329.63, frequencyEnd: 392, duration: 0.3, gain: 0.016 });
    oneShot({ type: "triangle", frequency: 392, frequencyEnd: 523.25, duration: 0.42, gain: 0.014 });
    oneShot({ type: "sine", frequency: 523.25, frequencyEnd: 659.25, duration: 0.56, gain: 0.012 });
  }
}

function normalizeAnswer(value) {
  return value
    .normalize("NFKC")
    .replace(/[\s\u3000]+/g, "")
    .replace(/[ぁ-ゖ]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0x60))
    .toUpperCase();
}

function clampStageIndex(index) {
  return Math.max(0, Math.min(index, stages.length - 1));
}

function saveProgress() {
  try {
    if (state.stageIndex === 0 && state.maxReached === 0) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }

    const payload = {
      stageIndex: state.stageIndex,
      maxReached: state.maxReached,
      completed: state.maxReached >= stages.length,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore storage failures.
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

function formatRoomRecordLabel(roomNumber) {
  return `ROOM ${String(roomNumber).padStart(2, "0")}`;
}

function getAuthDisplay(stage) {
  return Array.isArray(stage.authNumbers) ? stage.authNumbers.join(" / ") : "";
}

function getStageScene(stage) {
  return stageScenes[stage.id] || stageScenes.intro;
}

function getSceneIllustration(stage) {
  return sceneIllustrations[stage.id] || sceneIllustrations.intro;
}

function hasResumeData() {
  return state.maxReached > 0;
}

function updateSaveStatus() {
  continueGameButton.disabled = !hasResumeData();
}

function setSettingsOpen(isOpen) {
  const nextOpen = Boolean(isOpen);
  settingsPanel.hidden = !nextOpen;
  settingsButton.setAttribute("aria-expanded", String(nextOpen));
}

function syncAudioButtons() {
  const label = state.audioEnabled ? "BGM ON" : "BGM OFF";
  for (const button of audioButtons) {
    button.textContent = label;
  }
}

function setMenuOpen(isOpen) {
  const nextOpen = Boolean(isOpen);
  state.menuOpen = nextOpen;
  menuDrawer.classList.toggle("is-open", nextOpen);
  menuDrawer.setAttribute("aria-hidden", String(!nextOpen));
  menuToggle.setAttribute("aria-expanded", String(nextOpen));
  menuScrim.hidden = !nextOpen;
}

function setPuzzleOpen(isOpen) {
  const nextOpen = Boolean(isOpen);
  puzzleOverlay.hidden = !nextOpen;
  if (nextOpen) {
    answerInput.focus();
  }
}

function setTrueEndingCardOpen(isOpen) {
  trueEndingCard.hidden = !isOpen;
}

function showTitleScreen() {
  document.body.dataset.view = "title";
  setMenuOpen(false);
  setPuzzleOpen(false);
  setTrueEndingCardOpen(false);
  state.loadedFromSave = hasResumeData();
  setSettingsOpen(false);
  updateSaveStatus();
  updateAudioForStage();
}

function showGameScreen() {
  document.body.dataset.view = "game";
  setSettingsOpen(false);
  setTrueEndingCardOpen(false);
}

function resetEphemeralState() {
  state.attempts = 0;
  state.hintIndex = 0;
  state.phase = "intro";
  state.activeMessages = [];
  state.messageIndex = 0;
}

function shouldRevealRecord(stage) {
  if (stage.roomNumber <= 0 || !stage.memoryLog || !stage.authNumbers) {
    return false;
  }

  if (state.maxReached > stage.roomNumber) {
    return true;
  }

  if (state.revealedRecordStageId === stage.id) {
    return true;
  }

  return stage.showRecordWhileActive === true && getCurrentStage().id === stage.id;
}

function renderLogbook() {
  memoList.innerHTML = "";
  const entries = stages.filter((stage) => shouldRevealRecord(stage));

  if (!entries.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "各部屋を抜けるたび、ここに記憶ログと認証番号が蓄積される。";
    memoList.append(empty);
    logbookStatus.textContent = "まだ記録はない";
    return;
  }

  logbookStatus.textContent =
    getCurrentStage().id === "room-7"
      ? `${entries.length} 件の記憶ログと認証番号を照合中`
      : `${entries.length} 件の記憶ログを回復済み`;

  for (const stage of entries) {
    const card = document.createElement("article");
    card.className = "memo-card";

    const title = document.createElement("h4");
    title.textContent = `${formatRoomRecordLabel(stage.roomNumber)}：${stage.title}`;

    const memory = document.createElement("p");
    memory.textContent = `記憶ログ：${stage.memoryLog}`;

    const auth = document.createElement("p");
    auth.textContent = `認証番号：${getAuthDisplay(stage)}`;

    card.append(title, memory, auth);
    memoList.append(card);
  }
}

function renderNarrativeWindow() {
  const total = state.activeMessages.length;
  const message = state.activeMessages[state.messageIndex] || "";
  narrativeWindow.hidden = total === 0;
  narrativeWindow.classList.toggle("is-clickable", total > 0);
  narrativeMessage.textContent = message;
  messageProgress.textContent = `${Math.min(state.messageIndex + 1, Math.max(total, 1))} / ${Math.max(total, 1)}`;

  if (state.phase === "success" && state.messageIndex === total - 1) {
    narrativeNext.textContent = getCurrentStage().id === "room-7" ? "クリックでエンディングへ" : "クリックで次の部屋へ";
    return;
  }

  if (state.phase === "intro" && state.messageIndex === total - 1) {
    narrativeNext.textContent = "クリックで扉を操作";
    return;
  }

  if (state.phase === "ending" && state.messageIndex === total - 1) {
    narrativeNext.textContent = "クリックでTRUE ENDへ";
    return;
  }

  narrativeNext.textContent = "クリックで続く";
}

function startNarrativeSequence(messages, phase, kicker) {
  state.phase = phase;
  state.activeMessages = messages.slice();
  state.messageIndex = 0;
  windowKicker.textContent = "Log";
  renderNarrativeWindow();
}

function setDoorEnabled(isEnabled, prompt = "") {
  const nextEnabled = Boolean(isEnabled);
  doorButton.hidden = !nextEnabled;
  doorButton.disabled = !nextEnabled;
  doorPrompt.hidden = !nextEnabled;
  doorPrompt.textContent = prompt;
}

function renderPuzzle(stage) {
  const scene = getStageScene(stage);
  puzzleKicker.textContent = stage.label;
  puzzleTitle.textContent = scene.puzzleTitle;
  puzzleBody.innerHTML = "";

  for (const paragraph of scene.puzzleBody) {
    const node = document.createElement("p");
    node.textContent = paragraph;
    puzzleBody.append(node);
  }

  answerForm.className = "answer-box";
  promptText.textContent = stage.prompt;
  hintText.textContent = stage.hintText;
  feedback.textContent = "";
  feedback.className = "feedback";
  answerInput.value = "";
}

function enterDoorPhase() {
  const stage = getCurrentStage();
  const scene = getStageScene(stage);
  state.phase = "door";
  state.activeMessages = [];
  state.messageIndex = 0;
  narrativeWindow.hidden = true;
  setDoorEnabled(true, scene.doorPrompt || "扉が反応している。");
}

function openPuzzle() {
  if (state.phase !== "door") {
    return;
  }

  setMenuOpen(false);
  state.phase = "puzzle";
  setDoorEnabled(false);
  renderPuzzle(getCurrentStage());
  setPuzzleOpen(true);
}

function closePuzzle() {
  if (state.phase !== "puzzle") {
    return;
  }

  setPuzzleOpen(false);
  enterDoorPhase();
}

function playStageEntry() {
  triggerTransientClass(sceneArt, "is-entering", 900);
  triggerTransientClass(transitionVeil, "is-receding", 900);
}

function renderStage() {
  const stage = getCurrentStage();
  const roomNumber = stage.roomNumber;
  const scene = getStageScene(stage);

  document.body.dataset.room = stage.id;
  menuToggle.hidden = false;
  stageLabel.textContent = stage.label;
  stageCounter.textContent = `${roomNumber} / 7 Rooms`;
  themeChip.textContent = stage.theme;
  ruleChip.textContent = stage.ruleTag;
  stageTitle.textContent = stage.title;
  sceneIllustration.src = getSceneIllustration(stage);
  sceneArt.className = `scene-art ${stage.artClass}`;
  state.revealedRecordStageId = null;
  setMenuOpen(false);
  setPuzzleOpen(false);
  setDoorEnabled(false);
  renderLogbook();
  updateSaveStatus();
  updateAudioForStage();
  saveProgress();
  startNarrativeSequence(scene.introMessages, "intro", scene.kicker || "Narrative");
  playStageEntry();
}

function renderTrueEndingStage() {
  document.body.dataset.room = "true-ending";
  menuToggle.hidden = true;
  stageLabel.textContent = trueEndingScene.label;
  stageCounter.textContent = trueEndingScene.counter;
  themeChip.textContent = trueEndingScene.theme;
  ruleChip.textContent = trueEndingScene.ruleTag;
  stageTitle.textContent = trueEndingScene.title;
  sceneIllustration.src = sceneIllustrations["true-end"];
  sceneArt.className = "scene-art stage-ending";
  setMenuOpen(false);
  setPuzzleOpen(false);
  setDoorEnabled(false);
  setTrueEndingCardOpen(false);
  renderLogbook();
  updateSaveStatus();
  updateAudioForStage();
  startNarrativeSequence(trueEndingScene.messages, "ending", trueEndingScene.kicker);
  playStageEntry();
}

function showEnding(data, mode) {
  endingKind.textContent = data.kind;
  endingTitle.textContent = data.title;
  endingText.textContent = data.text;
  dialog.classList.remove("success-mode", "bad-mode");

  if (mode === "success") {
    dialogPrimary.textContent = "最初から遊ぶ";
    dialogSecondary.textContent = "閉じる";
    dialog.classList.add("success-mode");
    playSoundEffect("ending-true");
  } else {
    dialogPrimary.textContent = "この部屋からやり直す";
    dialogSecondary.textContent = "タイトルへ";
    dialog.classList.add("bad-mode");
    playSoundEffect("ending-bad");
  }

  dialog.dataset.mode = mode;
  dialog.showModal();
}

function showTrueEndingCard() {
  trueEndingKind.textContent = "TRUE END";
  trueEndingTitle.textContent = trueEndingScene.title;
  trueEndingCopy.textContent = trueEndingScene.cardCopy;
  setTrueEndingCardOpen(true);
  playSoundEffect("ending-true");
}

function advanceStage() {
  triggerTransientClass(sceneArt, "is-transitioning", 900);
  triggerTransientClass(transitionVeil, "is-active", 520);

  state.stageIndex += 1;
  state.maxReached = Math.max(state.maxReached, state.stageIndex);
  state.loadedFromSave = true;
  resetEphemeralState();

  if (state.stageIndex >= stages.length) {
    state.stageIndex = stages.length - 1;
    state.maxReached = stages.length;
    window.setTimeout(() => {
      saveProgress();
      updateSaveStatus();
      renderLogbook();
      renderTrueEndingStage();
    }, 420);
    return;
  }

  window.setTimeout(() => {
    renderStage();
  }, 320);
}

function finishNarrativeSequence() {
  if (state.phase === "intro") {
    enterDoorPhase();
    return;
  }

  if (state.phase === "success") {
    advanceStage();
    return;
  }

  if (state.phase === "ending") {
    narrativeWindow.hidden = true;
    showTrueEndingCard();
  }
}

function advanceNarrative() {
  if (state.phase !== "intro" && state.phase !== "success" && state.phase !== "ending") {
    return;
  }

  if (state.messageIndex < state.activeMessages.length - 1) {
    state.messageIndex += 1;
    renderNarrativeWindow();
    return;
  }

  finishNarrativeSequence();
}

function startSuccessSequence(stage) {
  const scene = getStageScene(stage);
  state.revealedRecordStageId = stage.id;
  renderLogbook();
  setPuzzleOpen(false);
  setDoorEnabled(false);
  startNarrativeSequence(scene.successMessages, "success", `${stage.label} / MEMORY LOG`);
}

function resetRun() {
  setMenuOpen(false);
  showTitleScreen();
}

function retryCurrentRoom() {
  resetEphemeralState();
  setPuzzleOpen(false);
  setMenuOpen(false);
  renderStage();
}

function startFreshGame() {
  state.stageIndex = 0;
  state.maxReached = 0;
  state.loadedFromSave = false;
  state.revealedRecordStageId = null;
  resetEphemeralState();
  clearStoredProgress();
  showGameScreen();
  renderStage();
}

function continueSavedGame() {
  if (!hasResumeData()) {
    return;
  }

  state.revealedRecordStageId = null;
  resetEphemeralState();
  showGameScreen();
  renderStage();
}

function clearProgressAndReturnToTitle() {
  state.stageIndex = 0;
  state.maxReached = 0;
  state.loadedFromSave = false;
  state.revealedRecordStageId = null;
  resetEphemeralState();
  clearStoredProgress();
  renderLogbook();
  updateSaveStatus();
  showTitleScreen();
}

answerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const stage = getCurrentStage();
  const input = normalizeAnswer(answerInput.value);

  if (!input) {
    feedback.textContent = "空欄では認証できない。";
    feedback.className = "feedback error";
    triggerTransientClass(answerForm, "is-invalid", 520);
    return;
  }

  const isCorrect = stage.answer.some((answer) => normalizeAnswer(answer) === input);

  if (isCorrect) {
    playSoundEffect("success");
    triggerTransientClass(answerForm, "is-valid", 720);
    triggerTransientClass(sceneArt, "is-success", 720);
    feedback.textContent = "認証を受理しました。";
    feedback.className = "feedback success";
    window.setTimeout(() => {
      startSuccessSequence(stage);
    }, 240);
    return;
  }

  state.attempts += 1;
  feedback.textContent =
    stage.wrongMessage || "反応はない。部屋のルールをもう一度見直す必要がある。";
  feedback.className = "feedback error";
  triggerTransientClass(answerForm, "is-invalid", 620);
  triggerTransientClass(sceneArt, "is-error", 620);
  triggerTransientClass(feedback, "is-pop", 520);
  playSoundEffect("error");

  if (stage.badEnding && state.attempts >= 3) {
    window.setTimeout(() => showEnding(stage.badEnding, "bad"), 300);
  }
});

hintButton.addEventListener("click", () => {
  const stage = getCurrentStage();

  if (state.hintIndex >= stage.hints.length) {
    hintText.textContent = "これ以上のヒントはない。もう解けるはずだ。";
    triggerTransientClass(feedback, "is-pop", 520);
    return;
  }

  hintText.textContent = stage.hints[state.hintIndex];
  state.hintIndex += 1;
  triggerTransientClass(feedback, "is-pop", 520);
});

narrativeWindow.addEventListener("click", () => {
  advanceNarrative();
});

narrativeWindow.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    advanceNarrative();
  }
});

doorButton.addEventListener("click", () => {
  openPuzzle();
});

menuToggle.addEventListener("click", () => {
  setMenuOpen(!state.menuOpen);
});

menuCloseButton.addEventListener("click", () => {
  setMenuOpen(false);
});

menuScrim.addEventListener("click", () => {
  setMenuOpen(false);
});

closePuzzleButton.addEventListener("click", () => {
  closePuzzle();
});

resetButton.addEventListener("click", () => {
  resetRun();
});

clearSaveButton.addEventListener("click", () => {
  clearProgressAndReturnToTitle();
});

startGameButton.addEventListener("click", () => {
  startFreshGame();
});

continueGameButton.addEventListener("click", () => {
  continueSavedGame();
});

settingsButton.addEventListener("click", () => {
  setSettingsOpen(settingsPanel.hidden);
});

titleClearSaveButton.addEventListener("click", () => {
  clearProgressAndReturnToTitle();
});

dialogPrimary.addEventListener("click", () => {
  const mode = dialog.dataset.mode;
  dialog.close();

  if (mode === "success") {
    startFreshGame();
    return;
  }

  retryCurrentRoom();
});

dialogSecondary.addEventListener("click", () => {
  const mode = dialog.dataset.mode;
  dialog.close();

  if (mode === "success") {
    showTitleScreen();
    return;
  }

  resetRun();
});

trueEndingRestart.addEventListener("click", () => {
  startFreshGame();
});

trueEndingTitleButton.addEventListener("click", () => {
  showTitleScreen();
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
    syncAudioButtons();
    updateAudioForStage();
    return;
  }

  state.audioEnabled = false;
  syncAudioButtons();
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

  const room = document.body.dataset.view === "title" ? 0 : getCurrentRoomNumber();
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

for (const button of audioButtons) {
  button.addEventListener("click", () => {
    toggleAudio().catch(() => {
      feedback.textContent = "この環境ではBGMを開始できなかった。";
      feedback.className = "feedback error";
    });
  });
}

loadProgress();
syncAudioButtons();
renderLogbook();
updateSaveStatus();
renderStage();
showTitleScreen();
