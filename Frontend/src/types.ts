import { ReactNode } from "react";

export type LayoutProps = {
  title: string;
  children: ReactNode;
};

export type Data = {
  products: Product[];
};

export type Product = {
  _id: string;
  name?: string;
  price?: number;
  quantity?: number;
  brand?: string;
  image?: string;
  category?: string;
  description?: string;
  numberInStock?: number;
  liked?: boolean;
};
