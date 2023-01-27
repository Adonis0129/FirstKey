import * as React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import Box from '@mui/material/Box'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import '../../assets/styles/style.scss';

export const DateInput = () => {
  
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2023-01-25'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DatePicker
        label="Custom input"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box sx={{ display: 'flex', alignItems: 'center', "& .MuiSvgIcon-root": {color:'white', size: 'large'}}}>
            <input 
              className='form-input'
              ref={inputRef} 
              {...inputProps} 
            />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  );
}
