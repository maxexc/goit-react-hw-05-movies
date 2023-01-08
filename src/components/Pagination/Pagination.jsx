import { PaginationPanel, PaginationWrapper } from "./Pagination.styled";

const Pagination = ({ page, onChange  }) => {
    const count = 100
    return (
        <PaginationWrapper>
            <PaginationPanel
                count={count}
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