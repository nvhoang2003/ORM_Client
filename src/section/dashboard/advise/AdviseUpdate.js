import { Dialog, DialogContent, DialogTitle, MenuItem, Select, TextField, DialogActions, Button } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

AdviseUpdate.propTypes = {
    data: PropTypes.object,
    openUpdate: PropTypes.bool,
    handleChangeUpdate: PropTypes.func,
    listFilter: PropTypes.array,
    listPriority: PropTypes.array,
};

export default function AdviseUpdate({ openUpdate, handleChangeUpdate, data, listFilter, listPriority, ...other }) {
    return (
        <Dialog
            open={openUpdate}
            onClose={handleChangeUpdate}
        >
            <DialogTitle>Cập nhật tư vấn</DialogTitle>
            <DialogContent>
                <Select
                    value={data.status}
                    label="Trạng thái TV"
                    fullWidth
                    sx={{ my: 2 }}
                >
                    {listFilter?.map((item, index) => (
                        <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>
                <Select
                    value={data.priority}
                    label="Mức độ ưu tiên"
                    fullWidth
                    sx={{ my: 2 }}
                >
                    {listPriority?.map((item, index) => (
                        <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>
                <TextField
                    autoFocus
                    margin='dense'
                    id="level"
                    name="level"
                    label="Trình độ hiện tại"
                    type="text"
                    fullWidth
                    variant="outlined"
                    sx={{ my: 2 }}
                />
                <TextField
                    autoFocus
                    margin='dense'
                    id="estimatedCourse"
                    name="estimatedCourse"
                    label="Khóa học dự kiến"
                    type="text"
                    fullWidth
                    variant="outlined"
                    sx={{ my: 2 }}
                />
                <Select
                    value={data.estimatedTime}
                    label="Mức độ ưu tiên"
                    fullWidth
                    sx={{ my: 2 }}
                >
                    <MenuItem value={1}>Tháng 1</MenuItem>
                    <MenuItem value={2}>Tháng 2</MenuItem>
                    <MenuItem value={3}>Tháng 3</MenuItem>
                    <MenuItem value={4}>Tháng 4</MenuItem>
                    <MenuItem value={5}>Tháng 5</MenuItem>
                    <MenuItem value={6}>Tháng 6</MenuItem>
                    <MenuItem value={7}>Tháng 7</MenuItem>
                    <MenuItem value={8}>Tháng 8</MenuItem>
                    <MenuItem value={9}>Tháng 9</MenuItem>
                    <MenuItem value={10}>Tháng 10</MenuItem>
                    <MenuItem value={11}>Tháng 11</MenuItem>
                    <MenuItem value={12}>Tháng 12</MenuItem>
                </Select>
                <TextField
                    autoFocus
                    margin='dense'
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Số điện thoại"
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
                    sx={{ my: 2 }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleChangeUpdate}>Thoát</Button>
                <Button onClick={handleChangeUpdate} variant="contained" color="success">Lưu</Button>
            </DialogActions>
        </Dialog>
    )
}
