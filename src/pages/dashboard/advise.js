import { Grid, Box, Table, TableContainer, Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import color from '@/styles/color.module.scss'
import adviseData from '@/jsonData/adviseData.json'
import { useState, useEffect } from 'react'
import Filter from '@/component/filter/Filter'
import TableHeadCustom from '@/component/table/TableHeadCustom'
import AdviseTable from '@/section/dashboard/advise/AdviseTable'
import AdviseDetail from '@/section/dashboard/advise/AdviseDetail'
import AdviseUpdate from '@/section/dashboard/advise/AdviseUpdate'

export default function advise() {
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
    { id: 'timeStart', label: 'Ngày tư vấn' },
    { id: 'nameStudent', label: 'Họ và tên' },
    { id: 'phoneNumber', label: 'SĐT' },
    { id: 'status', label: 'Trạng thái' },
    { id: 'priority', label: 'Độ ưu tiên' },
    { id: 'source', label: 'Nguồn' },
    { id: 'estimatedMonth', label: 'Tháng học dự kiến' },
    { id: 'estimatedCourse', label: 'Khóa học dự kiến' },
    { id: 'timeReContact', label: 'Ngày cần liên hệ lại' },
    { id: 'note', label: 'Ghi chú' },
    { id: 'lastAdvise', label: 'Ngày tư vấn cuối' }
  ]

  const [listAdvise, setListAdvise] = useState([])
  const [itemSelected, setItemSelected] = useState(0)
  const [currentAdvise, setCurrentAdvise] = useState({})
  const [openDetail, setOpenDetail] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)


  useEffect(() => {
    setListAdvise(adviseData.data.advise)
  }, [])

  const getAdviseByStatus = ((id) => {
    if (id > 0) {
      setListAdvise(adviseData.data.advise.filter((item) => { return item.status == id }))
    } else {
      setListAdvise(adviseData.data.advise)
    }
    setItemSelected(id)
  })

  const handleClick = ((e, id) => {
    setCurrentAdvise(adviseData.data.advise.filter((item) => { return item.adviseId == id })?.at(0));
    setOpenDetail(true)
  })

  const closeDetail = (() => {
    setOpenDetail(false)
  })

  const handleUpdateClick = (() => {
    setOpenUpdate(openUpdate == true ? false : true)
  })

  const handleChangeDelete = (() => {
    setOpenDelete(openDelete == true ? false : true)
  })

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Filter data={listFilter} getAdviseByStatus={getAdviseByStatus} itemSelected={itemSelected} />
        </Grid>
        <Grid item xs={10}>
          <Box component="main"
            sx={{ flexGrow: 1, p: 1 }}
          >
            <TableContainer>
              <Table>
                <TableHeadCustom column={column} />
                <AdviseTable data={listAdvise} listFilter={listFilter} listPriority={listPriority} handleClick={handleClick} />
              </Table>
            </TableContainer>
          </Box >
        </Grid>
      </Grid>
      <AdviseDetail data={currentAdvise} isOpen={openDetail} listFilter={listFilter} listPriority={listPriority} closeDetail={closeDetail} openUpdate={handleUpdateClick} openDelete={handleChangeDelete} />
      <AdviseUpdate openUpdate={openUpdate} handleChangeUpdate={handleUpdateClick} listFilter={listFilter} listPriority={listPriority} data={currentAdvise} />
      <Dialog
        open={openDelete}
        onClose={handleChangeDelete}
      >
        <DialogTitle>
          <Typography>Bạn có chắc muốn xóa thông tin tư vấn của {currentAdvise.nameStudent}</Typography>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleChangeDelete}>Trở về</Button>
          <Button onClick={handleChangeDelete} variant="contained" color="error">Xóa</Button>
        </DialogActions>
      </Dialog>
    </div >
  )
}
