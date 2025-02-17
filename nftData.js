document.addEventListener('DOMContentLoaded', function() {
    // NFTデータの定義
    const nftData = [
      {
        id: 1,
        title: "MIYABI #001: 青波 - 波紋の継承者",
        description: [
          "【日本語】",
          "古都・鎌倉の染織師の家系に生まれた青波（あおなみ）は、",
          "代々受け継がれる「藍染」の技術を持つ若きアーティスト。",
          "静かな湖のように落ち着いた雰囲気を漂わせながらも、",
          "時に大きな波を巻き起こすような情熱を胸に秘める。",
          "現在はデジタルアートと伝統染織の融合を目指し、",
          "「深き海の色彩」を作品に宿すべく挑戦を続けている。",
          "",
          "---",
          "### English Version",
          "Aonami, hailing from a family of textile artisans in old Kamakura,",
          "carries on the centuries-old tradition of indigo dyeing.",
          "Calm like a still lake on the surface, yet hiding a passion that can surge like mighty waves.",
          "He strives to merge digital art with ancient techniques,",
          "capturing the 'deep ocean hues' in every creation he produces."
        ].join("\n"),
        image: "assets/nft1.jpg",
        style: "現代絞り染め",
        method: "デジタル描画・染色融合",
        accessory: "波模様の着物",
        collection: "MIYABI",
        traits: {
          personality: "穏やか・芯の強さ",
          specialty: "藍染とデジタルの融合",
          origin: "鎌倉",
          currentBase: "東京",
          fourCharacterIdiom: "蒼潮夢韻"
        }
      },
      {
        id: 2,
        title: "MIYABI #002: 鶴凛 - 武家の名残を継ぐ剣士",
        description: [
          "【日本語】",
          "鶴凛（かくりん）は古くから鶴の家紋を戴く武家の血統。",
          "幼少期から刀の道を歩み、都会でフリーの護衛や傭兵として生計を立てる。",
          "礼儀を重んじるストイックさと、家名を守る誇りから、",
          "\"雅\"を巡る争いにも徐々に引き込まれていく。",
          "",
          "---",
          "### English Version",
          "Kakurin descends from a samurai lineage known for the crane emblem.",
          "Trained in the sword since childhood, he now works as a mercenary in the modern city.",
          "Reserved yet proud, his unwavering courtesy and honor lead him into the unfolding conflict over \"MIYABI.\""
        ].join("\n"),
        image: "assets/nft2.jpg",
        style: "和武術×都会派",
        method: "伝統剣術 + 現代警護スキル",
        accessory: "鶴の家紋",
        collection: "MIYABI",
        traits: {
          personality: "礼儀正しい・内に誇り",
          specialty: "剣技・護衛",
          origin: "武家家系",
          currentBase: "大都市",
          fourCharacterIdiom: "鶴影剣厳"
        }
      },
      {
        id: 3,
        title: "MIYABI #003: 四季（しき）",
        description: [
          "【日本語】",
          "四季（しき）は日本の四季をテーマにしたデザイナー。",
          "自然の移ろいを着物やテキスタイルアートに落とし込み、",
          "儀式で必要な四季のモチーフを創り出す存在。",
          "",
          "---",
          "### English Version",
          "Shiki is a designer inspired by Japan's four seasons.",
          "She incorporates the changing beauty of nature into kimono and textile art,",
          "serving a vital role in creating seasonal motifs for sacred ceremonies."
        ].join("\n"),
        image: "assets/nft3.jpg",
        style: "季節",
        method: "デジタル描画 + テキスタイル",
        accessory: "花と季節のモチーフ",
        collection: "MIYABI",
        traits: {
          personality: "優美・自然への共感",
          specialty: "四季折々のテキスタイル",
          origin: "日本各地",
          currentBase: "移動しながら創作",
          fourCharacterIdiom: "彩季巡映"
        }
      },
      {
        id: 4,
        title: "MIYABI #004: 牙堂（がどう） - 義足の無骨剣士",
        description: [
          "【日本語】",
          "牙堂（がどう）は幼少期の事故で片脚を失い、サイバー義足を装備。",
          "かつては裏社会に身を置いていたが、今は街の自警団として闇勢力と対峙する。",
          "無骨な性格だが、弱者を放っておけない不器用な優しさを持つ。",
          "",
          "---",
          "### English Version",
          "Gadō lost one leg in a childhood accident and now wields a cybernetic limb.",
          "Once immersed in the underworld, he has turned to vigilante work to protect the city from dark forces.",
          "Though rough around the edges, he cannot abandon the defenseless, hinting at a hidden kindness."
        ].join("\n"),
        image: "assets/nft4.jpg",
        style: "サイバー義足×ストリート",
        method: "義足加速装置 + 近接格闘",
        accessory: "機械的脚部",
        collection: "MIYABI",
        traits: {
          personality: "無骨・正義感",
          specialty: "加速剣術",
          origin: "スラム街",
          currentBase: "裏路地〜市街地",
          fourCharacterIdiom: "機肢鋼烈"
        }
      },
      {
        id: 5,
        title: "MIYABI #005: 華鞠（かまり） - バイオ華道の新星",
        description: [
          "【日本語】",
          "華鞠（かまり）は華道家の名門に生まれ、バイオテクノロジーで新品種の花を創るアーティスト。",
          "花に絶対の美を求めるあまり、自然の摂理を越えた改変にも踏み込みつつある。",
          "",
          "---",
          "### English Version",
          "Kamari, born into a prestigious flower-arranging family, is an artist who uses biotechnology to create new species of blossoms.",
          "Driven by her quest for absolute floral beauty, she verges on transcending natural limits."
        ].join("\n"),
        image: "assets/nft5.jpg",
        style: "華道×バイオテック",
        method: "遺伝子操作 + 花アート",
        accessory: "特製バイオ花",
        collection: "MIYABI",
        traits: {
          personality: "優雅・執着心",
          specialty: "花の育成＆改変",
          origin: "華道名門",
          currentBase: "研究所アトリエ",
          fourCharacterIdiom: "華遼夢彩"
        }
      },
      {
        id: 6,
        title: "MIYABI #006: 鼓音（つづね） - 音の錬金術師",
        description: [
          "【日本語】",
          "鼓音（つづね）は伝統楽器と電子音楽を融合させるサウンドメーカー。",
          "SNSライブで世界中を沸かせ、儀式で\"音\"を用いた封印解除をサポートするムードメーカー。",
          "",
          "---",
          "### English Version",
          "Tsudzune blends traditional instruments with electronic music,",
          "electrifying global audiences through SNS live streams.",
          "As a master of sonic alchemy, she aids in ritual seal-breaking, stirring hearts with her beats."
        ].join("\n"),
        image: "assets/nft6.jpg",
        style: "和楽器×EDM",
        method: "デジタルサンプラー + 生演奏",
        accessory: "鼓・三味線",
        collection: "MIYABI",
        traits: {
          personality: "陽気・情熱・ライブ配信",
          specialty: "音による封印解除",
          origin: "不明（全国行脚）",
          currentBase: "SNSを通じ世界",
          fourCharacterIdiom: "鼓音律響"
        }
      },
      {
        id: 7,
        title: "MIYABI #007: 紅霞（こうか） - 鮮紅の革新デザイナー",
        description: [
          "【日本語】",
          "紅霞（こうか）は紅の染色技術を極める家系に生まれ、",
          "海外でファッションを学んだ後に帰国。鮮烈なコレクションで人々を魅了し、",
          "\"紅\"に秘められた雅の力を知るや、世界的ファッションショーを計画する。",
          "",
          "---",
          "### English Version",
          "Kōka, heir to a lineage mastering the art of crimson dye,",
          "returned from overseas fashion study to unveil her striking collections.",
          "Captivated by the hidden power of \"red,\" she now prepares a global fashion show spotlighting MIYABI's essence."
        ].join("\n"),
        image: "assets/nft7.jpg",
        style: "紅染ファッション",
        method: "伝統染色 + 前衛デザイン",
        accessory: "赤い装飾",
        collection: "MIYABI",
        traits: {
          personality: "完璧主義・華やか",
          specialty: "紅染コレクション",
          origin: "紅染の家系",
          currentBase: "東京ファッションシーン",
          fourCharacterIdiom: "紅霞絢映"
        }
      },
      {
        id: 8,
        title: "MIYABI #008: 白牙（はくが） - 闇に佇む白き影",
        description: [
          "【日本語】",
          "白牙（はくが）はアルビノ体質で、忍者集団に育てられた暗殺者。",
          "闇に生きながらも、自身の\"白\"に宿る意味を探し始め、",
          "やがて\"雅\"との出会いに運命を感じるようになる。",
          "",
          "---",
          "### English Version",
          "Hakuga, born with albinism and raised among ninja clans,",
          "operates in the shadows as a silent assassin.",
          "Haunted by his own \"whiteness,\" he's drawn toward MIYABI, sensing a destiny beyond darkness."
        ].join("\n"),
        image: "assets/nft8.jpg",
        style: "アルビノ忍者",
        method: "暗殺術 + 闇装束",
        accessory: "白髪・白の衣",
        collection: "MIYABI",
        traits: {
          personality: "無口・冷徹",
          specialty: "隠密行動",
          origin: "忍者集団",
          currentBase: "暗黒街",
          fourCharacterIdiom: "白狩冥迅"
        }
      },
      {
        id: 9,
        title: "MIYABI #009: 幽面（ゆうめん） - 面に宿る幽玄の力",
        description: [
          "【日本語】",
          "幽面（ゆうめん）は能面師の家系に生まれ、AR技術を使って新たな\"面\"文化を発信する。",
          "自身の素顔を決して見せないミステリアスさで、面に映る\"雅\"の霊力を解放する。",
          "",
          "---",
          "### English Version",
          "Yūmen, born into a lineage of Noh mask artisans,",
          "innovates AR-based \"masks\" that unveil hidden mystique.",
          "His true face remains unknown, as he channels MIYABI's spiritual force through each mask he crafts."
        ].join("\n"),
        image: "assets/nft9.jpg",
        style: "能面×AR",
        method: "木彫 + デジタル投影",
        accessory: "多彩な面",
        collection: "MIYABI",
        traits: {
          personality: "神秘・寡黙",
          specialty: "面による霊力可視化",
          origin: "能面師の家系",
          currentBase: "不明",
          fourCharacterIdiom: "幽面幻刻"
        }
      },
      {
        id: 10,
        title: "MIYABI #010: 修羅（しゅら） - 赤きサイバー鎧の孤高戦士",
        description: [
          "【日本語】",
          "修羅（しゅら）は没落した武家の名残を継ぎつつ、",
          "自作の赤いサイバーアーマーを纏い、街の最前線で闘う孤高の戦士。",
          "自身を「修羅の道に生きる者」と呼び、苛烈なバトルを望む。",
          "",
          "---",
          "### English Version",
          "Shura, a scion of a fallen samurai bloodline,",
          "dons a self-crafted crimson cyber-armor to battle on the city's front lines.",
          "Declaring himself a lone warrior on the \"path of Ashura,\" he relentlessly pursues intense combat."
        ].join("\n"),
        image: "assets/nft10.jpg",
        style: "武家没落×サイバー装甲",
        method: "自作アーマー + 刀剣",
        accessory: "紅い甲冑",
        collection: "MIYABI",
        traits: {
          personality: "苛烈・孤高",
          specialty: "激戦を好む",
          origin: "没落武家",
          currentBase: "廃墟のアジト",
          fourCharacterIdiom: "修羅赫鎧"
        }
      },
      {
        id: 11,
        title: "MIYABI #011: 刀匠 - 刀鍛冶の継承者",
        titleJa: "MIYABI #011: 刀匠 - 刀鍛冶の継承者",
        description: "伝統的な日本刀製作技術を現代に伝える若き刀匠。芸術性と実用性の両立を追求する。",
        image: "assets/nft11.jpg",
        traits: {
          personality: "職人気質・真摯",
          specialty: "刀鍛冶",
          origin: "岐阜",
          currentBase: "関市",
          fourCharacterIdiom: "刀魂永世"
        }
      },
      {
        id: 12,
        title: "MIYABI #012: 漆雅 - 漆芸家",
        titleJa: "MIYABI #012: 漆雅 - 漆芸家",
        description: "伝統的な漆芸技法を現代アートに応用する革新的な作家。独自の表現方法を確立。",
        image: "assets/nft12.jpg",
        traits: {
          personality: "創造的・緻密",
          specialty: "漆芸",
          origin: "輪島",
          currentBase: "金沢",
          fourCharacterIdiom: "漆黒光華"
        }
      },
      {
        id: 13,
        title: "MIYABI #013: 花道 - いけばなの革新者",
        titleJa: "MIYABI #013: 花道 - いけばなの革新者",
        description: "伝統的ないけばなに現代アートの要素を取り入れ、新しい表現方法を確立する若手芸術家。",
        image: "assets/nft13.jpg",
        traits: {
          personality: "感性豊か・先進的",
          specialty: "いけばな",
          origin: "京都",
          currentBase: "東京",
          fourCharacterIdiom: "花鳥風月"
        }
      },
      {
        id: 14,
        title: "MIYABI #014: 墨香 - 水墨画家",
        titleJa: "MIYABI #014: 墨香 - 水墨画家",
        description: "伝統的な水墨画に独自の解釈を加え、現代的な表現を追求する画家。",
        image: "assets/nft14.jpg",
        traits: {
          personality: "静寂・深遠",
          specialty: "水墨画",
          origin: "鎌倉",
          currentBase: "箱根",
          fourCharacterIdiom: "墨韻風雅"
        }
      },
      {
        id: 15,
        title: "MIYABI #015: 陶心 - 陶芸の探求者",
        titleJa: "MIYABI #015: 陶心 - 陶芸の探求者",
        description: "伝統的な陶芸技法と現代的なデザインを融合させ、新しい陶芸の形を追求する。",
        image: "assets/nft15.jpg",
        traits: {
          personality: "探究心・独創的",
          specialty: "陶芸",
          origin: "瀬戸",
          currentBase: "益子",
          fourCharacterIdiom: "陶磁精魂"
        }
      },
      {
        id: 16,
        title: "MIYABI #016: 織姫 - テキスタイルアーティスト",
        titleJa: "MIYABI #016: 織姫 - テキスタイルアーティスト",
        description: "伝統的な織物技法とデジタル技術を組み合わせた革新的なテキスタイルアートを制作。",
        image: "assets/nft16.jpg",
        traits: {
          personality: "創造的・繊細",
          specialty: "織物デザイン",
          origin: "西陣",
          currentBase: "京都",
          fourCharacterIdiom: "織錦繍絵"
        }
      },
      {
        id: 17,
        title: "MIYABI #017: 香道 - 香りの芸術家",
        titleJa: "MIYABI #017: 香道 - 香りの芸術家",
        description: "伝統的な香道に現代的なアロマテラピーを組み合わせた新しい香りの表現を追求。",
        image: "assets/nft17.jpg",
        traits: {
          personality: "優雅・感性豊か",
          specialty: "香道",
          origin: "奈良",
          currentBase: "京都",
          fourCharacterIdiom: "香気満堂"
        }
      },
      {
        id: 18,
        title: "MIYABI #018: 庭師 - 現代庭園デザイナー",
        titleJa: "MIYABI #018: 庭師 - 現代庭園デザイナー",
        description: "伝統的な日本庭園の要素を現代的な空間デザインに取り入れる革新的な庭師。",
        image: "assets/nft18.jpg",
        traits: {
          personality: "職人気質・創造的",
          specialty: "庭園デザイン",
          origin: "金沢",
          currentBase: "東京",
          fourCharacterIdiom: "庭園清雅"
        }
      },
      {
        id: 19,
        title: "MIYABI #019: 彩音 - 和楽器ミュージシャン",
        titleJa: "MIYABI #019: 彩音 - 和楽器ミュージシャン",
        description: "伝統的な和楽器を使用した現代音楽を創作する音楽家。電子音楽との融合も手がける。",
        image: "assets/nft19.jpg",
        traits: {
          personality: "情熱的・革新的",
          specialty: "和楽器演奏",
          origin: "大阪",
          currentBase: "東京",
          fourCharacterIdiom: "音韻雅趣"
        }
      },
      {
        id: 20,
        title: "MIYABI #020: 硯心 - 書道家",
        titleJa: "MIYABI #020: 硯心 - 書道家",
        description: "伝統的な書道をストリートアートやデジタルアートと融合させる革新的な書道家。",
        image: "assets/nft20.jpg",
        traits: {
          personality: "大胆・繊細",
          specialty: "現代書道",
          origin: "広島",
          currentBase: "東京",
          fourCharacterIdiom: "筆墨精神"
        }
      },
      {
        id: 21,
        title: "MIYABI #021: 染匠 - 染色アーティスト",
        titleJa: "MIYABI #021: 染匠 - 染色アーティスト",
        description: "伝統的な染色技法と現代アートを組み合わせた作品を制作する染色家。",
        image: "assets/nft21.jpg",
        traits: {
          personality: "創造的・几帳面",
          specialty: "染色",
          origin: "京都",
          currentBase: "金沢",
          fourCharacterIdiom: "染織精美"
        }
      },
      {
        id: 22,
        title: "MIYABI #022: 銀工 - シルバーアクセサリー作家",
        titleJa: "MIYABI #022: 銀工 - シルバーアクセサリー作家",
        description: "伝統的な金工技法を現代のアクセサリーデザインに活かす職人。",
        image: "assets/nft22.jpg",
        traits: {
          personality: "緻密・芸術的",
          specialty: "金工",
          origin: "高岡",
          currentBase: "東京",
          fourCharacterIdiom: "銀光華彩"
        }
      },
      {
        id: 23,
        title: "MIYABI #023: 箏姫 - 箏曲奏者",
        titleJa: "MIYABI #023: 箏姫 - 箏曲奏者",
        description: "伝統的な箏曲とジャズを融合させた新しい音楽を創造する演奏家。",
        image: "assets/nft23.jpg",
        traits: {
          personality: "優雅・革新的",
          specialty: "箏曲",
          origin: "京都",
          currentBase: "東京",
          fourCharacterIdiom: "箏韻清雅"
        }
      },
      {
        id: 24,
        title: "MIYABI #024: 面匠 - 能面師",
        titleJa: "MIYABI #024: 面匠 - 能面師",
        description: "伝統的な能面制作技法を現代アートに応用する革新的な面師。",
        image: "assets/nft24.jpg",
        traits: {
          personality: "静謐・深遠",
          specialty: "能面制作",
          origin: "金沢",
          currentBase: "京都",
          fourCharacterIdiom: "面相神韻"
        }
      },
      {
        id: 25,
        title: "MIYABI #025: 茶匠 - 現代茶道家",
        titleJa: "MIYABI #025: 茶匠 - 現代茶道家",
        description: "伝統的な茶道を現代のライフスタイルに適応させる革新的な茶道家。",
        image: "assets/nft25.jpg",
        traits: {
          personality: "端正・創造的",
          specialty: "茶道",
          origin: "京都",
          currentBase: "東京",
          fourCharacterIdiom: "茶道清心"
        }
      },
      {
        id: 26,
        title: "MIYABI #026: 琳派 - 現代日本画家",
        titleJa: "MIYABI #026: 琳派 - 現代日本画家",
        description: "琳派の影響を受けながら、現代的な表現を追求する日本画家。",
        image: "assets/nft26.jpg",
        traits: {
          personality: "華麗・大胆",
          specialty: "日本画",
          origin: "京都",
          currentBase: "東京",
          fourCharacterIdiom: "琳派光彩"
        }
      },
      {
        id: 27,
        title: "MIYABI #027: 組紐 - 組紐アーティスト",
        titleJa: "MIYABI #027: 組紐 - 組紐アーティスト",
        description: "伝統的な組紐技法を現代アートとして再解釈する革新的な作家。",
        image: "assets/nft27.jpg",
        traits: {
          personality: "緻密・創造的",
          specialty: "組紐",
          origin: "京都",
          currentBase: "東京",
          fourCharacterIdiom: "組紐精巧"
        }
      },
      {
        id: 28,
        title: "MIYABI #028: 蒔絵 - 漆芸家",
        titleJa: "MIYABI #028: 蒔絵 - 漆芸家",
        description: "伝統的な蒔絵技法を現代アートに応用する革新的な漆芸家。",
        image: "assets/nft28.jpg",
        traits: {
          personality: "繊細・芸術的",
          specialty: "蒔絵",
          origin: "輪島",
          currentBase: "金沢",
          fourCharacterIdiom: "蒔絵光華"
        }
      },
      {
        id: 29,
        title: "MIYABI #029: 彫金 - ジュエリーアーティスト",
        titleJa: "MIYABI #029: 彫金 - ジュエリーアーティスト",
        description: "伝統的な彫金技法を現代ジュエリーデザインに活かす革新的な作家。",
        image: "assets/nft29.jpg",
        traits: {
          personality: "緻密・創造的",
          specialty: "彫金",
          origin: "甲府",
          currentBase: "東京",
          fourCharacterIdiom: "彫金精妙"
        }
      },
      {
        id: 30,
        title: "MIYABI #030: 和傘 - 傘職人",
        titleJa: "MIYABI #030: 和傘 - 傘職人",
        description: "伝統的な和傘制作技法を現代的なデザインに応用する革新的な職人。",
        image: "assets/nft30.jpg",
        traits: {
          personality: "職人気質・芸術的",
          specialty: "和傘制作",
          origin: "岐阜",
          currentBase: "京都",
          fourCharacterIdiom: "傘華清雅"
        }
      }
    ];

    // NFTデータを使用するための追加のロジックをここに記述
    // 例: UIへの反映、イベントハンドラーの設定など
});