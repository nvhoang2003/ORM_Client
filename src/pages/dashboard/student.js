import TableHeadCustom from '@/component/table/TableHeadCustom'
import StudentTable from '@/section/dashboard/student/StudentTable'
import { AppBar, Button, Dialog, DialogActions, DialogTitle, Table, TableContainer, Typography } from '@mui/material'
import React from 'react'
import studentData from '@/jsonData/student.json'
import { useState, useEffect } from 'react'
import StudentDetail from '@/section/dashboard/student/StudentDetail'
import StudentForm from '@/section/dashboard/student/StudentForm'

export default function student() {
    const column = [
        { id: 'nameStudent', label: 'Họ và tên' },
        { id: 'dateOfBirth', label: 'Ngày sinh' },
        { id: 'gender', label: 'Giới tính' },
        { id: 'parentName', label: 'Tên phụ huynh' },
        { id: 'parentPhoneNumber', label: 'SĐT Phụ huynh' },
        { id: 'note', label: 'Ghi Chú' },
    ]

    const [listStudent, setListStudent] = useState([]);
    const [currentStudent, setCurrentStudent] = useState({});
    const [openDetail, setOpenDetail] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)

    const handleClick = ((e, id) => {
        setCurrentStudent(listStudent.filter((item) => { return item.studentId == id })?.at(0));
        setOpenDetail(true)
    })

    useEffect(() => {
        setListStudent(studentData.data)
    })

    const closeDetail = (() => {
        setOpenDetail(false)
    })

    const handleUpdateClick = ((bool) => {
        setOpenUpdate(bool)
    })

    console.log

    const handleDialogDelete = (() => {
        setOpenDelete(openDelete == true ? false : true)
    })

    const handleChangeDelete = (() => {
        setOpenDelete(openDelete == true ? false : true)
        setOpenDetail(false)
    })

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>

            </AppBar>
            <TableContainer>
                <Table>
                    <TableHeadCustom column={column} />
                    <StudentTable data={listStudent} handleClick={handleClick} />
                </Table>
            </TableContainer>
            <StudentDetail data={currentStudent} isOpen={openDetail} closeDetail={closeDetail} openUpdate={handleUpdateClick} openDelete={handleDialogDelete} />
            <StudentForm openUpdate={openUpdate} handleChangeUpdate={handleUpdateClick} data={currentStudent} />
            <Dialog
                open={openDelete}
                onClose={handleDialogDelete}
            >
                <DialogTitle>
                    <Typography>Bạn có chắc muốn xóa học sinh {currentStudent.studentName}</Typography>
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDialogDelete}>Trở về</Button>
                    <Button onClick={handleChangeDelete} variant="contained" color="error">Xóa</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
