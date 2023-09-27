interface ListItem {
  id: number;
  text: string;
}

export interface ProductFeatureListInterface {
  map(arg0: (list: any) => import("react").JSX.Element): import("react").ReactNode;
  items: ListItem[];
}
