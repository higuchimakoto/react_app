import { useCallback, useState } from "react"
import { User } from "../../types/api/user"

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
}


export const useSelectUser = () => {
  // 初期値がnullなので、型はUset型かnull型
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props
    const targetUser = users.find(user => user.id === id)
    // 絶対にある場合は！マークをつける
    setSelectedUser(targetUser!)
    onOpen()
  }, [])
  return { onSelectUser, selectedUser }
}
