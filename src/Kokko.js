const Pet = require('./Pet.js');
class Kokko extends Pet{
  constructor(message){
    super(message);
    this.message = message;
  }
  feelingReply(){
    const feeling_keyword = ["こっこの気持ち", "こっこのきもち", "コッコの気持ち",
                             "コッコのきもち", "鶏のきもち",
                             "鶏の気持ち", "にわとりのきもち", "にわとりの気持ち"
                            ];
    const feeling_message = ["ﾀｽｹ ﾃ!ﾀｽｹ ﾃ!", "ﾔｷﾄﾘ ﾊ ﾔﾀﾞ!ﾔｷﾄﾘ ﾊ ﾔﾀﾞ!",
                          "ﾄﾞｳｾ ｸｳ ﾝ ﾀﾞｯﾀﾗ ﾃﾊﾞｻｷ ﾆ ｼﾃ ｸﾚ!", "ﾋｪｯ…", "ﾜﾀｼ ｵｲｼｸ ﾅｲ ﾖ!",
                          "ﾃﾊﾞｻｷ！ﾃﾊﾞｻｷ!", "ﾎﾞｸ ﾊ ｼﾆ ﾀｸ ｱﾘﾏ ｼｪｪﾝ!!"
                         ];
    return this.sendRandomMessage(feeling_keyword, feeling_message);
  }
  eatMe(){
    const eat_keyword = ["食ってやる","くってやる","食うぞ","くうぞ",
                 "たべちゃうぞ", "食べちゃうぞ", "オデ、オマエ、クウ"
                ];
    const eat_message = ["ﾀﾍﾞﾅｲﾃﾞ!", "ﾀｽｹﾃ!", "ｵｲｼｸﾅｲﾖ!",
                     "ｵﾅｶｺﾜｽﾖ!","ｱ゛ｱ゛ｱ゛ｱ゛ｱ゛ｱ゛ｱ゛ｱ゛ｱ゛ｱ゛ｱ゛ｱ゛ｱ゛ｱ゛ｱ゛"
                    ];
    return this.sendRandomMessage(eat_keyword, eat_message);
  }
  fortune(){
    const fortune_keyword = ["こっこうらない", "こっこ占い",
                             "コッコうらない", "コッコ占い"
                            ];
    const fortune_message = ["ﾀﾞｲｷﾁ!ﾀﾞｲｷﾁ!", "ﾁｭｳｷﾁ!ﾁｭｳｷﾁ!", "ｼｮｳｷﾁ!ｼｮｳｷﾁ!", "ｷﾁ!ｷﾁ!",
                             "ﾊﾝｷﾁ!ﾊﾝｷﾁ!", "ｽｴｷﾁ!ｽｴｷﾁ!", "ｽｴｼｮｳｷﾁ!ｽｴｼｮｳｷﾁ!",
                             "ｷｮｳ!ｷｮｳ!", "ﾊﾝｷｮｳ!ﾊﾝｷｮｳ!", "ｽｴｷｮｳ!ｽｴｷｮｳ!",
                             "ﾀﾞｲｷｮｳ!ﾀﾞｲｷｮｳ!", "ﾀﾇｷﾁ!ﾀﾇｷﾁ!", "ﾏﾒｷﾁ!ﾏﾒｷﾁ!",
                             "ﾂﾌﾞｷﾁ!ﾂﾌﾞｷﾁ!", "ﾂﾈｷﾁ!ﾂﾈｷﾁ!", "ﾏｼﾞｷﾁ!ﾏｼﾞｷﾁ!"
                            ];
    return this.sendRandomMessage(fortune_keyword, fortune_message);
  }
  callMe(){
    const call_keyword = ["こっこ", "コッコ",
                     "にわとり", "ニワトリ", "鶏",
                     "やきとり", "ヤキトリ", "焼き鳥",
                     "てばさき", "テバサキ", "手羽先"
                    ];
    const call_message = ["ｺｹｪｯ!", "ｺｹｺｯｺｰ!", "ｺｫｫｫｫｫｯｹｪｪｪｪｪｴｯ!!!", "ｺｯ…",
                          "ｺｺｫ…ｺｹｯ！", "ｺｹｯ…(絶命)", "滑稽！", "ﾃﾊﾞｻｷ！ﾃﾊﾞｻｷ!",
                          ":fire:ﾔｷﾄﾘ！ﾔｷﾄﾘ！:fire:", "ﾎﾞｸﾊ ｼﾆﾏｼｪｪﾝ!!",
                          "ｺｯｺ ｺｹｯｺ ｺｺｹｯｺｰ", "ｺｵｵｫｫｫｫｫｫｫ"
                         ];
    return this.sendArrayMessage(call_keyword, call_message);
  }
  greeting(){
    const greeting_keyword = ["おやすみ", "おやすみなさい", "おやすみなさーい", "おはよー", "おはよう",
                              "おっはー", "こんにちは", "こんばんは", "こんばんわ", "ただいま",
                              "ちゃっす", "またね", "ばいばい", "さようなら", "さらば",
                              "行ってきます", "いってきます"
                             ];
    const greeting_message = ["コケー", "コケッコー", "コッコケー！", "コケコッコー！",
                              "コーーーーケコッコーーーーー！", "コケコケコッコー！"
                             ];
    return this.sendArrayMessage(greeting_keyword, greeting_message);
  }
}
module.exports = Kokko
