class Pet{
  constructor(message){
    this.message = message;
  }

// キーワード配列の中に完全一致するものがあるときにメッセージ配列の中からランダムで送信
  sendRandomMessage(keyword, send_message){
    let send_flag = false;
    if (keyword.indexOf(this.message.content) !== -1) {
      let rnd_num = Math.floor(Math.random() * send_message.length);
      this.message.channel.send(send_message[rnd_num]);
      send_flag = true;
    }
    return send_flag;
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
module.exports = Pet
