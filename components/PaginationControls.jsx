import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination"
import { Button } from "./ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <Button
                        disabled={currentPage === 1}
                        onClick={() => onPageChange(currentPage - 1)}
                        variant="secondary"
                        size="icon"
                    >
                        <ChevronLeftIcon />
                    </Button>
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i}>
                        <Button
                            disabled={currentPage === totalPages}
                            onClick={() => onPageChange(i + 1)}
                            variant="ghost"
                        >
                            {i + 1}
                        </Button>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <Button
                        disabled={currentPage === totalPages}
                        onClick={() => onPageChange(currentPage + 1)}
                        variant="secondary"
                        size="icon"
                    >
                        <ChevronRightIcon />
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationControls