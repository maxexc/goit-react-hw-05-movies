import ReactPaginate from "react-paginate";
import './Pagination.css';

function Pagination({ currentPage, setPage, total_pages  }) {
    const handlePageClick = event => {
        setPage({ page: event.selected + 1 });
      };
    return (
        <>
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick }
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={total_pages}
                forcePage={currentPage}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Pagination;