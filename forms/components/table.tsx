import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Grid } from '@mui/material';
import { Separete } from './utilDiv/style';

interface Column {
    id: 'name' | 'taxNumber' | 'phone' | 'mail' | 'businessAddress' | 'address' | 'action';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Nome', minWidth: 100, align: 'center' },
    { id: 'taxNumber', label: 'CPF/CNPJ', minWidth: 100, align: 'center' },
    { id: 'phone', label: 'Telefone', minWidth: 100, align: 'center' },
    { id: 'mail', label: 'Email', minWidth: 100, align: 'center' },
    { id: 'businessAddress', label: 'Endereços Comerciais', minWidth: 100, align: 'center' },
    { id: 'address', label: 'Endereços Residenciais', minWidth: 100, align: 'center' },
    { id: 'action', label: 'Ações', minWidth: 100, align: 'center', },
];

interface Data {
    name: string;
    taxNumber: string;
    phone: string;
    mail: string;
    businessAddress: string;
    address: string;
    action?: string;
}

function createData(name: string, taxNumber: string, phone: string, mail: string, businessAddress: string, address: string): Data {
    return { name, taxNumber, phone, mail, businessAddress, address };
}

const rows = [
    createData('Antionio', '081.858.033-07', '(89) 900-000-000', 'xxx@basis.com', 'rua 2', 'rua 1')
];

export default function TableForms() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.taxNumber}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            if (column.id != 'action') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            }
                                            else {
                                                return (
                                                    <TableCell key={column.id} align={column.align} >
                                                        <Grid container spacing={1} justifyContent="center" >
                                                            <Grid item>
                                                                <Button variant="contained">Editar</Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <Button variant="contained">Excluir</Button>
                                                            </Grid>
                                                        </Grid>
                                                    </TableCell>
                                                );
                                            }

                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}