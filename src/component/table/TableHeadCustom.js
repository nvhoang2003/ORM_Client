import React from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import PropTypes from 'prop-types';

TableHeadCustom.propTypes = {
  column: PropTypes.array,
};

export default function TableHeadCustom({ column, ...other }) {
  return (
    <TableHead>
      <TableRow>
        {column.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'left'}
            sortDirection={false}
            sx={{
              width: headCell.width,
              minWidth: headCell.width,
              fontSize: '14px',
              color: '#158E4B',
              background: 'rgba(0, 171, 85, 0.12)',
              borderBottom: '1px solid #E3E3E3',
              paddingTop: '1px',
              paddingBottom: '1px',
            }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
