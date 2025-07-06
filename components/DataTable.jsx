import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"


const DataTable = ({ columns = [], data = [] }) => {

    if (!columns.length) return <div className="text-sm text-muted-foreground">No columns provided.</div>
    if (!data.length) return <div className="text-sm text-muted-foreground">No data available.</div>

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map((col) => (
                        <TableHead key={col.accessor}>{col.header}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((row, i) => (
                    <TableRow key={i}>
                        {columns.map((col) => (
                            <TableCell key={col.accessor}>{row[col.accessor]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DataTable