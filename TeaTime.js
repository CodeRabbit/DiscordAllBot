class TeaTime{
  constructor(message, client){
    this.message = message;
    this.client = client;
  }
  teaTime(){
    const ty_keyword = ["てぃーたいむ", "ティータイム"];
    const ty_message = ["てぃとてぃーたいむしてこ？♡", "てぃとてぃーたいむしてｺｯ？♡"];
    return sendRandomMessage(ty_keyword, ty_message);
  }
  dekoTime(){
    const deko_keyword = ["でこでこたいむ", "でこでこタイム", "でこちたいむ", "でこちタイム", "でこぴたいむ", "でこぴタイム"];
    const deko_message = ["でこでこビーム！", "でことでこでこしてこ♡", "でことでこでこしてｺｯ？"];
    return sendRandomMessage(deko_keyword, deko_message);
  }
  sendRandomMessage(keyword, send_message){
    let send_flag = false;
    if (keyword.indexOf(this.message.content) !== -1) {
      let rnd_num = Math.floor(Math.random() * send_message.length);
      this.message.channel.send(send_message[rnd_num]);
      send_flag = true;
    }
    return send_flag;
  }
}
module.exports = TeaTime
