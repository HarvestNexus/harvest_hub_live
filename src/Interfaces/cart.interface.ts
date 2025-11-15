// Cart types
export interface CartItem {
  id: number;
  name: string;
  vendor?: string;
  price: number;
  unit?: string;
  qty: number;
  image?: string;
}

export interface CartSectionProps {
  initialItems?: CartItem[];
}
