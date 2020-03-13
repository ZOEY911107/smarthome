const cloud = require('wx-server-sdk') //小程序云开发SDK
const tencentcloud = require("tencentcloud-sdk-nodejs"); //腾讯云API 3.0 SDK
const secret = require('./config.js');
cloud.init({
  env: 'test-wsnw3'
}) //云开发初始化
var synVerifyFace = function (Image,PersonId) { //人脸识别API
  const IaiClient = tencentcloud.iai.v20180301.Client; //API版本
  const models = tencentcloud.iai.v20180301.Models; //API版本

  const Credential = tencentcloud.common.Credential;
  const ClientProfile = tencentcloud.common.ClientProfile;
  const HttpProfile = tencentcloud.common.HttpProfile;
  let cred = new Credential(secret.SecretId, secret.SecretKey); //腾讯云的SecretId和SecretKey，打开config.js文件配置
  let httpProfile = new HttpProfile();
  httpProfile.endpoint = "iai.tencentcloudapi.com"; //腾讯云人脸识别API接口
  let clientProfile = new ClientProfile();
  clientProfile.httpProfile = httpProfile;
  let client = new IaiClient(cred, "", clientProfile); //调用就近地域

  let req = new models.VerifyFaceRequest();
  let params = '{"Image":"' + Image + '","PersonId":"' + PersonId + '"}' //拼接参数
  req.from_json_string(params);
  return new Promise(function (resolve, reject) { //构造异步函数
    client.VerifyFace(req, function (errMsg, response) {
      if (errMsg) {
        reject(errMsg)
      } else {
        resolve(response);
      }
    })
  })
}

exports.main = async (event, context) => {

  console.log("Image:" + event.Image)
  console.log("PersonId:" + event.PersonId)
  datas = await synVerifyFace(event.Image, event.PersonId) //调用异步函数，向腾讯云API发起人脸检测请求
  return datas
}

