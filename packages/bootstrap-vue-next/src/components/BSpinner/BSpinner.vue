<template>
  <component
    :is="props.tag"
    :class="computedClasses"
    :role="props.label || hasLabelSlot ? props.role : null"
    :aria-hidden="props.label || hasLabelSlot ? null : true"
  >
    <span v-if="props.label || hasLabelSlot" class="visually-hidden">
      <slot name="label">{{ props.label }}</slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {BSpinnerProps} from '../../types/ComponentProps'
import {isEmptySlot} from '../../utils/dom'
import {useDefaults} from '../../composables/useDefaults'

const _props = withDefaults(defineProps<BSpinnerProps>(), {
  label: undefined,
  role: 'status',
  small: false,
  tag: 'span',
  type: 'border',
  variant: null,
})

const props = useDefaults(_props, 'BSpinner')

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => [
  `spinner-${props.type}`,
  {
    [`spinner-${props.type}-sm`]: props.small,
    [`text-${props.variant}`]: props.variant !== null,
  },
])

const hasLabelSlot = computed(() => !isEmptySlot(slots.label))
</script>
