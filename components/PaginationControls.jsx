import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationEllipsis,
} from "@/components/ui/pagination"
import { Button } from "./ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {

    const renderPageNumbers = () => {
        if (totalPages <= 3) {
            // Ha 3 vagy kevesebb oldal van, mindegyiket megjelenítjük
            return Array.from({ length: totalPages }, (_, i) => {
                const page = i + 1
                const isActive = page === currentPage

                return (
                    <PaginationItem key={i}>
                        <Button
                            onClick={() => onPageChange(page)}
                            variant={isActive ? "outline" : "ghost"}
                            className={cn(
                                "w-9 h-9",
                                "focus-visible:ring-0 focus-visible:ring-offset-0",
                                isActive && "border border-muted text-primary"
                            )}
                        >
                            {page}
                        </Button>
                    </PaginationItem>
                )
            })
        }

        // Ha több mint 3 oldal van, csak az első, aktuális és utolsó oldal látszik
        const pages = []

        // Első oldal
        pages.push(
            <PaginationItem key={1}>
                <Button
                    onClick={() => onPageChange(1)}
                    variant={currentPage === 1 ? "outline" : "ghost"}
                    className={cn(
                        "w-9 h-9",
                        "focus-visible:ring-0 focus-visible:ring-offset-0",
                        currentPage === 1 && "border border-muted text-primary"
                    )}
                >
                    1
                </Button>
            </PaginationItem>
        )

        // Ellipsis az első oldal után, ha a jelenlegi oldal > 2
        if (currentPage > 2) {
            pages.push(
                <PaginationItem key="ellipsis-start">
                    <PaginationEllipsis />
                </PaginationItem>
            )
        }

        // Aktuális oldal (ha nem az első és nem az utolsó)
        if (currentPage !== 1 && currentPage !== totalPages) {
            pages.push(
                <PaginationItem key={currentPage}>
                    <Button
                        onClick={() => onPageChange(currentPage)}
                        variant="outline"
                        className={cn(
                            "w-9 h-9",
                            "focus-visible:ring-0 focus-visible:ring-offset-0",
                            "border border-muted text-primary"
                        )}
                    >
                        {currentPage}
                    </Button>
                </PaginationItem>
            )
        }

        // Ellipsis az utolsó oldal előtt, ha a jelenlegi oldal < totalPages - 1
        if (currentPage < totalPages - 1) {
            pages.push(
                <PaginationItem key="ellipsis-end">
                    <PaginationEllipsis />
                </PaginationItem>
            )
        }

        // Utolsó oldal (ha nem ugyanaz mint az első)
        if (totalPages > 1) {
            pages.push(
                <PaginationItem key={totalPages}>
                    <Button
                        onClick={() => onPageChange(totalPages)}
                        variant={currentPage === totalPages ? "outline" : "ghost"}
                        className={cn(
                            "w-9 h-9",
                            "focus-visible:ring-0 focus-visible:ring-offset-0",
                            currentPage === totalPages && "border border-muted text-primary"
                        )}
                    >
                        {totalPages}
                    </Button>
                </PaginationItem>
            )
        }

        return pages
    }

    return (
        <Pagination>
            <PaginationContent className="flex gap-2">
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

                {renderPageNumbers()}

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