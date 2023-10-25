import "./Table.scss";
import { Row } from "./Row";
import { User } from "../../types/user";

type Props = {
  users: User[]
}

export const Table:React.FC<Props> = ({ users }) => {
  return (
    <div className='wrapper'>
      <table className='table'>
        <thead className='table__heared'>
          <tr>
            <th className='table__column'>Name</th>
            <th className='table__column'>Email</th>
            <th className='table__column'>Birthday</th>
            <th className='table__column'>Phone number</th>
            <th className='table__column'>address</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <Row 
              key={user.id}
              user={user}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}