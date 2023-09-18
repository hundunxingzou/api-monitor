const axios = require('axios').default
const ChatBot = require('dingtalk-robot-sender')
const robot = new ChatBot({
  baseUrl: 'https://oapi.dingtalk.com/robot/send',
  accessToken:
    'e91dfa0eba828185029ecc803c78c3e0e56bff16aec01429670cc4259504382c',
  // 此处是签名
  secret: 'SEC9a154a13637d8a167f2ba74ecf28500d73571352056ebaad29bb114c3323c18a',
})
async function settings() {
  axios
    .get('https://pro.openmeta.name/settings')
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @武\n` +
        `> 接口：https://pro.openmeta.name/settings \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function list_bsc() {
  axios
    .get('https://pro.openmeta.name/banner/list?chainId=56')
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @武\n` +
        `> 接口：https://pro.openmeta.name/banner/list?chainId=56 \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function health() {
  axios
    .get('https://pro.openmeta.name/health')
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @武\n` +
        `> 接口：https://pro.openmeta.name/health \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function stats() {
  axios
    .get(
      'https://pro.openmeta.name/users/stats?chainId=56&walletAddress=0x8C17Ea28c9c285DC16b467c12011991e02DBE155'
    )
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @武\n` +
        `> 接口：https://pro.openmeta.name/users/stats?chainId=56&walletAddress=0x8C17Ea28c9c285DC16b467c12011991e02DBE155 \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function likes() {
  axios
    .get(
      'https://pro.openmeta.name/likes?chainId=56&page=1&take=10&walletAddress=0x8C17Ea28c9c285DC16b467c12011991e02DBE155'
    )
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @武\n` +
        `> 接口：https://pro.openmeta.name/likes?chainId=56&page=1&take=10&walletAddress=0x8C17Ea28c9c285DC16b467c12011991e02DBE155 \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function users() {
  axios
    .get(
      'https://pro.openmeta.name/users/0x8C17Ea28c9c285DC16b467c12011991e02DBE155'
    )
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @武\n` +
        `> 接口：https://pro.openmeta.name/users/0x8C17Ea28c9c285DC16b467c12011991e02DBE155 \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function collections() {
  axios
    .get('https://pro.openmeta.name/collections?chainId=56&page=1&take=10')
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @武\n` +
        `> 接口：https://pro.openmeta.name/collections?chainId=56&page=1&take=10 \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function rank() {
  axios
    .get(
      'https://pro.openmeta.name/transaction-records/rank-v2?chainId=56&page=1&take=10&timeLimit=day'
    )
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @武\n` +
        `> 接口：https://pro.openmeta.name/transaction-records/rank-v2?chainId=56&page=1&take=10&timeLimit=day \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function trade() {
  axios
    .get('https://pro.openmeta.name/transaction-records/trade-ranking/56')
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @武\n` +
        `> 接口：https://pro.openmeta.name/transaction-records/trade-ranking/56 \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function monitr() {
  await settings()
  await list_bsc()
  await health()
  await stats()
  await likes()
  await users()
  await collections()
  await rank()
  await trade()
}
monitr().catch((error) => {
  console.log(error)
})
