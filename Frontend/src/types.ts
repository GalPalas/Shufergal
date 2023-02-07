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
  category?: Category;
  description?: string;
  numberInStock?: number;
  liked?: boolean;
};

export type Category = {
  _id?: string;
  name: string;
};
