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
              fe_id: Random.id(),
              type: 'questionInfo',
              title: 'Question information',
              isHidden: false,
              isLocked: false,
              props: {
                title: 'Question title',
                desc: 'Question description',
              },
            },
            {
              fe_id: Random.id(),
              type: 'questionTitle',
              title: 'Title',
              isHidden: false,
              isLocked: false,
              props: {
                text: 'Personal info research',
                level: 1,
                isCenter: false,
              },
            },
            {
              fe_id: Random.id(),
              type: 'questionInput',
              title: 'Input box 1',
              isHidden: false,
              isLocked: false,
              props: {
                title: 'Your name',
                placeholder: 'Please input name...',
              },
            },
            {
              fe_id: Random.id(),
              type: 'questionInput',
              title: 'Input box 2',
              isHidden: false,
              isLocked: false,
              props: {
                title: 'Your phone',
                placeholder: 'Please input phone...',
              },
            },
            {
              fe_id: Random.id(),
              type: 'questionParagraph',
              title: 'Paragraph',
              isHidden: false,
              isLocked: false,
              props: {
                text: 'One row paragraph',
                isCenter: false,
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
