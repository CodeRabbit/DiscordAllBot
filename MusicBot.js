class MusicBot{
  constructor(message){
    this.message = message;
  }
  async playMusic() {
    if (this.mssage.content.startsWith('!yt') && this.message.guild) {
      // メッセージから動画URLだけを取り出す
      const url = this.message.content.split(' ')[1]
      // まず動画が見つからなければ処理を止める
      if (!ytdl.validateURL(url)) return this.message.reply('動画が存在しません！')
      // コマンドを実行したメンバーのボイスチャンネル指定
      let channel = this.message.member.voice.channel
      // コマンドを実行したメンバーがボイスチャンネルに入ってなければ処理を止める
      if (!channel) return this.message.reply('先にボイスチャンネルに参加してください！')
      // チャンネルに参加
      const connection = await channel.join()
      // 動画の音源を取得
      const stream = ytdl(ytdl.getURLVideoID(url), { filter: 'audioonly' })
      // 再生
      const dispatcher = connection.play(stream)

      // 再生が終了したら抜ける
      dispatcher.once('finish', () => {
        channel.leave()
      })
    }
  }
}
module.exports = MusicBot