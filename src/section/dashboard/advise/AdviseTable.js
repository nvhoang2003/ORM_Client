import React from 'react'
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import PropTypes from 'prop-types';

AdviseTable.propTypes = {
	data: PropTypes.array,
	listFilter: PropTypes.array,
	listPriority: PropTypes.array,
	handleClick: PropTypes.func,
};
export default function AdviseTable({ data, listFilter, listPriority, handleClick, ...other }) {
	return (
		<TableBody>
			{data?.map((item, index) => (
				<TableRow key={index} hover
					onClick={(e) => handleClick(e, item.adviseId)}>
					<TableCell>
						{item.timeStart}
					</TableCell>
					<TableCell>
						{item.nameStudent}
					</TableCell>
					<TableCell>
						{item.phoneNumber}
					</TableCell>
					<TableCell>
						<strong style={{ color: listFilter.filter((fil) => { return fil.id == item.status }).at(0)?.color }}>{item.status}. {item.statusHuman}</strong>
					</TableCell>
					<TableCell>
						<strong style={{ color: listPriority.filter((fil) => { return fil.id == item.priority }).at(0)?.color }}>{item.priority}. {item.priorityHuman}</strong>
					</TableCell>
					<TableCell>
						{item.source}
					</TableCell>
					<TableCell>
						Tháng {item.estimatedMonth}
					</TableCell>
					<TableCell>
						{item.estimatedCourse}
					</TableCell>
					<TableCell>
						{item.timeReContact}
					</TableCell>
					<TableCell>
						{item.note}
					</TableCell>
					<TableCell>
						{item.lastAdvise}
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	)
}
