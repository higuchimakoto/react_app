/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/hooks'
import { Center, Wrap, WrapItem } from '@chakra-ui/layout'

import { Spinner } from '@chakra-ui/spinner'
import React, { memo, useCallback, useEffect, VFC } from 'react'
import { useAllUsers } from '../../hooks/useAllUsers'
import { useLoginUser } from '../../hooks/useLoginUser'
import { UserCard } from './organisms/user/UserCard'
import { UserDetailModal } from './organisms/user/UserDetailModal'
import { useSelectUser } from './useSelectUser'

export const UserManagement: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getUsers, users, loading } = useAllUsers()
    const { selectedUser, onSelectUser } = useSelectUser()
    const { loginUser } = useLoginUser()
    console.log(loginUser);


    // 画面表示時に１回だけ処理をする場合
    useEffect(() => {
        getUsers()
    }, [])

    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users, onOpen });
    }, [users, onOpen, selectedUser])

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
                                <UserCard imageUrl='https://source.unsplash.com/random' userName={user.username} fullName={user.name} onClick={onClickUser} id={user.id} />
                            </WrapItem>
                        ))
                    }
                </Wrap>
            )}
            <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
        </>
    )
})
