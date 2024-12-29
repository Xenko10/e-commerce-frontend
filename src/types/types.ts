// DTO - Data Type Object

export type ProductDTO = {
  id: number;
  url: string;
  alt: string;
  header: string;
  price: number;
  priceAfterDiscount: number;
  stars: number;
  opinions: number;
};

export type ProductInCartDTO = ProductDTO & { quantity: number };
