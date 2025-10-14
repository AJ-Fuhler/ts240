interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 0,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

type UpdateableProductFields = Partial<Omit<Product, "id">>;

function updateProduct(
  productId: number,
  updatedValues: UpdateableProductFields
): void {
  const product = products.find(product => product.id === productId);

  if (product) {
    products[productId] = {...product, ...updatedValues};
  } else {
    console.log("Product not found");
  }
}