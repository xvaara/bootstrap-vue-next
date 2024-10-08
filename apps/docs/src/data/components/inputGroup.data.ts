import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BInputGroup',
      sourcePath: '/BInputGroup/BInputGroup.vue',
      props: {
        '': {
          append: {
            type: 'string',
            default: undefined,
            description: 'Text to append to the input group',
          },
          appendHtml: {
            type: 'string',
            default: undefined,
            description:
              "HTML string to append to the input group. Has precedence over 'append' prop",
          },
          prepend: {
            type: 'string',
            default: undefined,
            description: 'Text to prepend to the input group',
          },
          prependHtml: {
            type: 'string',
            default: undefined,
            description:
              "HTML string to prepend to the input group. Has precedence over 'prepend' prop",
          },
          ...pick(buildCommonProps(buildCommonProps()), ['id', 'size', 'tag']),
        } satisfies Record<keyof BvnComponentProps['BInputGroup'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'append',
          description: 'Content to append to the input group',
        },
        {
          name: 'default',
          description: 'Content to place in the input group',
        },
        {
          name: 'prepend',
          description: 'Content to prepend to the input group',
        },
      ],
    },
    {
      component: 'BInputGroupText',
      sourcePath: '/BInputGroup/BInputGroupText.vue',
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description: 'Content to place in the input group text',
          },
          ...pick(buildCommonProps(buildCommonProps()), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BInputGroupText'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the input group text',
        },
      ],
    },
  ],
}
