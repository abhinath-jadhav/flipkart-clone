export interface Category {
  name: string;
  subCategory?: Category | null;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
  review: string;
  features: string[];
  price: string;
  offerPrice: string;
  delivery: string;
  offer: number;
  assured?: boolean;
}

export interface SelectionData {
  detail: string;
  isImgage: boolean;
  img?: string;
}
