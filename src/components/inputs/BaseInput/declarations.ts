export interface BaseInputType {
  value: string | number;
  label?: string;
  textHelper?: string;
  inputClass?: string;
  helperClass?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | string>) => void;
  error?: boolean;
}
