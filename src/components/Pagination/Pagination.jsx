import { PaginationPanel, PaginationWrapper } from "./Pagination.styled";

const Pagination = ({ page, onChange, total_pages  }) => {
    // const count = 100
    return (
        <PaginationWrapper>
            <PaginationPanel
                count={total_pages}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={onChange }
            />
        </PaginationWrapper>
    )
}

export default Pagination