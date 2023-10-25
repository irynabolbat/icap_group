import { useEffect, useState } from 'react';
import { Table } from '../../components/Table/Table';
import './TablePage.scss';
import { User } from '../../types/user';
import { Loader } from '../../components/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';
import { ExtraInfo } from '../../components/ExtraInfo/ExtraInfo';

export const TablePage= () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState("3");

  const indexOfLastItem = currentPage * +itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - +itemsPerPage;

  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setLoading(true);

    fetch('https://technical-task-api.icapgroupgmbh.com/api/table')
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => {
        throw new Error('Error:', error)
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(event.target.value);
  }  

  return (
    <div className="table_page">
      <h1 className="table_page_title">Users</h1>

      <div className="selector_container">
        <span>Show users per page:</span>

        <select 
          name="itemsPerPage" 
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="select"
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>

      {loading 
        ? <Loader />
        : <Table users={currentUsers} />
      }

      <div className="pagination_container">
        <Pagination 
          totalItems={users.length}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          itemsPerPage={+itemsPerPage}
        />
      </div>

      <ExtraInfo />
    </div>
  );
}