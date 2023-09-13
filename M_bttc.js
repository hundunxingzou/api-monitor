const axios = require('axios').default
const schedule = require('node-schedule')
const express = require('express')
const ChatBot = require('dingtalk-robot-sender')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const robot = new ChatBot({
  baseUrl: 'https://oapi.dingtalk.com/robot/send',
  // 此处是钉钉生成的 webhook 中 ？号后面的token
  accessToken:
    'e91dfa0eba828185029ecc803c78c3e0e56bff16aec01429670cc4259504382c',
  // 此处是签名
  secret: 'SEC9a154a13637d8a167f2ba74ecf28500d73571352056ebaad29bb114c3323c18a',
})

// 定义规则
let rule = new schedule.RecurrenceRule()
rule.minute = [
  0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57,
] // 每隔 10 秒执行一次

// 启动任务
let job = schedule.scheduleJob(rule, () => {
  axios
    .get('https://webapi.mdex.one/api/v1/bttc/repurchase/records')
    .catch(function (error) {
      // handle error

      // 此处处理接收到的消息
      /** 推送文本消息 */
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @15817324178\n` +
        `> 接口：https://webapi.mdex.one/api/v1/bttc/repurchase/records \n\n` +
        `> 错误信息：${error} \n`

      const at2 = {
        atMobiles: ['15817324178'],
        isAtAll: false,
      }
      robot.markdown(title, text, at2)
    })
    .finally(function () {
      // always executed
    })
})
let rule1 = new schedule.RecurrenceRule()
rule1.minute = [
  1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58,
] // 每隔 10 秒执行一次

// 启动任务
let job1 = schedule.scheduleJob(rule1, () => {
  axios
    .get('https://webapi.mdex.one/api/v1/bttc/repurchase/burns')
    // .then(function (response) {
    //   // handle success
    //   console.log(response)
    // })
    .catch(function (error) {
      // 此处处理接收到的消息
      /** 推送文本消息 */
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @15817324178\n` +
        `> 接口：https://webapi.mdex.one/api/v1/bttc/repurchase/burns \n\n` +
        `> 错误信息：${error} \n`

      const at2 = {
        atMobiles: ['15817324178'],
        isAtAll: false,
      }
      robot.markdown(title, text, at2)
    })
    .finally(function () {
      // always executed
    })
})

// 定义规则
let rule2 = new schedule.RecurrenceRule()
rule2.minute = [
  0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57,
] // 每隔 10 秒执行一次

// 启动任务
let job2 = schedule.scheduleJob(rule2, () => {
  axios
    .get(
      'https://webapi.mdex.one/api/v1/bttc/bridge/chain/gas?dest_chainid=199'
    )
    // .then(function (response) {
    //   // handle success
    //   console.log(response)
    // })
    .catch(function (error) {
      // 此处处理接收到的消息
      /** 推送文本消息 */
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @15817324178\n` +
        `> 接口：https://webapi.mdex.one/api/v1/bttc/bridge/chain/gas?dest_chainid=199 \n\n` +
        `> 错误信息：${error} \n`

      const at2 = {
        atMobiles: ['15817324178'],
        isAtAll: false,
      }
      robot.markdown(title, text, at2)
    })
    .finally(function () {
      // always executed
    })
})
let rule3 = new schedule.RecurrenceRule()
rule3.minute = [
  1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58,
] // 每隔 10 秒执行一次

// 启动任务
let job3 = schedule.scheduleJob(rule3, () => {
  axios
    .get('https://webapi.mdex.one/api/v1/bttc/boardroom/pools')
    // .then(function (response) {
    //   // handle success
    //   console.log(response)
    // })
    .catch(function (error) {
      // 此处处理接收到的消息
      /** 推送文本消息 */
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @15817324178\n` +
        `> 接口：https://webapi.mdex.one/api/v1/bttc/boardroom/pools \n\n` +
        `> 错误信息：${error} \n`

      const at2 = {
        atMobiles: ['15817324178'],
        isAtAll: false,
      }
      robot.markdown(title, text, at2)
    })
    .finally(function () {
      // always executed
    })
})
let rule4 = new schedule.RecurrenceRule()
rule4.minute = [
  2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59,
] // 每隔 10 秒执行一次

// 启动任务
let job4 = schedule.scheduleJob(rule4, () => {
  axios
    .get('https://webapi.mdex.one/api/v1/bttc/miningpool/pools')
    // .then(function (response) {
    //   // handle success
    //   console.log(response)
    // })
    .catch(function (error) {
      // 此处处理接收到的消息
      /** 推送文本消息 */
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @15817324178\n` +
        `> 接口：https://webapi.mdex.one/api/v1/bttc/miningpool/pools \n\n` +
        `> 错误信息：${error} \n`

      const at2 = {
        atMobiles: ['15817324178'],
        isAtAll: false,
      }
      robot.markdown(title, text, at2)
    })
    .finally(function () {
      // always executed
    })
})
let rule5 = new schedule.RecurrenceRule()
rule5.minute = [
  2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59,
] // 每隔 10 秒执行一次

// 启动任务
let job5 = schedule.scheduleJob(rule5, () => {
  axios
    .get('https://webapi.mdex.one/api/v1/bttc/miningpool/swap')
    // .then(function (response) {
    //   // handle success
    //   console.log(response)
    // })
    .catch(function (error) {
      // 此处处理接收到的消息
      /** 推送文本消息 */
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @15817324178\n` +
        `> 接口：https://webapi.mdex.one/api/v1/bttc/miningpool/swap \n\n` +
        `> 错误信息：${error} \n`

      const at2 = {
        atMobiles: ['15817324178'],
        isAtAll: false,
      }
      robot.markdown(title, text, at2)
    })
    .finally(function () {
      // always executed
    })
})
let rule6 = new schedule.RecurrenceRule()
rule6.minute = [
  2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59,
] // 每隔 10 秒执行一次

// 启动任务
let job6 = schedule.scheduleJob(rule6, () => {
  axios
    .get('https://webapi.mdex.one/api/v1/bttc/statistical/charts')
    // .then(function (response) {
    //   // handle success
    //   console.log(response)
    // })
    .catch(function (error) {
      // 此处处理接收到的消息
      /** 推送文本消息 */
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @15817324178\n` +
        `> 接口：https://webapi.mdex.one/api/v1/bttc/statistical/charts\n\n` +
        `> 错误信息：${error} \n`

      const at2 = {
        atMobiles: ['15817324178'],
        isAtAll: false,
      }
      robot.markdown(title, text, at2)
    })
    .finally(function () {
      // always executed
    })
})
