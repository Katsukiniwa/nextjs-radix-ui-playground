import { style } from '@vanilla-extract/css'

export const section = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '20px'
})

export const select = style({
  marginBottom: '20px'
})
