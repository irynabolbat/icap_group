import "./Table.scss";
import { User } from "../../types/user"

type Props = {
  user: User
}

export const Row:React.FC<Props> = ({ user }) => {
  return (
    <tr key={user.id} className='row'>
      <td className='row__cell'>{user.name}</td>
      <td className='row__cell'>{user.email}</td>
      <td className='row__cell'>{user.birthday_date}</td>
      <td className='row__cell'>{user.phone_number}</td>
      <td className='row__cell'>{user.address}</td>
    </tr>
  )
}