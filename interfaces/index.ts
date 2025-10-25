export interface CardProps {
  title: string;
  description?: string;
  image?: string;
}

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}
// interfaces/index.ts
export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  image: string;
  address: {
    city: string;
    country: string;
  };
  price: number;
  description: string;
  category: string[];
  reviews: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
}

