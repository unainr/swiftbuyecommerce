import { defineField, defineType } from "sanity";

export const products = defineType({
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Product Name",
		}),

		defineField({
			name: "description",
			type: "text",
			title: "Product Description",
		}),

		defineField({
			name: "images",
			type: "array",
			title: "Product Images",
			of: [{ type: "image" }],
		}),

		defineField({
			name: "price",
			type: "number",
			title: "Product Price",
		}),

		defineField({
			name: "slug",
			type: "slug",
			title: "Product Slug",
			options: {
				source: "name",
			},
		}),

		defineField({
			name: "category",
			type: "reference",
			title: "Product Category",
			to: [{ type: "category" }],
		})
	],
});
