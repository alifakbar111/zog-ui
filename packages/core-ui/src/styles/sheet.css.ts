import { type VariantProps, tv } from 'tailwind-variants'

export const sheetStyles = tv({
  slots: {
    base: [
      'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out',
      'data-[state=open]:animate-in data-[state=open]:duration-500',
      'data-[state=closed]:animate-out data-[state=closed]:duration-300',
    ],
    overlay: [
      'fixed inset-0 z-50 bg-black/80',
      'data-[state=open]:motion-preset-fade data-[state=open]:motion-duration-300',
      'data-[state=closed]:motion-opacity-out-0 motion-duration-[0.35s]/opacity',
    ],
    positioner: [
      'fixed inset-0 z-50 flex h-[100dvh] w-screen items-center justify-center overflow-auto',
    ],
    contentCloseWrapper: [
      'absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100',
      'focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none',
      'data-[state=open]:bg-secondary',
    ],
    contentCloseIcon: 'size-4 cursor-pointer',
    header: 'flex flex-col space-y-2 text-center sm:text-left',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    title: 'font-semibold text-foreground text-lg',
    description: 'text-muted-foreground text-sm',
  },
  variants: {
    side: {
      // FIXME: exit animation slide for left and top: https://docs.rombo.co/tailwind/base-animations/translate
      top: 'data-[state=closed]:motion-preset-slide-up data-[state=open]:motion-preset-slide-down top-0 border-b',
      bottom:
        'data-[state=closed]:motion-translate-y-out-100 data-[state=closed]:motion-preset-slide-down data-[state=open]:motion-preset-slide-up bottom-0 border-t',
      left: 'data-[state=closed]:motion-preset-slide-left data-[state=open]:motion-preset-slide-right left-0 border-r',
      right:
        'data-[state=closed]:motion-translate-x-out-100 data-[state=closed]:motion-preset-slide-right data-[state=open]:motion-preset-slide-left right-0 border-l',
    },
  },
  compoundVariants: [
    {
      side: ['top', 'bottom', 'left', 'right'],
      className: 'data-[state=closed]:motion-duration-500 data-[state=open]:motion-duration-300',
    },
    {
      side: ['top', 'bottom'],
      className: 'inset-x-0',
    },
    {
      side: ['left', 'right'],
      className: 'data-[state=closed]:motion-opacity-in-0 inset-y-0 h-full w-3/4 sm:max-w-sm',
    },
  ],
  defaultVariants: {
    side: 'right',
  },
})

export type SheetVariants = VariantProps<typeof sheetStyles>
