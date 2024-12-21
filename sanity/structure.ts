import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Content")
		.items([
			S.documentTypeListItem("product").title("Products"),
			S.documentTypeListItem("category").title("Categories"),
		]);
