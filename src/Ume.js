const Pet = require('./Pet.js');
class Ume extends Pet{
  constructor(message){
    super(message);
    this.message = message;
  }

  callMe(){
    const call_keyword = ['うめ', 'うめちゃん', '散歩', 'さんぽ'];
    const call_message = ['わん！', 'ﾜﾝ!', 'ｸｩﾝ…', '！', '？'];
    return this.sendRandomMessage(call_keyword, call_message);
  }
}
module.exports = Ume
