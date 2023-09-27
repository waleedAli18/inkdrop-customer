export interface CardData {
  id: number;
  imageSrc: string;
  heading: string;
  designedBy?: string;
  created?: string;
  link?: string;
  review?: number;
  category?: string[];
  handleClick?: () => void;
}

export interface ProductCategoryData {
  id: number;
  imageSrc: string;
  heading: string;
  designedBy?: string;
  category: string;
  link?: string;
}

export interface NotificationListinInterface {
  id: number;
  imageSrc: string;
  text: string;
  time?: string;
  day?: string;
}
