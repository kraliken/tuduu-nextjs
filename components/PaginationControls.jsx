import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination"
import { Button } from "./ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {

    return (
        <Pagination>
            <PaginationContent className="flex gap-3">
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
                {Array.from({ length: totalPages }, (_, i) => {

                    const page = i + 1
                    const isActive = page === currentPage

                    return (
                        <PaginationItem key={i}>
                            <Button
                                // disabled={currentPage === totalPages}
                                onClick={() => onPageChange(i + 1)}
                                variant={isActive ? "outline" : "ghost"}
                                className={cn(
                                    "w-9 h-9", // vagy pl. w-10 h-10 ha nagyobbat akarsz
                                    "focus-visible:ring-0 focus-visible:ring-offset-0", // kikapcsolja a focus ringet
                                    isActive && "border border-muted-foreground text-primary"
                                )}
                            >
                                {i + 1}
                            </Button>
                        </PaginationItem>

                    )
                })}
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