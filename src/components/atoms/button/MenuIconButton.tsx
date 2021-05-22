import { IconButton } from '@chakra-ui/button'
import { HamburgerIcon } from '@chakra-ui/icons';
import React, { memo, VFC } from 'react'


type Props = {
  onOpen: () => void
}

/**
 * memo化することで、propsが変更しない限り再レンダリングしない
 */
export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton aria-label="メニューボタン" icon={<HamburgerIcon />} size='sm' variant='unstyled' display={{ base: 'block', md: 'none' }} onClick={onOpen} />

  )
})
