type Data = {
  products: Product[];
};

type Product = {
  _id: string;
  name?: string;
  price?: number;
  brand?: string;
  image?: string;
  category?: string;
  description?: string;
  numberInStock?: number;
};

const data: Data = {
  products: [
    {
      _id: "1",
      name: "Marketside Organic Bananas,Bunch, 2 lb",
      price: 1.7,
      image:
        "https://i5.walmartimages.com/asr/4b15d1c6-03e7-489b-96cb-7d4b1edeb927.042464e5bc52fa0421f255d04ec525a4.jpeg",
      category: "Organic Fruit",
      description: "Marketside Organic Bananas, Bunch, 2 lb",
      numberInStock: 100,
    },
    {
      _id: "2",
      name: "Local Organic Asparagus, bunch, 1 lb",
      price: 5.96,
      image:
        "https://i5.walmartimages.com/asr/fa41578e-f8be-4e38-9eed-65e119ad74f4_1.a275a50d8f6cf85fb6c0b130260f6ca6.jpeg",
      category: "Organic Fruit",
      description: "Local Organic Asparagus, bunch, 1 lb",
      numberInStock: 100,
    },
    {
      _id: "3",
      name: "Marketside Organic Gold Potatoes, 3 lb Bag",
      price: 4.88,
      image:
        "https://i5.walmartimages.com/asr/cf9ea3c9-308b-492a-a90c-99a63b4a94a1.dc1df887b49cf8e49eaad121fdaf584d.jpeg",
      category: "Organic Fruit",
      description: "Marketside Organic Gold Potatoes, 3 lb Bag",
      numberInStock: 100,
    },
    {
      _id: "4",
      name: "Fresh USDA Organic Strawberries, 1 lb.",
      price: 3.86,
      image:
        "https://i5.walmartimages.com/asr/fb148fa5-193e-479c-8e89-dca9d61e2ff7_1.0d26c201e069d9940a4d0cb0c85d776d.jpeg",
      category: "Organic Fruit",
      description: "Fresh USDA Organic Strawberries, 1 lb.",
      numberInStock: 100,
    },
  ],
};

export default data;
