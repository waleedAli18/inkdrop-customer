export interface AssociatedProductsInterface {
  id?: number;
  imageSrc?: string;
  status?: boolean;
  heading?: string;
  link?: string;
  review?: number;
  category?: string[];
  handleClick?: () => void;
}
