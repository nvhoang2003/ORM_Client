import React from 'react'
import PropTypes from 'prop-types';
import { Box, Drawer, IconButton, List, Typography } from '@mui/material'
import color from '@/styles/color.module.scss'
import { DeleteOutlineOutlined } from '@mui/icons-material'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Grid from '@mui/material/Unstable_Grid2';

AdviseDetail.propTypes = {
	data: PropTypes.object,
	isOpen: PropTypes.bool,
	listFilter: PropTypes.array,
	listPriority: PropTypes.array,
	closeDetail: PropTypes.func,
	openUpdate: PropTypes.func,
	openDelete: PropTypes.func,
};

export default function AdviseDetail({ data, isOpen, listFilter, listPriority, closeDetail, openUpdate, openDelete, ...other }) {
	return (
		<Box
			component="nav"
			sx={{ minWidth: { sm: '50%' }, flexShrink: { sm: 0 } }}
			aria-label="mailbox folders"
		>
			<Drawer
				anchor='right'
				open={isOpen}
				variant="temporary"
				ModalProps={{
					keepMounted: false,
				}}
				sx={{
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: '35%' },
				}}
			>
				<Grid container spacing={2} sx={{ my: 2 }}>
					<Grid xs={8}>
						<Typography sx={{ ml: 3 }} variant="h5">
							Thông tin tư vấn {data.nameStudent}
						</Typography>
					</Grid>
					<Grid>
						<IconButton size="small" onClick={openDelete}>
							<DeleteOutlineOutlined />
						</IconButton>
					</Grid>
					<Grid>
						<IconButton size="small" onClick={openUpdate}>
							<EditNoteOutlinedIcon />
							<Typography>Edit</Typography>
						</IconButton>
					</Grid>
					<Grid>
						<IconButton size="small" onClick={closeDetail}>
							<CloseOutlinedIcon />
						</IconButton>
					</Grid>
				</Grid>

				<List sx={{ ml: 1 }} >
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={3}>
							<Typography>Mã tư vấn</Typography>
						</Grid>
						<Grid item xs={9}>
							<Typography>{data.adviseId}</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={3}>
							<Typography>Ngày tư vấn</Typography>
						</Grid>
						<Grid item xs={9}>
							<Typography>{data.timeStart}</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={3}>
							<Typography>Trạng thái</Typography>
						</Grid>
						<Grid item xs={9}>
							<strong style={{ color: listFilter?.filter((fil) => { return fil.id == data.status }).at(0)?.color }}>{data.status} {data.statusHuman}</strong>
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={3}>
							<Typography>Độ ưu tiên</Typography>
						</Grid>
						<Grid item xs={9}>
							<strong style={{ color: listPriority.filter((fil) => { return fil.id == data.priority }).at(0)?.color }}>{data.priority} {data.priorityHuman}</strong>
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={3}>
							<Typography>Giới tính</Typography>
						</Grid>
						<Grid item xs={9}>
							<Typography>{data.gender == 0 ? 'Nam' : 'Nữ'}</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={3}>
							<Typography>SĐT</Typography>
						</Grid>
						<Grid item xs={9}>
							<Typography>{data.phoneNumber}</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={3}>
							<Typography>Lớp học đã đăng kí</Typography>
						</Grid>
						<Grid item xs={9}>
							<Typography>{data.registedClass}</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={3}>
							<Typography>Trình độ hiện tại</Typography>
						</Grid>
						<Grid item xs={9}>
							<Typography>{data.level}</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={3}>
							<Typography>Khóa học dự kiến</Typography>
						</Grid>
						<Grid item xs={9}>
							<strong style={{ color: color.primaryColor }}>{data.estimatedCourse}</strong>
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={3}>
							<Typography>Ngày tư vấn cuối</Typography>
						</Grid>
						<Grid item xs={9}>
							<Typography>{data.lastAdvise}</Typography>
						</Grid>
					</Grid>
				</List>
			</Drawer >
		</Box >
	)
}
