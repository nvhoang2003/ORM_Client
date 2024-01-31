import React from 'react'
import PropTypes from 'prop-types';
import { Box, Drawer, List, ListItemButton } from '@mui/material'
import color from '@/styles/color.module.scss'

Filter.propTypes = {
  data: PropTypes.array,
  getAdviseByStatus: PropTypes.func,
  itemSelected: PropTypes.number,
};

export default function Filter({ data, getAdviseByStatus, itemSelected, ...other }) {
  return (
    <Box
      component="nav"
      sx={{ flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* <Drawer
        anchor='left'
        open={true}
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box' },
        }}
      > */}
      <List>
        <ListItemButton onClick={(e) => getAdviseByStatus(0)} selected={itemSelected == 0}>
          <strong style={{ color: color.warningColor }}>Tất cả</strong>
        </ListItemButton>
        {data.map((item, index) => {
          return (<div key={index}>
            <ListItemButton onClick={(e) => getAdviseByStatus(item.id)} selected={itemSelected == item.id}>
              <strong style={{ color: item.color }}>{item.id} {item.name}</strong>
            </ListItemButton>
          </div>)
        })}
      </List>
      {/* </Drawer> */}
    </Box>
  )
}
