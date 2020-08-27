class Sora{
  constructor(message){
    this.message = message;
  }
  // にゃんコマンドの説明送信
  help(){
    this.message.channel.send(
      "にゃん　にゃん :カジノで遊べるコマンド一覧を教えてくれる\n"
      +"にゃん　にゃー :サーバーに入っている人数（bot込）を教えてくれる\n"
      +"にゃん　ぱす  :ランクの説明\n"
      +"にゃん　ぱすー :ランクの昇格基準の表示"
    );
  }
  // casinoコマンドの説明送信
  casino(){
    this.message.channel.send(
      "!bj 賭け金            　　　         （ブラックジャック）\n"
      +"!roulette 賭け金 　賭ける場所  (ルーレット)\n"
      +"!rouletteinfo                        (ルーレットの詳細なルールを表示)\n"
      +"!slot 賭け金          　　　（スロットマシン）\n"
      +"!rr 賭け金            　　　　（ロシアンルーレット）\n"
      +"!cf 賭け金            　　　（クックファイト）\n"
      +"!buy c               　　　　（チキンを買う）\n"
      +"!lb                 　　　　　 （リーダーボード）\n"
      +"!lb -cash            　　　（手持ちのリーダーボード）\n"
      +"!lb -bank            　　　（銀行のリーダーボード）\n"
      +"!lb -total　　　　　　　（トータルのリーダーボード）\n"
      +"!dep 預ける金額　　　　（銀行にお金を預ける）\n"
      +"!with 引き出す金額　　　（銀行からお金を引き出す）\n"
      +"!bal                　　　　　　　 （所持金確認）\n"
    ).then(message => message.react('🐈'));
  }
  // サーバー内ランクの説明送信
  rankInfo(){
    this.message.channel.send(
      "このサーバーでは\n"
      +":bookmark:白（ウルトラヴァイオレット）\n"
      +":fleur_de_lis:紫（ヴァイオレット）\n"
      +":diamond_shape_with_a_dot_inside:藍（インディゴ）\n"
      +":blue_heart:青（ブルー）\n"
      +":green_heart:緑（グリーン）\n"
      +":yellow_heart:黄（イエロー）\n"
      +":orange_heart:橙（オレンジ）\n"
      +":heart:赤（レッド）\n"
      +":black_heart:黒（インフラレッド）\n"
      +"のランクがあって\n"
      +"上に行けば行くほど強い権限をもらえるし　いろいろできることが増える"
    );
  }
  // ランクの昇格条件を送信
  rankUpCondition(){
    this.message.channel.send(
      "基本はレッドから始まりますが\n"
      +"荒らし行為や人の迷惑になる行為を行った場合\n"
      +"インフラレッドに降格され、全ての権限を奪われ、チャンネルへのアクセス権限を奪われます\n"
      +"\n"
      +"昇格条件\n"
      +":bookmark:白（ウルトラヴァイオレット）:\n"
      +"・基本的になることはできない。\n"
      +"\n"
      +":fleur_de_lis:紫（ヴァイオレット）:\n"
      +"・コマンドを使いこなせること\n"
      +"・ユーザーのサポートができること\n"
      +"・トラブルが発生したときに対応できること\n"
      +"\n"
      +":diamond_shape_with_a_dot_inside:藍（インディゴ）:\n"
      +"・レッドを２人育成し、グリーンまで成長させる\n"
      +"\n"
      +":blue_heart:青（ブルー）：\n"
      +"・サーバー内職業を取得する\n"
      +"（デザイナー、プログラマー、コマンダー）\n"
      +" or \n"
      +"・偉業達成(招待人数10人以上)\n"
      +"\n"
      +":green_heart:緑（グリーン）：\n"
      +"・悪名以外の二つ名をもらうこと\n"
      +"・所持ハートが5000以上\n"
      +"\n"
      +":yellow_heart:黄（イエロー）：\n"
      +"・簡単な基本コマンドを覚えて使えるようになる\n"
      +"（Groovyのコマンド、UnbelievaBoatのコマンドの一部）\n"
      +"\n"
      +":orange_heart:橙（オレンジ）：\n"
      +"・周りの人と交流し仲良くできること\n"
      +"\n"
      +":heart:赤（レッド）：\n"
      +"・#自己紹介 チャンネルで自己紹介を行う\n"
      +"\n"
    );
  }

  feelingReply(){
    const feeling_keyword = ['そらちゃんの気持ち', 'そらちゃんのきもち', '猫の気持ち',
                             '猫のきもち', 'ねこのきもち', 'ねこの気持ち'
                            ];
    const feeling_message = ['みんな大好き〜！', 'なでて〜', 'あそんで〜！'];
    return this.sendRandomMessage(feeling_keyword, feeling_message);
  }

  callMe(){
    const call_keyword = ['そらちゃん', 'そーらちゃん', 'そらちゃーん',
                          'そ〜らちゃん', 'そらちゃ〜ん'
                         ];
    const call_message = ['にゃーん', 'にゃ〜ん', 'ﾐｬｰ!', 'にゃ〜', 'にゃー！'];
    return this.sendArrayMessage(call_keyword, call_message);
  }

  greeting(){
    const greeting_keyword = ['おやすみ','おやすみなさい', 'おやすみなさーい',
                              'おはよー', 'おはよう', 'おっはー', 'こんにちは',
                              'こんばんは','こんばんわ', 'ただいま', 'ちゃっす',
                              'またね', 'ばいばい', 'さようなら', 'さらば'
                            ];
    const greeting_message = ['にゃん', 'にゃーん', 'にゃ〜？',
                              'にゃー！', 'み〜！', 'にゃ〜〜'
                            ];
    this.sendArrayMessage(greeting_keyword, greeting_message);
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
      if(this.message.content.indexOf(keyword[i]) !== -1){
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
module.exports = Sora
