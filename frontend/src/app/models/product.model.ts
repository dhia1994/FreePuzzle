export interface ProductModelServer {
  id: Number,
  name: string,
  image: String,
  images: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
  

  
}


export interface serverResponse  {
  count: number;
  products: ProductModelServer[]
};
