import { Select as MuiSelect, MenuItem, SelectChangeEvent } from "@mui/material";
import styles from "./Select.module.scss"

interface SelectProps{
  labelId: string;
  label: string;
  value: string;
  onChange: (e: SelectChangeEvent) => void;
  options: {
    value: string;
    label: string;
  }[]
  disabled?: boolean;
}


export function Select(props: SelectProps) {
  return(
    <div className={styles.SelectContainer}>
      <label id={props.labelId}>{props.label}</label>
      <MuiSelect
        disabled={props.disabled}
        size="small"
        labelId={props.labelId}
        value={props.value}
        label={props.label}
        onChange={props.onChange}
        placeholder="Selecione"
        >
        {props.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
      </MuiSelect>
    </div>
  )
}