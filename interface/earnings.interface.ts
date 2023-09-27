export interface EarningTableInterface {
  title: string;
  key: string;
  render?: (data: any) => React.ReactNode;
  width?: string | number;
  className?: string;
}
