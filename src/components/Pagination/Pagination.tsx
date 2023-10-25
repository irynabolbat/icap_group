import "./Pagination.scss";

type Props = {
  totalItems: number,
  currentPage: number,
  onPageChange: (page: number) => void,
  itemsPerPage: number
}

export const Pagination:React.FC<Props> = ({ totalItems, currentPage, onPageChange , itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  
  return (
    <div className="pagination">
      <button 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className="pagination_button"
      >
        {"<"}
      </button>

      {Array.from({ length: Math.ceil(totalPages) }).map((_, index) => (
        <button 
          key={index} 
          onClick={() => handlePageChange(index + 1)} 
          className={currentPage === index + 1 ? 'pagination_button active' : 'pagination_button'}
        >
          {index + 1}
        </button>
      ))}
      <button 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === Math.ceil(totalPages)}
        className="pagination_button"
      >
        {">"}
      </button>
    </div>
  );
}