import { Box, Grid, Typography, TextField, InputAdornment, Select, MenuItem, TableContainer, Table } from '@mui/material'
import React from 'react'
import color from '@/styles/color.module.scss'
import LineChart from '@/section/dashboard/adviseDashboard/LineChart'
import chartDataJson from '@/jsonData/dataChart.json'
import adviseDataJson from '@/jsonData/dashboardAdvise.json'
import { useState, useEffect } from 'react'
import TableHeadCustom from '@/component/table/TableHeadCustom'
import IndexAdviseTable from '@/section/dashboard/adviseDashboard/IndexAdviseTable'

const listFilter = [
    { "id": 1, "name": "Tiếp cận", "iconpath": "", "color": color.warningColor },
    { "id": 2, "name": "Chưa trả lời", "iconpath": "", "color": color.primaryColor },
    { "id": 3, "name": "Đã gửi ưu đãi", "iconpath": "", "color": color.waitingColor },
    { "id": 4, "name": "Đã gửi báo giá", "iconpath": "", "color": color.hopeColor },
    { "id": 5, "name": "Đã biết lớp dự kiến", "iconpath": "", "color": color.primaryColor },
    { "id": 6, "name": "Đã biết ngày học dự kiến", "iconpath": "", "color": color.warningColor },
    { "id": 7, "name": "Đã hẹn tư vấn", "iconpath": "", "color": color.primaryColor },
    { "id": 8, "name": "Dò giá", "iconpath": "", "color": color.darkColor },
    { "id": 9, "name": "Đã học thử", "iconpath": "", "color": color.waitingColor },
    { "id": 10, "name": "Thất bại", "iconpath": "", "color": color.failedColor },
    { "id": 11, "name": "Đã đăng kí", "iconpath": "", "color": color.successColor }
]

const listPriority = [
    { "id": 1, "name": "Ưu tiên cực cao", "iconpath": "", "color": color.failedColor },
    { "id": 2, "name": "Ưu tiên cao", "iconpath": "", "color": color.hopeColor },
    { "id": 3, "name": "Ưu tiên", "iconpath": "", "color": color.warningColor },
    { "id": 4, "name": "Bình thường", "iconpath": "", "color": color.primaryColor },
    { "id": 5, "name": "Không ưu tiên", "iconpath": "", "color": color.waitingColor }
]

const column = [
    { id: 'nameStudent', label: 'Họ và tên' },
    { id: 'dateOfBirth', label: 'Ngày sinh' },
    { id: 'gender', label: 'Giới tính' },
    { id: 'phoneNumber', label: 'SĐT' },
    { id: 'parentName', label: 'Tên phụ huynh' },
    { id: 'parentPhoneNumber', label: 'SĐT Phụ huynh' },
    { id: 'source', label: 'Nguồn' },
    { id: 'status', label: 'Trạng thái' },
    { id: 'priority', label: 'Độ ưu tiên' },
    { id: 'job', label: 'Nghề nghiệp' }
]

export default function dashboardAdvise() {
    const [chartData, setChartData] = useState([])
    const [listAdvise, setListAdvise] = useState([])
    useEffect(() => {
        setChartData(chartDataJson.data)
        setListAdvise(adviseDataJson.data)
    }, [])
    return (
        <>
            <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={3}>
                    <Box border={1} sx={{ ml: 2, p: 3 }}>
                        <Typography variant="h5">Bảng điều khiển</Typography>
                        <TextField
                            autoFocus
                            margin='dense'
                            id="timeStart"
                            name="timeStart"
                            label="Từ ngày"
                            type="date"
                            fullWidth
                            variant="outlined"
                            sx={{ my: 2 }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }}
                        />
                        <TextField
                            autoFocus
                            margin='dense'
                            id="timeEnd"
                            name="timeEnd"
                            label="Đến ngày"
                            type="date"
                            fullWidth
                            variant="outlined"
                            sx={{ my: 2 }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }}
                        />
                        <TextField
                            autoFocus
                            margin='dense'
                            id="name"
                            name="name"
                            label="Tên học viên"
                            type="text"
                            fullWidth
                            variant="outlined"
                            sx={{ my: 2 }}
                        />
                        <Select
                            value={0}
                            label="Trạng thái TV"
                            fullWidth
                            sx={{ my: 2 }}
                        >
                            <MenuItem value={0}>Trạng Thái</MenuItem>
                            {listFilter?.map((item, index) => (
                                <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                            ))}
                        </Select>
                        <Select
                            value={0}
                            label="Mức độ ưu tiên"
                            fullWidth
                            sx={{ my: 2 }}
                        >
                            <MenuItem value={0}>Mức độ ưu tiên</MenuItem>
                            {listPriority?.map((item, index) => (
                                <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <Box border={1} sx={{ ml: 2, p: 3, mt: 2 }}>
                        <LineChart data={chartData} />
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Box component="main"
                        sx={{ flexGrow: 1, p: 1 }}
                    >
                        <TableContainer>
                            <Table>
                                <TableHeadCustom column={column} />
                                <IndexAdviseTable data={listAdvise} listFilter={listFilter} listPriority={listPriority} />
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}
