const Mock = require('mockjs')
const getStatList = require('./data/getStatList')

const Random = Mock.Random

module.exports = [
  {
    url: '/api/stat/:questionId',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          total: 100,
          list: getStatList(),
        },
      }
    },
  },
  {
    url: '/api/stat/:questionId/:componentId',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          stat: [
            { name: 'Option1', count: 20 },
            { name: 'Option2', count: 10 },
            { name: 'Option3', count: 25 },
          ],
        },
      }
    },
  },
]
