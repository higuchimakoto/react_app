import { Button } from '@chakra-ui/react'
import React, { VFC, memo, ReactNode } from 'react'

type Props = {
  children: ReactNode
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  // デフォルト引数を設定しておく。
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button bg='teal.400' color='#fff' _hover={{ opacity: 0.8 }} onClick={onClick} disabled={disabled || loading} isLoading={loading}>{children}</Button>
  )
})
