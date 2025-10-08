// problem 1
type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};

type ShippableProduct = Product & Shipping;

// problem2
interface ShippableProduct2 extends Product, Shipping {};