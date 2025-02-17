document.addEventListener('DOMContentLoaded', function() {
    // NFTデータの定義
    const nftData = [
      {
        id: 1,
        title: "MIYABI #001",
        description: "優美な着物姿の女性が、伝統的な和の空間で静かに佇んでいます。彼女の表情には深い思慮が宿り、その姿からは凛とした気品が漂います。背景には、繊細な障子の影と、さりげなく活けられた生け花が、日本の美意識を表現しています。",
        image: "assets/nft1.jpg",
        traits: {
          "Background": "Traditional Japanese Room",
          "Character": "Elegant Woman",
          "Clothing": "Formal Kimono",
          "Mood": "Contemplative"
        }
      },
      {
        id: 2,
        title: "MIYABI #002",
        description: "現代的な和のエッセンスを取り入れた空間で、モダンな着物を纏う女性が凛として立っています。伝統と革新が融合した雰囲気が、新しい日本の美を表現しています。洗練された色使いと、控えめながらも存在感のある小物使いが、現代的な「みやび」を感じさせます。",
        image: "assets/nft2.jpg",
        traits: {
          "Background": "Modern Japanese Space",
          "Character": "Modern Woman",
          "Clothing": "Contemporary Kimono",
          "Mood": "Confident"
        }
      },
      {
        id: 3,
        title: "MIYABI #003",
        description: "桜吹雪舞う庭園で、艶やかな振袖姿の女性が優雅に佇んでいます。春の柔らかな光が彼女を包み、伝統的な日本の美しさと若々しい活力が調和した瞬間を切り取っています。",
        image: "assets/nft3.jpg",
        traits: {
          "Background": "Cherry Blossom Garden",
          "Character": "Young Woman",
          "Clothing": "Furisode Kimono",
          "Mood": "Graceful"
        }
      },
      {
        id: 4,
        title: "MIYABI #004",
        description: "竹林の中で、シンプルな浴衣姿の女性が涼やかな表情を見せています。風に揺れる竹の葉と、彼女の凛とした佇まいが、日本の夏の情景を優美に表現しています。",
        image: "assets/nft4.jpg",
        traits: {
          "Background": "Bamboo Forest",
          "Character": "Serene Woman",
          "Clothing": "Summer Yukata",
          "Mood": "Refreshing"
        }
      },
      {
        id: 5,
        title: "MIYABI #005",
        description: "雪景色の中、厳かな佇まいの女性が、深い紅色の着物姿で立っています。静寂に包まれた冬の情景と、着物の鮮やかな色彩が見事なコントラストを生み出しています。",
        image: "assets/nft5.jpg",
        traits: {
          "Background": "Snow Landscape",
          "Character": "Noble Woman",
          "Clothing": "Deep Red Kimono",
          "Mood": "Solemn"
        }
      },
      {
        id: 6,
        title: "MIYABI #006",
        description: "月光に照らされた日本庭園で、優雅な着物姿の女性が琴を奏でています。その姿は幽玄な雰囲気を醸し出し、伝統音楽の深い精神性を表現しています。",
        image: "assets/nft6.jpg",
        traits: {
            "Background": "Night Garden",
            "Character": "Musical Woman",
            "Clothing": "Performance Kimono",
            "Mood": "Ethereal"
        }
      },
      {
        id: 7,
        title: "MIYABI #007",
        description: "朱色の鳥居が連なる参道で、巫女装束の女性が神聖な舞を披露しています。古くから伝わる神事の厳かさと、その所作の美しさが見る者の心を打ちます。",
        image: "assets/nft7.jpg",
        traits: {
            "Background": "Shrine Path",
            "Character": "Shrine Maiden",
            "Clothing": "Miko Attire",
            "Mood": "Sacred"
        }
      },
      {
        id: 8,
        title: "MIYABI #008",
        description: "古い茶室で、茶道の所作を美しく演じる女性の姿があります。一つ一つの動きに込められた意味と美しさが、日本の伝統文化の深さを物語っています。",
        image: "assets/nft8.jpg",
        traits: {
            "Background": "Tea Room",
            "Character": "Tea Master",
            "Clothing": "Tea Ceremony Kimono",
            "Mood": "Focused"
        }
      },
      {
        id: 9,
        title: "MIYABI #009",
        description: "紅葉の庭園で、華やかな着物姿の女性が伝統的な舞を披露しています。落ち葉が舞う中、優美な動きで物語を紡ぎ出す姿は、日本の芸能の真髄を表現しています。",
        image: "assets/nft9.jpg",
        traits: {
            "Background": "Autumn Garden",
            "Character": "Dance Performer",
            "Clothing": "Dance Kimono",
            "Mood": "Elegant"
        }
      },
      {
        id: 10,
        title: "MIYABI #010",
        description: "満開の梅林で、優美な着物姿の女性が生け花を嗜んでいます。早春の柔らかな光の中、花と人との調和が日本の美意識の深さを表現しています。",
        image: "assets/nft10.jpg",
        traits: {
            "Background": "Plum Garden",
            "Character": "Flower Artist",
            "Clothing": "Spring Kimono",
            "Mood": "Serene"
        }
      },
      {
        id: 11,
        title: "MIYABI #011",
        titleJa: "MIYABI #011",
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
        title: "MIYABI #012",
        titleJa: "MIYABI #012",
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
        title: "MIYABI #013",
        titleJa: "MIYABI #013",
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
        title: "MIYABI #014",
        titleJa: "MIYABI #014",
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
        title: "MIYABI #015",
        titleJa: "MIYABI #015",
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
        title: "MIYABI #016",
        titleJa: "MIYABI #016",
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
        title: "MIYABI #017",
        titleJa: "MIYABI #017",
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
        title: "MIYABI #018",
        titleJa: "MIYABI #018",
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
        title: "MIYABI #019",
        titleJa: "MIYABI #019",
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
        title: "MIYABI #020",
        titleJa: "MIYABI #020",
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
        title: "MIYABI #021",
        titleJa: "MIYABI #021",
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
        title: "MIYABI #022",
        titleJa: "MIYABI #022",
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
        title: "MIYABI #023",
        titleJa: "MIYABI #023",
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
        title: "MIYABI #024",
        titleJa: "MIYABI #024",
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
        title: "MIYABI #025",
        titleJa: "MIYABI #025",
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
        title: "MIYABI #026",
        titleJa: "MIYABI #026",
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
        title: "MIYABI #027",
        titleJa: "MIYABI #027",
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
        title: "MIYABI #028",
        titleJa: "MIYABI #028",
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
        title: "MIYABI #029",
        titleJa: "MIYABI #029",
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
        title: "MIYABI #030",
        titleJa: "MIYABI #030",
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