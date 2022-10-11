import ImageProduct1 from "@/assets/images/image-product-1.jpg"

import ImageProduct1Small from "@/assets/images/image-product-1-thumbnail.jpg"
import ImageProduct2Small from "@/assets/images/image-product-2-thumbnail.jpg"
import ImageProduct3Small from "@/assets/images/image-product-3-thumbnail.jpg"
import ImageProduct4Small from "@/assets/images/image-product-4-thumbnail.jpg"
import PrevIcon from "@/components/icons/PrevIcon"
import NextIcon from "@/components/icons/NextIcon"

export default () => {
    return (
			<section className="grid md:grid-cols-4 md:gap-4">
				<div className="relative col-span-4">
					<img src={ImageProduct1} alt="" className="aspect-[16/12]" />
					<div className="absolute px-4 top-1/2 left-0 w-full flex -translate-y-1/2 justify-between">
						<button className="flex h-8 w-8  items-center justify-center rounded-full bg-white">
							<PrevIcon></PrevIcon>
						</button>
						<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
							<NextIcon></NextIcon>
						</button>
					</div>
				</div>
				<img src={ImageProduct1Small} alt="" className="hidden md:block" />
				<img src={ImageProduct2Small} alt="" className="hidden md:block" />
				<img src={ImageProduct3Small} alt="" className="hidden md:block" />
				<img src={ImageProduct4Small} alt="" className="hidden md:block" />
			</section>
		)
}

