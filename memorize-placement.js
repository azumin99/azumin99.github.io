// --------- memorize-placement.js ---------
(() => {
  const KEY = 'karutaSettings.v1';
  const ta = document.querySelector('.title-box textarea');
  if(!ta) return;

  const load = () => {
    try{ return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch{ return {}; }
  };

  const asOnOff = v => (v ? 'ON' : 'OFF');
  const dirLabel = v => ({random:'ランダム', normal:'正方向', reverse:'逆さま'}[v] || 'ランダム');

  const initRender = () => {
    const s = load();
    const lines = [
      `向き,${dirLabel(s.direction)}`,
      `変化,${asOnOff(!!s.changing)}`,
      `自動,${asOnOff(!!s.autoAdvance)}`,
      `待機,${(s.waitMs ?? 500)}ms`,
      `枚数,${(s.count ?? 100)}`,
      `限定,${asOnOff(!!s.allOrPart)}`,
      '',
      '決まり字一覧(番号だけ)',
      Array.isArray(s.selectedIds)
        ? s.selectedIds.map(Number).sort((a,b)=>a-b).join(',')
        : ''
    ];
    ta.value = lines.join('\n');
  };

  // 初期表示
  initRender();
  // 設定画面で変更→戻ってきたとき等、他タブからの更新も反映
  window.addEventListener('storage', (ev) => {
    if(ev.key === KEY) initRender();
  });
})();

const kimariji1 = [
    { id: 108, s: "う" }, { id: 109, s: "つ" }, { id: 110, s: "し" }, { id: 111, s: "も" }, { id: 112, s: "ゆ" },
    { id: 113, s: "い" }, { id: 128, s: "いま" }, { id: 114, s: "ち" }, { id: 129, s: "ちぎ" },
    { id: 115, s: "ひ" }, { id: 129, s: "ひと" }, { id: 116, s: "き" }, { id: 130, s: "きみ" },
    { id: 117, s: "は" }, { id: 131, s: "はな" }, { id: 132, s: "はる" }, { id: 118, s: "や" }, { id: 133, s: "やま" },
    { id: 119, s: "よ" }, { id: 134, s: "よの" }, { id: 120, s: "か" }, { id: 135, s: "かぜ" },
    { id: 121, s: "み" }, { id: 136, s: "みか" }, { id: 122, s: "た" }, { id: 123, s: "こ" }, { id: 137, s: "ここ" },
    { id: 124, s: "お" }, { id: 138, s: "おお" }, { id: 125, s: "わ" }, { id: 139, s: "わが" }, { id: 140, s: "わす" }, { id: 141, s: "わた" },
    { id: 126, s: "な" }, { id: 142, s: "なが" }, { id: 143, s: "なげ" }, { id: 144, s: "なに" }, { id: 145, s: "なにわ" },
    { id: 127, s: "あ" }, { id: 146, s: "あき" }, { id: 147, s: "あさ" }, { id: 148, s: "あさぼ" },
    { id: 149, s: "あま" }, { id: 150, s: "あら" }, { id: 151, s: "あり" }, { id: 152, s: "あわ" }
];
const kimariji2 = [
    { id: 87, s: "む" }, { id: 18, s: "す" }, { id: 57, s: "め" }, { id: 22, s: "ふ" }, { id: 70, s: "さ" }, { id: 81, s: "ほ" }, { id: 77, s: "せ" },
    { id: 74, s: "うか" }, { id: 65, s: "うら" }, { id: 23, s: "つき" }, { id: 13, s: "つく" }, { id: 40, s: "しの" }, { id: 37, s: "しら" }, { id: 100, s: "もも" }, { id: 66, s: "もろ" }, { id: 71, s: "ゆう" }, { id: 46, s: "ゆら" },
    { id: 61, s: "いに" }, { id: 21, s: "いまこ" }, { id: 63, s: "いまは" }, { id: 75, s: "ちぎりお" }, { id: 42, s: "ちぎりき" }, { id: 17, s: "ちは" },
    { id: 33, s: "ひさ" }, { id: 35, s: "ひとは" }, { id: 99, s: "ひとも" }, { id: 50, s: "きみがためお" }, { id: 15, s: "きみがためは" }, { id: 91, s: "きり" },
    { id: 96, s: "はなさ" }, { id: 9, s: "はなの" }, { id: 2, s: "はるす" }, { id: 67, s: "はるの" }, { id: 47, s: "やえ" }, { id: 59, s: "やす" }, { id: 32, s: "やまが" }, { id: 28, s: "やまざ" },
    { id: 93, s: "よのなかは" }, { id: 83, s: "よのなかよ" }, { id: 85, s: "よも" }, { id: 62, s: "よを" }, { id: 51, s: "かく" }, { id: 6, s: "かさ" }, { id: 98, s: "かぜそ" }, { id: 48, s: "かぜを" },
    { id: 49, s: "みかき" }, { id: 27, s: "みかの" }, { id: 90, s: "みせ" }, { id: 14, s: "みち" }, { id: 94, s: "みよ" },
    { id: 73, s: "たか" }, { id: 55, s: "たき" }, { id: 4, s: "たご" }, { id: 16, s: "たち" }, { id: 89, s: "たま" }, { id: 34, s: "たれ" },
    { id: 41, s: "こい" }, { id: 29, s: "こころあ" }, { id: 68, s: "こころに" }, { id: 97, s: "こぬ" }, { id: 24, s: "この" }, { id: 10, s: "これ" },
    { id: 60, s: "おおえ" }, { id: 95, s: "おおけ" }, { id: 44, s: "おおこ" }, { id: 5, s: "おく" }, { id: 26, s: "おぐ" }, { id: 72, s: "おと" }, { id: 82, s: "おも" },
    { id: 8, s: "わがい" }, { id: 92, s: "わがそ" }, { id: 38, s: "わすら" }, { id: 54, s: "わすれ" }, { id: 76, s: "わたのはらこ" }, { id: 11, s: "わたのはらや" }, { id: 20, s: "わび" },
    { id: 80, s: "ながか" }, { id: 84, s: "ながら" }, { id: 53, s: "なげき" }, { id: 86, s: "なげけ" }, { id: 36, s: "なつ" }, { id: 25, s: "なにし" }, { id: 88, s: "なにわえ" }, { id: 19, s: "なにわが" },
    { id: 43, s: "あい" }, { id: 79, s: "あきか" }, { id: 1, s: "あきの" }, { id: 52, s: "あけ" }, { id: 39, s: "あさじ" }, { id: 31, s: "あさぼらけあ" }, { id: 64, s: "あさぼらけう" },
    { id: 3, s: "あし" }, { id: 12, s: "あまつ" }, { id: 7, s: "あまの" }, { id: 56, s: "あらざ" }, { id: 69, s: "あらし" }, { id: 30, s: "ありあ" }, { id: 58, s: "ありま" }, { id: 78, s: "あわじ" }, { id: 45, s: "あわれ" }
];

const halfRow = 3, ROWS = 6, COLS = 11;
const middle = halfRow * COLS, TOTAL = ROWS * COLS;
const MAX_IMAGES = 66;
const grid = document.getElementById('grid');
const shuffleBtn = document.getElementById('shuffleBtn');
const isVisibleBtn = document.getElementById('changeVisible');
const BASE_SCALE = 0.09;    // iPhone XR * 0.055

const revealedIds = new Set();   // 非表示モードで「見せる」と決めた札IDの集合
const selectedIndividuals = new Set();

const groupRowByPrefix = new Map();
const indivRowById = new Map();

// ★ 追加：グループ → 個別札ID[] のマップを作成
const groupMap = new Map();
kimariji1.forEach(g => {
    const ids = kimariji2
        .filter(k => k.s.startsWith(g.s))
        .map(k => k.id);
    groupMap.set(g.s, ids);
});

// blank.png の実寸を読み取り、CSS変数を更新
function setSizeFromFirst() {
    return new Promise((resolve) => {
        const probe = new Image();
        probe.onload = () => {
            const w = probe.naturalWidth * BASE_SCALE;
            const h = probe.naturalHeight * BASE_SCALE;
            const r = document.documentElement.style;
            r.setProperty('--w', w + 'px');
            r.setProperty('--h', h + 'px');
            resolve({ w, h });
        };
        probe.onerror = () => resolve();
        probe.src = 'cards/blank.png';
    });
}
var cardsList = [];
var isVisible = true;
var noneCards = [
    false, false, false, false, false, true, true, false, false, false, false,
    false, false, false, false, true, true, true, false, false, false, false,
    false, false, false, false, true, true, true, false, false, false, false,
    false, false, false, false, true, true, true, false, false, false, false,
    false, false, false, false, true, true, true, false, false, false, false,
    false, false, false, false, true, true, false, false, false, false, false
];
var notShow = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

// 1..MAX_IMAGES をシャッフルして先頭 TOTAL 件を返す（重複なし）
function pickNumbers() {
    cardsList = Array.from({ length: MAX_IMAGES }, (_, i) => i + 1);
    for (let i = cardsList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsList[i], cardsList[j]] = [cardsList[j], cardsList[i]];
    }
    return cardsList.slice(0, TOTAL);
}

