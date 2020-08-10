  class System {
    constructor(message, client){
      this.message = message;
      this.client = client;
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
        )
    }

    imgChange(img_url) {
      this.client.user.setAvatar(img_url);
      this.message.channel.send("image changing now...");
    }

    outputImg() {
      this.message.channel.send(this.client.user.avatarURL());
    }

    nameChange(name) {
      this.message.guild.members.fetch(this.client.user.id).setNickname(name);
      // this.client.user.setUsername(name);
      this.message.channel.send("name changing now...");
    }
  }
  module.exports = System
