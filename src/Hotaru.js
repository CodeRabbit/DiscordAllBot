const Pet = require('./Pet.js');
class Hotaru extends Pet{
  constructor(message){
    super(message);
    this.message = message;
  }

  callMe(){
    const call_keyword = ['ほたるくん', 'ほたる', '散歩', 'さんぽ'];
    const call_message = ['ﾅﾆﾅﾆﾅﾆﾅﾆ！！！！！！',
                          'どうしたの！？あそんでくれるの！？あそぼー！！！',
                          'よんだ！？よんだよね！？今よんだよね！！！！',
                          'いまね！たのしい！！なんでかわからないけど！！！！！',
                          '遊ぶ？遊べる！？遊ぼ！！遊ぼうよ！！ねぇ！！！',
                          'わああああぁぁぁぁ....ぁぁぁぁああああい！！！'
                         ];

    return this.sendArrayMessage(call_keyword, call_message);
  }
}
module.exports = Hotaru
