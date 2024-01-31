import React from 'react'
import PropTypes from 'prop-types'
import { TableBody, TableCell, TableRow, Typography } from '@mui/material';

IndexAdviseTable.propTypes = {
    data: PropTypes.array,
    listFilter: PropTypes.array,
    listPriority: PropTypes.array,
};

export default function IndexAdviseTable({ data, listFilter, listPriority, ...other }) {
    console.log(data)

    return (
        <TableBody>
            {data?.map((item, index) => (
                <React.Fragment key={index}>
                    <TableRow sx={{ my: 2 }}><TableCell colSpan={10}>{item.timeAdvise} <span style={{ marginLeft: '10px', backgroundColor: '#C0C0C0', borderRadius: '15px', padding: '2px' }}>{item?.advise?.length}</span></TableCell></TableRow>

                    {item?.advise.map((adv, idx) => (
                        <TableRow key={idx}>
                            <TableCell>
                                {adv.nameStudent}
                            </TableCell>
                            <TableCell>
                                {adv.dateOfBirth}
                            </TableCell>
                            <TableCell>
                                {adv.gender}
                            </TableCell>
                            <TableCell>
                                {adv.phoneNumber}
                            </TableCell>
                            <TableCell>
                                {adv.parentName}
                            </TableCell>
                            <TableCell>
                                {adv.parentPhoneNumber}
                            </TableCell>
                            <TableCell>
                                {adv.source}
                            </TableCell>
                            <TableCell>
                                <strong style={{ color: listFilter.filter((fil) => { return fil.id == adv.status }).at(0)?.color }}>{adv.status}. {adv.statusHuman}</strong>
                            </TableCell>
                            <TableCell>
                                <strong style={{ color: listPriority.filter((fil) => { return fil.id == adv.priority }).at(0)?.color }}>{adv.priority}. {adv.priorityHuman}</strong>
                            </TableCell>
                            <TableCell>
                                {adv.job}
                            </TableCell>
                        </TableRow>
                    ))}
                </React.Fragment>
            ))}
        </TableBody >
    )
}
