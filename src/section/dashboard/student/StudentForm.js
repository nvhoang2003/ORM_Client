import { Dialog, DialogContent, DialogTitle, MenuItem, Select, TextField, DialogActions, Button, InputAdornment } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import { DateField } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

StudentForm.propTypes = {
    data: PropTypes.object,
    openUpdate: PropTypes.bool,
    handleChangeUpdate: PropTypes.func,
};

export default function StudentForm({ openUpdate, handleChangeUpdate, data, listFilter, listPriority, ...other }) {
    return (
        <Dialog
            open={openUpdate}
            onClose={handleChangeUpdate}
        >
            <DialogTitle>Cập nhật tư vấn</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin='dense'
                    id="studentName"
                    name="studentName"
                    label="Họ và tên"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={data.studentName}
                    sx={{ my: 2 }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                        fullWidth
                        label="Ngày sinh"
                        value={dayjs(data.dateOfBirth)}
                        onChange={(newValue) => setValue(newValue, "DD/MM/YYYY")}
                    />
                </LocalizationProvider>
                <Select
                    value={data.gender}
                    label="Giới tính"
                    fullWidth
                    sx={{ my: 2 }}
                >
                    <MenuItem value={0}>Nam</MenuItem>
                    <MenuItem value={1}>Nữ</MenuItem>
                </Select>
                <TextField
                    autoFocus
                    margin='dense'
                    id="studentName"
                    name="studentName"
                    label="Tên phụ huynh"
                    value={data.parentName}
                    type="text"
                    fullWidth
                    variant="outlined"
                    sx={{ my: 2 }}
                />
                <TextField
                    autoFocus
                    margin='dense'
                    id="parentPhoneNumber"
                    name="parentPhoneNumber"
                    label="Số điện thoại phụ huynh"
                    value={data.parentPhoneNumber}
                    type="tel"
                    fullWidth
                    variant="outlined"
                    sx={{ my: 2 }}
                />
                <TextField
                    autoFocus
                    margin='dense'
                    id="note"
                    name="note"
                    label="Ghi chú"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={data.note}
                    sx={{ my: 2 }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={e => handleChangeUpdate(false)} >Thoát</Button>
                <Button onClick={e => handleChangeUpdate(false)} variant="contained" color="success">Lưu</Button>
            </DialogActions>
        </Dialog >
    )
}
