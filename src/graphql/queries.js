// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCoffeeShop = `query GetCoffeeShop($id: ID!) {
  getCoffeeShop(id: $id) {
    id
    name
    description
    location
    rating
  }
}
`;
export const listCoffeeShops = `query ListCoffeeShops(
  $filter: ModelCoffeeShopFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoffeeShops(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      location
      rating
    }
    nextToken
  }
}
`;
