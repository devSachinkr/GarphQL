export const schema = `#graphql

    type User{
        name: String
        password: String
        email: String
        age: Int  
    }
  type Query{
    user:[User]
    products:[Product]
    product(id:ID!):Product
  }
  
  type Product{
    name: String
    price: Float
    description: String
    category: String
    stock: Int
    thumbnail: String
    createdAt: String
    updatedAt: String
  }
`;
