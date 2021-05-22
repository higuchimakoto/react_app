import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Flex, Heading, Link } from '@chakra-ui/layout'
import React, { memo, useCallback, VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { MenuIconButton } from '../../../atoms/button/MenuIconButton'
import { MenuDrawer } from '../../../molecules/MenuDrawer'


export const Header: VFC = memo(() => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const history = useHistory();

    // 不要な再レンダリングを防ぐためにusecallbackを使用する。
    const onClickHome = useCallback(() => history.push('/home'), [])
    const onClickUserManagement = useCallback(() => {
        console.log(history.location);
        history.push('/home/user_management')
    }, [])
    const onClickSetting = useCallback(() => history.push('/home/setting'), [])

    return (
        <>
            <Flex
                as='nav'
                bg='teal.500'
                color='gray.50'
                justify='space-between'
                padding={{ base: 3, md: 5 }}>
                <Flex align='center' as='a' mr={8} _hover={{ cursor: 'pointer' }} onClick={onClickHome}>
                    <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }}>ユーザー管理アプリ</Heading>
                </Flex>
                <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex' }}>
                    <Box pr={4}>
                        <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
                    </Box>
                    <Link onClick={onClickSetting}>設定</Link>
                </Flex>
                <MenuIconButton onOpen={onOpen} />
            </Flex >
            <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickUserManagement={onClickUserManagement} onClickSetting={onClickSetting} />
        </>
    )
})
