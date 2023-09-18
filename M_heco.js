const axios = require('axios').default
const express = require('express')
const ChatBot = require('dingtalk-robot-sender')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const robot = new ChatBot({
  baseUrl: 'https://oapi.dingtalk.com/robot/send',
  accessToken:
    'e91dfa0eba828185029ecc803c78c3e0e56bff16aec01429670cc4259504382c',
  // 此处是签名
  secret: 'SEC9a154a13637d8a167f2ba74ecf28500d73571352056ebaad29bb114c3323c18a',
})

async function miningpool_pools() {
  axios
    .get('https://webapi.mdex.one/api/v1/heco/miningpool/pools')
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @妙\n` +
        `> 接口：https://webapi.mdex.one/api/v1/heco/miningpool/pools \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function records() {
  axios
    .get('https://webapi.mdex.one/api/v1/heco/repurchase/records')
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @妙\n` +
        `> 接口：https://webapi.mdex.one/api/v1/heco/repurchase/records \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
  // delay
}
async function burns() {
  axios
    .get('https://webapi.mdex.one/api/v1/heco/repurchase/burns')
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @妙\n` +
        `> 接口：https://webapi.mdex.one/api/v1/heco/repurchase/burns \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function gas() {
  axios
    .get(
      'https://webapi.mdex.one/api/v1/heco/bridge/chain/gas?dest_chainid=128'
    )
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @妙\n` +
        `> 接口：https://webapi.mdex.one/api/v1/heco/bridge/chain/gas?dest_chainid=128 \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
  // delay
}
async function boardroom_pools() {
  axios
    .get('https://webapi.mdex.one/api/v1/heco/boardroom/pools')
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @妙\n` +
        `> 接口：https://webapi.mdex.one/api/v1/heco/boardroom/pools \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function swap() {
  axios
    .get('https://webapi.mdex.one/api/v1/heco/miningpool/swap')
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @妙\n` +
        `> 接口：https://webapi.mdex.one/api/v1/heco/miningpool/swap \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}
async function charts() {
  axios
    .get('https://webapi.mdex.one/api/v1/heco/statistical/charts')
    .catch(function (error) {
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @妙\n` +
        `> 接口：https://webapi.mdex.one/api/v1/heco/statistical/charts \n\n` +
        `> 错误信息：${error} \n`

      robot.markdown(title, text)
    })
    .finally(function () {
      // always executed
    })
}

async function monitr() {
  await miningpool_pools()
  await records()
  await burns()
  await gas()
  await boardroom_pools()
  await swap()
  await charts()
}
monitr().catch((error) => {
  console.log(error)
})
