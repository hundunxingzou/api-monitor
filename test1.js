const axios = require('axios').default
const schedule = require('node-schedule')
const express = require('express')
const ChatBot = require('dingtalk-robot-sender')

const defaultOptions = {
  baseUrl: 'https://oapi.dingtalk.com/robot/send',
  accessToken:
    '12bc26e4b2e5db5068612928f6311ddb32e4c9a3146a3955a9c38570dbc44272',
  secret: 'SEC55f86bcf3cf05ee85ec20dbc3c09af5a80738e02978276ab0bf963aee5b84ef3',
}
const robot = new ChatBot(defaultOptions)

let rule2 = new schedule.RecurrenceRule()
rule2.minute = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
]
// 启动任务
let job2 = schedule.scheduleJob(rule2, () => {
  axios
    .get(
      'https://testapi.mdex.one/api/v1/heco/bridge/chain/gas?dest_chainid=56'
    )
    .then(function (response) {
      console.log(response)
      // 此处处理接收到的消息
      /** 推送文本消息 */
      let title = '接口错误发送'
      let text =
        `## 错误提交信息 @1oa-nxjdrukgmy\n` +
        `> 接口：https://testapi.mdex.one/api/v1/heco/bridge/chain/gas?dest_chainid=56 \n\n` +
        `> 错误信息：${response} \n`

      let at2 = {
        atMobiles: ['17750762315'],
        isAtAll: false,
      }
      robot.markdown(title, text, at2)
    })
    .catch(function (error) {
      console.log(error)
      // 此处处理接收到的消息
      /** 推送文本消息 */
      const title = '接口错误发送'
      const text =
        `## 错误提交信息 @17750762315\n` +
        `> 接口：https://testapi.mdex.one/api/v1/heco/bridge/chain/gas?dest_chainid=56 \n\n` +
        `> 错误信息：${error} \n`

      const at2 = {
        atMobiles: ['17750762315'],
        isAtAll: false,
      }
      robot.markdown(title, text, at2)
    })
    .finally(function () {
      // always executed
    })
})

// const axios = require('axios')
// async function sendMsg() {
//   try {
//     await axios.post('webhook_url', {
//       msgtype: 'markdown',
//       markdown: {
//         title: '[notice][cruiser-v2]智能辅助决策通知',
//         text: '## APP: test app android \n ### 监控活跃ad 6个,建议关停ad 6个 \n #### 01 账户[1111(账户一)]  \n - ad_id:11111 \n - ad_id:1111 \n - ad_id:111',
//       },
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
// ;(async () => {
//   await sendMsg()
// })()
