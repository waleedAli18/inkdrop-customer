export interface OrderTabProps {
  category: string;
  orders: OrderListingDataProps[];
}

export interface OrderListingDataProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  purchaseDate: string;
  daysRemaining: string;
  amount?: string;
  address: string;
  status?: string;
  review?: number;
  category: "all" | "pending" | "completed";
  deliveryDetails: {
    name: string;
    email: string;
    phone: number;
    deliveryAddress: string;
  };

  orderDetails: Array<{
    name: string;
    size: string;
    alignVertical: string;
    alignHorizontal: string;
    imageScale: string;
    position: string;
    color: string;
    designedBy: string;
    price: number;
    image: string;
  }>;
}
