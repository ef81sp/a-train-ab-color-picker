import Color from "color"
export type corporation = "国鉄" | "東京メトロ" | "都営地下鉄" | "Osaka Metro"
type color = {
  name: string
  value: Color
  corporation?: corporation
}
type colorList = {
  groupName: string
  colors: color[]
}[]
export const colorList: colorList = [
  {
    groupName: "赤/橙",
    colors: [
      {
        name: "赤1号 赤",
        value: Color("#b11d2c"),
        corporation: "国鉄"
      },
      {
        name: "赤2号 えんじ色",
        value: Color("#872732"),
        corporation: "国鉄"
      },
      {
        name: "赤3号 赤茶色",
        value: Color("#7e433e"),
        corporation: "国鉄"
      },
      {
        name: "赤7号 マルーン",
        value: Color("#583133"),
        corporation: "国鉄"
      },
      {
        name: "赤11号 スカーレット",
        value: Color("#c2302a"),
        corporation: "国鉄"
      },
      {
        name: "赤13号 小豆色",
        value: Color("#8b474b"),
        corporation: "国鉄"
      },
      {
        name: "ぶどう色2号 ぶどう色",
        value: Color("#432c28"),
        corporation: "国鉄"
      },
      {
        name: "とび色2号 とび色",
        value: Color("#7a5241"),
        corporation: "国鉄"
      },
      {
        name: "朱色1号 オレンジバーミリオン",
        value: Color("#eb5b01"),
        corporation: "国鉄"
      },
      {
        name: "朱色3号 朱色",
        value: Color("#e14024"),
        corporation: "国鉄"
      },
      {
        name: "朱色4号 金赤色",
        value: Color("#b63f28"),
        corporation: "国鉄"
      },
      {
        name: "朱色5号 柿色",
        value: Color("#ce543f"),
        corporation: "国鉄"
      },
      {
        name: "銀座線 オレンジ",
        value: Color("#ff9500"),
        corporation: "東京メトロ"
      },
      {
        name: "丸ノ内線 レッド",
        value: Color("#f62e36"),
        corporation: "東京メトロ"
      },
      {
        name: "浅草線 ローズ",
        value: Color("#e85298"),
        corporation: "都営地下鉄"
      },
      {
        name: "御堂筋線 臙脂",
        value: Color("#e5171f"),
        corporation: "Osaka Metro"
      },
      {
        name: "千日前線 紅梅",
        value: Color("#e44d93"),
        corporation: "Osaka Metro"
      },
      {
        name: "今里筋線 柑子",
        value: Color("#ee7b1a"),
        corporation: "Osaka Metro"
      },
    ],
  },
  {
    groupName: "黄/クリーム",
    colors: [
      {
        name: "黄1号 黄色",
        value: Color("#ffc000"),
        corporation: "国鉄"
      },
      {
        name: "黄4号 薄黄色",
        value: Color("#eecd73"),
        corporation: "国鉄"
      },
      {
        name: "黄5号 マリーゴールドイエロー",
        value: Color("#e5b349"),
        corporation: "国鉄"
      },
      {
        name: "黄6号 薄卵色",
        value: Color("#fde4a0"),
        corporation: "国鉄"
      },
      {
        name: "クリーム1号 薄茶色",
        value: Color("#dcbe99"),
        corporation: "国鉄"
      },
      {
        name: "クリーム4号 小麦色",
        value: Color("#d6ae89"),
        corporation: "国鉄"
      },
      {
        name: "クリーム9号 アイボリー",
        value: Color("#d1c0ad"),
        corporation: "国鉄"
      },
      {
        name: "クリーム10号 アイボリーホワイト",
        value: Color("#f6e2d1"),
        corporation: "国鉄"
      },
      {
        name: "クリーム12号 クリームホワイト",
        value: Color("#f2e3d5"),
        corporation: "国鉄"
      },
      {
        name: "黄かん色 みかん色",
        value: Color("#cd6d22"),
        corporation: "国鉄"
      },
      {
        name: "黄かっ色1号 黄褐色",
        value: Color("#ad7d4e"),
        corporation: "国鉄"
      },
      {
        name: "有楽町線 ゴールド",
        value: Color("#c1a470"),
        corporation: "東京メトロ"
      },
    ]
  },
  {
    groupName: "緑/青/紫",
    colors: [
      {
        name: "淡緑1号 薄緑色",
        value: Color("#aab3a0"),
        corporation: "国鉄"
      },
      {
        name: "淡緑3号 ミストグリーン",
        value: Color("#879a86"),
        corporation: "国鉄"
      },
      {
        name: "淡緑6号 若葉色",
        value: Color("#a2bd95"),
        corporation: "国鉄"
      },
      {
        name: "淡緑7号 シルバーグリーン",
        value: Color("#c2baab"),
        corporation: "国鉄"
      },
      {
        name: "黄緑6号 萌黄色",
        value: Color("#84ad54"),
        corporation: "国鉄"
      },
      {
        name: "黄緑7号 黄緑色",
        value: Color("#6ab547"),
        corporation: "国鉄"
      },
      {
        name: "緑2号 ダークグリーン",
        value: Color("#384e36"),
        corporation: "国鉄"
      },
      {
        name: "緑14号 モスグリーン",
        value: Color("#2b5f2a"),
        corporation: "国鉄"
      },
      {
        name: "灰緑2号 灰緑色",
        value: Color("#798a84"),
        corporation: "国鉄"
      },
      {
        name: "灰緑3号 スレートグリーン",
        value: Color("#436065"),
        corporation: "国鉄"
      },
      {
        name: "青緑1号 青緑色",
        value: Color("#008c79"),
        corporation: "国鉄"
      },
      {
        name: "青緑6号 鉄色",
        value: Color("#113433"),
        corporation: "国鉄"
      },
      {
        name: "青9号 そら色",
        value: Color("#5d7ea3"),
        corporation: "国鉄"
      },
      {
        name: "青15号 インクブルー",
        value: Color("#243d5c"),
        corporation: "国鉄"
      },
      {
        name: "青19号 スレートブルー",
        value: Color("#50687b"),
        corporation: "国鉄"
      },
      {
        name: "青20号 ブライトブルー",
        value: Color("#113c70"),
        corporation: "国鉄"
      },
      {
        name: "青22号 みず色",
        value: Color("#0088a2"),
        corporation: "国鉄"
      },
      {
        name: "東西線 スカイ",
        value: Color("#009bbf"),
        corporation: "東京メトロ"
      },
      {
        name: "千代田線 グリーン",
        value: Color("#00bb85"),
        corporation: "東京メトロ"
      },
      {
        name: "半蔵門線 パープル",
        value: Color("#8f76d6"),
        corporation: "東京メトロ"
      },
      {
        name: "南北線 エメラルド",
        value: Color("#00ac9b"),
        corporation: "東京メトロ"
      },
      {
        name: "三田線 ブルー",
        value: Color("#0079c2"),
        corporation: "都営地下鉄"
      },
      {
        name: "新宿線 リーフ",
        value: Color("#6cbb5a"),
        corporation: "都営地下鉄"
      },
      {
        name: "大江戸線 ルビー",
        value: Color("#b6007a"),
        corporation: "都営地下鉄"
      },
      {
        name: "長堀鶴見緑地線 萌黄",
        value: Color("#a9cc51"),
        corporation: "Osaka Metro"
      },
      {
        name: "谷町線 京紫",
        value: Color("#522886"),
        corporation: "Osaka Metro"
      },
      {
        name: "四つ橋線 縹",
        value: Color("#0078ba"),
        corporation: "Osaka Metro"
      },
      {
        name: "中央線 緑",
        value: Color("#019a66"),
        corporation: "Osaka Metro"
      },
      {
        name: "南港ポートタウン線 セルリアンブルー",
        value: Color("#00a0de"),
        corporation: "Osaka Metro"
      },
    ],
  },
  {
    groupName: "茶/白/黒",
    colors: [
      {
        name: "薄茶色4号 サンドベージュ",
        value: Color("#bda393"),
        corporation: "国鉄"
      },
      {
        name: "薄茶色5号 肌色",
        value: Color("#de987c"),
        corporation: "国鉄"
      },
      {
        name: "薄茶色6号 茶ねずみ色",
        value: Color("#b7a49f"),
        corporation: "国鉄"
      },
      {
        name: "薄茶色13号 薄茶色",
        value: Color("#dcc6b9"),
        corporation: "国鉄"
      },
      {
        name: "薄茶色14号 白茶色",
        value: Color("#e5d2c5"),
        corporation: "国鉄"
      },
      {
        name: "薄茶色15号 ココアブラウン",
        value: Color("#7e5f4d"),
        corporation: "国鉄"
      },
      {
        name: "薄茶色17号 ベージュ",
        value: Color("#b38e6f"),
        corporation: "国鉄"
      },
      {
        name: "黒 ブラック",
        value: Color("#262626"),
        corporation: "国鉄"
      },
      {
        name: "ねずみ色1号 ねずみ色",
        value: Color("#797979"),
        corporation: "国鉄"
      },
      {
        name: "灰色1号 灰色",
        value: Color("#939393"),
        corporation: "国鉄"
      },
      {
        name: "灰色8号 シルバーグレー",
        value: Color("#adadad"),
        corporation: "国鉄"
      },
      {
        name: "灰色9号 パールホワイト",
        value: Color("#c8c8c8"),
        corporation: "国鉄"
      },
      {
        name: "灰色16号 フロスティホワイト",
        value: Color("#d3d3d3"),
        corporation: "国鉄"
      },
      {
        name: "白色 ホワイト",
        value: Color("#e6e6e6"),
        corporation: "国鉄"
      },
      {
        name: "日比谷線 シルバー",
        value: Color("#b5b5ac"),
        corporation: "東京メトロ"
      },
      {
        name: "副都心線 ブラウン",
        value: Color("#9c5e31"),
        corporation: "東京メトロ"
      },
      {
        name: "堺筋線 マルーン",
        value: Color("#814721"),
        corporation: "Osaka Metro"
      },
    ]
  }
]
