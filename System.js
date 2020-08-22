  class System {
    constructor(message, client){
      this.message = message;
      this.client = client;
    }
    // コマンドの使い方送信
    help(){
      this.message.channel.send(
        "*status\n"
        +"*outputImage\n"
        +"*imageChange [imgUrl]\n"
        +"*nameChange [name]\n"
        +"*UnbelievaBoat-all: UnbelievaBoatのコマンドを全て表示\n"
        +"*ub-a:上のコマンドの省略形\n"
        +"*UnbelievaBoat:ユーザーが使えるコマンドだけを表示\n"
        +"*groovy:groovy(音楽bot)のコマンドを表示\n"
        +"*gy:上のコマンドの省略系\n"
        +"*help"
      );
    }
    // デバイスのオンライン状態を調べる
    statusCheck(){
      const message = this.message;
      const userStatus = message.author.presence.clientStatus;

      if (!userStatus) {
        return message.channel.send('どのデバイスからもアクセスされていません。')
      }

      return message.channel.send(
        [
          'desktop: ' + (userStatus.desktop || 'offline'),
          'mobile: ' + (userStatus.mobile || 'offline'),
          'web: ' + (userStatus.web || 'offline'),
        ].join('\n')
      );
    }
    // アバター画像変更
    imgChange(img_url) {
      this.client.user.setAvatar(img_url);
      this.message.channel.send("image changing now...");
    }
    // アバター画像送信
    outputImg() {
      this.message.channel.send(this.client.user.avatarURL());
    }
    // ユーザーネーム変更
    // 短時間に変更しすぎるとブロックされるのでニックネームの変更にしたい
    // (ニックネーム変更メソッドに見えたけどこれユーザーネームの変更っぽい Discordこのやろう)
    nameChange(name) {
      this.message.guild.members.fetch(this.client.user.id).setNickname(name);
      // this.client.user.setUsername(name);
      this.message.channel.send("name changing now...");
    }
    // unbelievaBoatの管理者用コマンド含む使い方送信
    unbelievaBoatInfoAll(){
      this.message.channel.send(
        "ーーーーーーー 経済 ーーーーーーー\n"
        +"\n"
        +"\n"
        +"ーー 管理者 ーー\n"
        +"\n"
        +"!set-currency <シンボル>\n"
        +"通貨シンボルを変更する\n"
        +"\n"
        +"!set-start-balance <金額>\n"
        +"開始銀行残高を設定する\n"
        +"\n"
        +"!money-audit-log <enable | disable> [チャンネル]\n"
        +"金銭取引の監査ログチャンネルを設定する\n"
        +"\n"
        +"!maximum-balance <cash | bank> <金額>\n"
        +"手持ちの現金または銀行の最大残高を設定する\n"
        +"\n"
        +"!add-money [cash | bank] <メンバー> <金額>\n"
        +"メンバーにお金を付与する\n"
        +"\n"
        +"!add-money-role [cash | bank] <ロール> <金額>\n"
        +"ロール全員にお金を付与する\n"
        +"\n"
        +"!remove-money [cash | bank] <メンバー> <金額>\n"
        +"メンバーからお金を除去する\n"
        +"\n"
        +"!remove-money-role [cash | bank] <ロール> <金額>\n"
        +"ロール全員からお金を除去する\n"
        +"\n"
        +"\n"
        +"ーー 一般プレイヤー ーー\n"
        +"\n"
        +"!economy-stats:\n"
        +"全体経済の統計を表示\n"
        +"\n"
        +"!deposit <金額 | all>\n"
        +"銀行に指定した金額預ける\n"
        +"\n"
        +"!withdraw <金額 | all>\n"
        +"指定した金額銀行から引き出す+"
        +"\n"
        +"!give-money <メンバー> <金額 | all>\n"
        +"指定したメンバーに指定した金額渡す\n"
        +"\n"
        +"!money [メンバー]\n"
        +"指定したメンバーの所持金を表示\n"
        +"\n"
        +"!leaderboard [ページ] [-cash | bank | -total]\n"
        +"統計ランキングを見る\n"
        +"\n"
        +"ーーーーーーーーーーーーーーーーー\n"
        +"\n"
        +"\n"
        +"ーーーーーーー 所得 ーーーーーーー\n"
        +"\n"
        +"\n"
        +"ーー 管理者 ーー+\n"
        +"\n"
        +"\n"
        +"ーー 一般プレイヤー ーー\n"
        +"\n"
        +"!work\n"
        +"お題もらいそれに答えることでハートを少しだけ貰える\n"
        +"\n"
        +"!rob <ユーザー>\n"
        +"ユーザーの手持ちからお金を盗む　対象の総合金額が自分より大きいほど成功率は高くなるが　失敗すると大金を失う\n"+
        +"\n"
        +"ーーーーーーーーーーーーーーーーー\n"
        +"\n"
        +"\n"
      );
    }
    // unbelievaBoatの一般ユーザー向け使い方送信
    unbelievaBoatInfo(){
      this.message.channel.send(
        "ーーーーーーー経済ーーーーーーー\n"
        +"!economy-stats:\n"
        +"全体経済の統計を表示\n"
        +"\n"
        +"!deposit <金額 | all>\n"
        +"銀行に指定した金額預ける\n"
        +"\n"
        +"!withdraw <金額 | all>\n"
        +"指定した金額銀行から引き出す\n"
        +"\n"
        +"!give-money <メンバー> <金額 | all>\n"
        +"指定したメンバーに指定した金額渡す\n"
        +"\n"
        +"!money [メンバー]\n"
        +"指定したメンバーの所持金を表示\n"
        +"\n"
        +"!leaderboard [ページ] [-cash | bank | -total]\n"
        +"統計ランキングを見る\n"
        +"\n"
        +"ーーーーーーーーーーーーーーーーー"
      );
    }
    // groovyの使い方送信
    groovyInfo(){
      this.message.channel.send(
        +"-play <リンク | 探したい曲名>\n"
        +"指定した曲やプレイリストを再生できる\n"
        +"省略:p,q,queue\n"
        +"\n"
        +"-play file\n"
        +"メッセージに添付されたファイルを再生する\n"
        +"省略:pf\n"
        +"\n"
        +"-queue\n"
        +"追加されているリクエストをみる\n"
        +"省略:q\n"
        +"\n"
        +"-next\n"
        +"次の曲にスキップする\n"
        +"省略:n,skip\n"
        +"\n"
        +"-back\n"
        +"前の曲に戻る\n"
        +"省略:b,previous,prev\n"
        +"\n"
        +"-clear\n"
        +"リクエストされている曲をすべて削除する\n"
        +"省略:無し\n"
        +"\n"
        +"-jump <曲の位置 | 曲のタイトル>\n"
        +"指定したリクエストにジャンプする\n"
        +"省略:j,goto\n"
        +"\n"
        +"-loop\n"
        +"1回やるとリクエストされた曲全体でループする　２回やると今再生されている曲をループする　３回やるとループ解除\n"
        +"省略:l\n"
        +"\n"
        +"-lylics [曲名]\n"
        +"再生中の曲の歌詞を出す（精度は期待できない）\n"
        +"省略:ly\n"
        +"\n"
        +"-pause\n"
        +"再生を一時停止する\n"
        +"省略:無し\n"
        +"\n"
        +"-resume\n"
        +"一時停止を解除\n"
        +"省略:unpause\n"
        +"\n"
        +"-remove\n"
        +"指定された曲をリクエストから削除する\n"
        +"省略:r,rm,delete,del\n"
        +"\n"
        +"-remove range <start>, <end>\n"
        +"指定された範囲のリクエストを消す\n"
        +"省略:rr\n"
        +"\n"
        +"-disconnect\n"
        +"botをボイスチャンネルから離脱させる\n"
        +"省略:dc,leave,reset\n"
        +"\n"
        +"-shuffle\n"
        +"リクエストされた曲をシャッフルする\n"
        +"省略:shuff,shuf,randomize,randomise\n"
        +"\n"
        +"-song [曲名 | 曲の位置]\n"
        +"リクエスト内の指定した曲の情報を表示する\n"
        +"省略:nowplaying,np\n"
        +"\n"
        +"-fast forward [秒数]\n"
        +"指定した秒数だけ早送りする\n"
        +"省略:ff,fwd\n"
        +"\n"
        +"-rewind [秒数]\n"
        +"指定した秒数だけ巻き戻す\n"
        +"省略:rw\n"
        +"\n"
        +"-search <曲名>\n"
        +"曲名で探したあと　ナンバーで指定して曲を追加できる\n"
        +"省略:s\n"
        +"\n"
        +"-seek <曲のポジション>\n"
        +"今流れている曲の位置を指定した位置に変更する\n"
        +"省略:無し\n"
        +"\n"
        +"-stop\n"
        +"再生中のリクエスト曲を停止させる+\n"
        +"省略:無し\n"
        +"\n"
        +"-move <曲名>, <新しい位置>\n"
        +"指定した曲の位置を変更する\n"
        +"省略:m\n"
        +"\n"
        +"-prefix\n"
        +"botの接頭語を確認する\n"
        +"省略:無し\n"
        +"\n"
        +"-prefix <新しい接頭語>\n"
        +"botの接頭語を変更する"
        +"省略:無し\n"
        +"\n"
        +"-announce\n"
        +"「再生中」のアナウンスメッセージの設定を切り替える\n"
        +"省略:無し\n"
        +"\n"
        +"-perms\n"
        +"使用可能な全てのロールを表示する\n"
        +"省略:無し\n"
        +"\n"
        +"-perms <ロール | ユーザー>\n"
        +"指定した対象の設定がどうなっているかを確認できる\n"
        +"省略:無し\n"
        +"\n"
        +"-perms <deny | allow | clear> <ロール | ユーザー>, <パーミッション>\n"
        +"ロールまたはユーザーの権限を変更する allを使用することで全ての権限を選択できる\n"
        +"省略:無し\n"
      );
    }
  }
  module.exports = System
