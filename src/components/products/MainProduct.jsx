import DetailsProduct from "@/components/products/DetailsProduct";
import SlideProduct from "@/components/products/SlideProduct"

const MainProduct = () => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 gap-8">
			<SlideProduct></SlideProduct>
			<DetailsProduct></DetailsProduct>
		</main>
	)
}

export default MainProduct;