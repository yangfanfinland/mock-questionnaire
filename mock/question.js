const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestionList')

const Random = Mock.Random

module.exports = [
  {
    url: '/api/question/:id',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.name(),
          componentList: [
            {
              id: Random.id(),
              type: 'questionTitle',
              title: 'Title',
              props: { text: 'One row title', level: 1, isCenter: false },
            },
            {
              id: Random.id(),
              type: 'questionInput',
              title: 'Input box',
              props: {
                title: 'Input box title',
                placeholder: 'Please input...',
              },
            },
          ],
        },
      }
    },
  },
  {
    url: '/api/question',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      }
    },
  },
  {
    url: '/api/question',
    method: 'get',
    response(ctx) {
      const { url = '', query = {} } = ctx
      const isStar = url.indexOf('isStar=true') >= 0
      const isDeleted = url.indexOf('isDeleted=true') >= 0
      const pageSize = parseInt(query.pageSize) || 10

      return {
        errno: 0,
        data: {
          list: getQuestionList({ len: pageSize, isDeleted, isStar }),
          total: 100,
        },
      }
    },
  },
  {
    url: '/api/question/:id',
    method: 'patch',
    response() {
      return {
        errno: 0,
      }
    },
  },
  {
    url: '/api/question/duplicate/:id',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      }
    },
  },
  {
    url: '/api/question',
    method: 'delete',
    response() {
      return {
        errno: 0,
      }
    },
  },
]
