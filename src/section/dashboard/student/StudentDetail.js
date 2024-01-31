import React from 'react'
import PropTypes from 'prop-types';
import { Box, Drawer, IconButton, List, Typography } from '@mui/material'
import color from '@/styles/color.module.scss'
import { DeleteOutlineOutlined } from '@mui/icons-material'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Grid from '@mui/material/Unstable_Grid2';

StudentDetail.propTypes = {
    data: PropTypes.object,
    isOpen: PropTypes.bool,
    closeDetail: PropTypes.func,
    openUpdate: PropTypes.func,
    openDelete: PropTypes.func,
};

export default function StudentDetail({ data, isOpen, closeDetail, openUpdate, openDelete, ...other }) {
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
                            Thông tin học sinh {data.nameStudent}
                        </Typography>
                    </Grid>
                    <Grid>
                        <IconButton size="small" onClick={openDelete}>
                            <DeleteOutlineOutlined />
                        </IconButton>
                    </Grid>
                    <Grid>
                        <IconButton size="small" onClick={e => openUpdate(true)}>
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
                        <Grid xs={3}>
                            <Typography>Mã học sinh</Typography>
                        </Grid>
                        <Grid xs={9}>
                            <Typography>{data.studentId}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid xs={3}>
                            <Typography>Ngày sinh</Typography>
                        </Grid>
                        <Grid xs={9}>
                            <Typography>{data.dateOfBirth}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid xs={3}>
                            <Typography>Giới tính</Typography>
                        </Grid>
                        <Grid xs={9}>
                            <Typography>{data.gender == 0 ? 'Nam' : 'Nữ'}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid xs={3}>
                            <Typography>Tên phụ huynh</Typography>
                        </Grid>
                        <Grid xs={9}>
                            <Typography>{data.parentName}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid xs={3}>
                            <Typography>SĐT</Typography>
                        </Grid>
                        <Grid xs={9}>
                            <Typography>{data.parentPhoneNumber}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid xs={3}>
                            <Typography>Note</Typography>
                        </Grid>
                        <Grid xs={9}>
                            <Typography>{data.note}</Typography>
                        </Grid>
                    </Grid>
                </List>
            </Drawer >
        </Box >
    )
}