// 画像を配置
function render() {
    // ★ 変更：非表示モードでも revealedIds に含まれる札だけは見せる
    const nums = cardsList.map(id => (isVisible || revealedIds.has(id)) ? id : 0);
    const frag = document.createDocumentFragment();
    const appendCell = (i, cssPropertyName) => {
        const cell = document.createElement('div');
        cell.className = cssPropertyName;
        const img = document.createElement('img');
        img.alt = `${nums[i]}.png`;
        if (!noneCards[i]) {
            img.src = `cards/${nums[i]}.png`;
            cell.appendChild(img);
        }
        frag.appendChild(cell);
    };
    for (let i = 0; i < middle; i++) appendCell(i, 'cell flip');
    for (let i = middle; i < TOTAL; i++) appendCell(i, 'cell');

    grid.innerHTML = '';
    grid.appendChild(frag);
}

// ★ 新：選択状態から UI と盤面(非表示時)を一括再計算
function recomputeUI() {
    // まず行の見た目を更新
    indivRowById.forEach((row, id) => {
        row.classList.toggle('selected', selectedIndividuals.has(id));
    });
    groupRowByPrefix.forEach((row, prefix) => {
        const ids = groupMap.get(prefix) || [];
        const allSelected = ids.length > 0 && ids.every(id => selectedIndividuals.has(id));
        row.classList.toggle('selected', allSelected);
    });

    // 非表示モード時のみ、選択＝“見せる札”に反映
    revealedIds.clear();
    if (!isVisible) {
         // none ではないマスに置かれている札だけを対象
        const onBoard = new Set();
        for (let i = 0; i < TOTAL; i++) {
            if (!noneCards[i]) onBoard.add(cardsList[i]);
        }
        selectedIndividuals.forEach(id => { if (onBoard.has(id)) revealedIds.add(id); });
        render(); // 盤面反映
    }
}


