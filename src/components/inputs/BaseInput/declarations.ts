export interface BaseInputType {
  value: string | number;
  label?: string;
  textHelper?: string;
  inputClass?: string;
  helperClass?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | string>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement | MouseEvent>) => void;
  onPress?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  error?: boolean;
}
