const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wxb614ca5c4e82db54',

    // 微信小程序 App Secret
    appSecret: '',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'wxb614ca5c4e82db54',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
// npm install tencentcloud-sdk-nodejs --save
// npm install wx-server-sdk --save
// aihome
// 8cg6zyc
// tcp://8cg6zyc.mqtt.iot.gz.baidubce.com:1883
// ssl://8cg6zyc.mqtt.iot.gz.baidubce.com:1884
// wss://8cg6zyc.mqtt.iot.gz.baidubce.com:443
// 名称：aihome
// 密钥：Cpctsc3hWyWw9maE