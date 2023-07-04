const Mock = require('mockjs')

const Random = Mock.Random

function getComponentList() {
  return [
    {
      fe_id: 'c1', //Random.id(),
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
      fe_id: 'c2', //Random.id(),
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
      fe_id: 'c3', //Random.id(),
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
      fe_id: 'c4', //Random.id(),
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
      fe_id: 'c5', //Random.id(),
      type: 'questionTextarea',
      title: 'Multiple lines input',
      isHidden: false,
      isLocked: false,
      props: {
        title: 'Your hobbies',
        placeholder: 'Please input...',
      },
    },
    {
      fe_id: 'c6', //Random.id(),
      type: 'questionParagraph',
      title: 'Paragraph',
      isHidden: false,
      isLocked: false,
      props: {
        text: 'One row paragraph',
        isCenter: false,
      },
    },
    {
      fe_id: 'c7', //Random.id(),
      type: 'questionRadio',
      title: 'Single selection',
      isHidden: false,
      isLocked: false,
      props: {
        title: 'Single selection title',
        isVertical: false,
        options: [
          { value: 'item1', text: 'Option1' },
          { value: 'item2', text: 'Option2' },
          { value: 'item3', text: 'Option3' },
        ],
        value: '',
      },
    },
    {
      fe_id: 'c8', //Random.id(),
      type: 'questionCheckbox',
      title: 'Multiple selection',
      isHidden: false,
      isLocked: false,
      props: {
        title: 'Multiple selection title',
        isVertical: false,
        list: [
          { value: 'item1', text: 'Option1', checked: false },
          { value: 'item2', text: 'Option2', checked: false },
          { value: 'item3', text: 'Option3', checked: false },
        ],
      },
    },
  ]
}

module.exports = getComponentList
