class Hotaru{
  constructor(message){
    this.message = message;
  }

  callMe(){
    const call_keyword = ['ほたるくん', 'ほたる', '散歩'];
    const call_message = ['ﾅﾆﾅﾆﾅﾆﾅﾆ！！！！！！',
                          'どうしたの！？あそんでくれるの！？あそぼー！！！',
                          'よんだ！？よんだよね！？今よんだよね！！！！',
                          'いまね！たのしい！！なんでかわからないけど！！！！！',
                          '遊ぶ？遊べる！？遊ぼ！！遊ぼうよ！！ねぇ！！！',
                          'わああああぁぁぁぁ....ぁぁぁぁああああい！！！'
                         ];

    return this.sendArrayMessage(call_keyword, call_message);
  }

  // 部分一致でUserメッセージ内にキーワードが含まれていたらメッセージ配列の中からランダムで送信
  sendArrayMessage(keyword, send_message){
    let keyword_flag = false;
    for(let i = 0; i < keyword.length; i++){
      if(this.message.content.includes(keyword[i])){
        keyword_flag = true;
        break;
      }
    }
    if(keyword_flag){
      let message_index = Math.floor( Math.random() * send_message.length );
      this.message.channel.send(send_message[message_index]);
    }
    return keyword_flag;
  }
}
module.exports = Hotaru