// ★ 新：グループの選択トグル（常時可、非表示時は盤面も反映）
document.getElementById('listGroup').addEventListener('click', (e) => {
    const row = e.target.closest('.list-row');
    if (!row) return;
    const m = (row.textContent || '').match(/：(.+?)\s*$/);
    if (!m) return;
    const prefix = m[1].trim();

    const ids = groupMap.get(prefix) || [];
    const allSelected = ids.length > 0 && ids.every(id => selectedIndividuals.has(id));
    if (allSelected) {
        ids.forEach(id => selectedIndividuals.delete(id));
    } else {
        ids.forEach(id => selectedIndividuals.add(id));
    }
    recomputeUI();
});
// ★ 追加：個別の選択トグル（常時可）
document.getElementById('listIndividual').addEventListener('click', (e) => {
    const row = e.target.closest('.list-row');
    if (!row) return;
    const m = (row.textContent || '').match(/#(\d+)/);
    if (!m) return;
    const id = +m[1];
    if (selectedIndividuals.has(id)) selectedIndividuals.delete(id);
    else selectedIndividuals.add(id);
    recomputeUI();
});


// イベント: シャッフル（再抽選して表示モードに戻す）
shuffleBtn.addEventListener('click', () => {
    cardsList = pickNumbers();
    isVisible = true;
    revealedIds.clear();
    selectedIndividuals.clear();    //シャッフル時に、選択情報も合わせてリセットする。
    render();
    recomputeUI();
});

// イベント: 表示 ⇄ 非表示
isVisibleBtn.addEventListener('click', () => {
    isVisible = !isVisible;
    if (!isVisible) revealedIds.clear();
    render();
    recomputeUI();
});



// 初期化
(async function init() {
    await setSizeFromFirst();
    cardsList = pickNumbers();
    isVisible = true;

    // ★ 追加：行要素をマップ化
    document.querySelectorAll('#listGroup .list-row').forEach(row => {
        const m = (row.textContent || '').match(/：(.+?)\s*$/);
        if (m) { groupRowByPrefix.set(m[1].trim(), row); }
    });
    document.querySelectorAll('#listIndividual .list-row').forEach(row => {
        const m = (row.textContent || '').match(/#(\d+)/);
        if (m) { indivRowById.set(+m[1], row); }
    });

    render();
    recomputeUI();
})();
