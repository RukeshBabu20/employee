import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { employeeType } from "../types";

export default function ListEmployeeComponent ({employee, onEmployeeDelete}:{employee:employeeType[]; onEmployeeDelete: (employee: string) => void}) {

    const  employees= employee;

    return(
        <>
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                {employees.map((employee) => {
                    return (
                        <TableRow>
                        <TableCell>{employee.employeeName}</TableCell>
                        <TableCell>{employee.employeeDepartment}</TableCell>
                        <TableCell>{employee.employeeSalary}</TableCell>
                        <TableCell>
                             <DeleteRoundedIcon onClick={() => onEmployeeDelete(employee.employeeName)} />
                        </TableCell>
                        </TableRow>
                     );
                })}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}