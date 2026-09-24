<script lang="ts">
import { h } from 'vue'
import type { PropType, VNode } from 'vue'
import type { Segment } from '~/data/issue'

/**
 * Renders rich-text segments: `{ text, em }` → text or <em>text</em>.
 * With `lines`, each segment is placed on its own line.
 */
export default defineNuxtComponent({
  name: 'EmText',
  props: {
    segments: { type: Array as PropType<Segment[]>, required: true },
    lines: { type: Boolean, default: false },
  },
  render() {
    const out: (VNode | string)[] = []
    this.segments.forEach((segment, i) => {
      if (this.lines && i > 0) out.push(h('br'))
      out.push(segment.em ? h('em', segment.text) : segment.text)
    })
    return out
  },
})
</script>
