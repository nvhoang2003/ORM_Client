import React from 'react'
import PropTypes from 'prop-types';
import { TableBody, TableRow, TableCell } from '@mui/material';

StudentTable.propTypes = {
    data: PropTypes.array,
    handleClick: PropTypes.func,
};

export default function StudentTable({ data, handleClick, ...other }) {
    return (
        <TableBody>
            {data?.map((item, index) => (
                <TableRow key={index} hover onClick={(e) => handleClick(e, item.studentId)}>
                    <TableCell>
                        {item.studentName}
                    </TableCell>
                    <TableCell>
                        {item.dateOfBirth}
                    </TableCell>
                    <TableCell>
                        {item.gender == 0 ? "Nam" : "Nữ"}
                    </TableCell>
                    <TableCell>
                        {item.parentName}
                    </TableCell>
                    <TableCell>
                        {item.parentPhoneNumber}
                    </TableCell>
                    <TableCell>
                        {item.note}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}
