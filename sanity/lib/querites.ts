import { defineQuery } from "next-sanity";

export const PRODUCT_FETCH_QUERY =
	defineQuery(`*[_type == "product"] | order(_createdAt desc) {
  _id, 
  name, 
  description,
    price,
  "images": images[].asset->url, 
  "CategoryName": category->name
}
`);

export const RELATED_PRODUCTS_QUERY =
	defineQuery(`*[_type == "product" && category->name == $category && _id != $currentId] | order(price asc)[0...4] {
    _id,
    name,
    description,
    price,
    "images": images[].asset->url,
    "CategoryName": category->name
  }`);



export const CATEGORY_FETCH_QUERY =
	defineQuery(`*[_type == "product" && category->name == $category]  {
  _id, 
  name, 
  description,
  price,
  "images": images[].asset->url, 
  "CategoryName": category->name
}`);



  export const COLLECTION_FETCH_QUERY =
	defineQuery(`*[_type == "product"] | order(_createdAt desc) {
  _id, 
  name, 
  description,
    price,
  "images": images[].asset->url, 
  "CategoryName": category->name
} `);