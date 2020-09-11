const Pet = require('./Pet.js');
class Moyai extends Pet{
  constructor(message){
    super(message);
    this.message = message;
  }

  callMe(){
    const call_keyword = ['イースター島', 'モアイ'];
    const call_message = ['にょやややや', 'くうぞ', ':moyai:', 'ﾝﾓｯ', 'ﾓｯ',
                          'そらちゃんかわうぃい', 'うめちゃんかわうぃい',
                          'オデ、オマエ、クウ', 'ボケボケ', 'ガムガムよこせ', 'ﾓｧｰ'
                         ];

    return this.sendArrayMessage(call_keyword, call_message);
  }
}
module.exports = Moyai
