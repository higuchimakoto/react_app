/* eslint-disable react-hooks/exhaustive-deps */
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Center, Stack, Wrap, WrapItem } from '@chakra-ui/layout'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Spinner } from '@chakra-ui/spinner'
import React, { memo, useCallback, useEffect, VFC } from 'react'
import { useAllUsers } from '../../hooks/useAllUsers'
import { UserCard } from './organisms/user/UserCard'
import { UserDetailModal } from './organisms/user/UserDetailModal'

export const UserManagement: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getUsers, users, loading } = useAllUsers()

    // 画面表示時に１回だけ処理をする場合
    useEffect(() => {
        getUsers()
    }, [])

    const onClickUser = useCallback(() => onOpen(), [])

    return (
        <>
            {loading ? (
                <Center h='100vh'>
                    <Spinner />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }}>
                    {
                        users.map((user) => (
                            <WrapItem key={user.id} mx='auto' >
                                <UserCard imageUrl='https://source.unsplash.com/random' userName={user.username} fullName={user.name} onClick={onClickUser} />
                            </WrapItem>
                        ))
                    }
                </Wrap>
            )}
            <UserDetailModal isOpen={isOpen} onClose={onClose} />
        </>
    )
})
