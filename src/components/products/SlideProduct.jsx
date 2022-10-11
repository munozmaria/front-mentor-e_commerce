import ImageProduct1 from "@/assets/images/image-product-1.jpg"
import ImageProduct2 from "@/assets/images/image-product-2.jpg"
import ImageProduct3 from "@/assets/images/image-product-3.jpg"
import ImageProduct4 from "@/assets/images/image-product-4.jpg"

import ImageProduct1Small from "@/assets/images/image-product-1-thumbnail.jpg"
import ImageProduct2Small from "@/assets/images/image-product-2-thumbnail.jpg"
import ImageProduct3Small from "@/assets/images/image-product-3-thumbnail.jpg"
import ImageProduct4Small from "@/assets/images/image-product-4-thumbnail.jpg"
import PrevIcon from "@/components/icons/PrevIcon"
import NextIcon from "@/components/icons/NextIcon"
import {useState} from "react"


const ArrayImg = [ImageProduct1, ImageProduct2, ImageProduct3, ImageProduct4]

export default () => {

    const [index, setIndex] = useState(0);


    const handleClickSlideNext = () => {
        console.log('next')
        if(index === ArrayImg.length - 1) return setIndex(0)
        setIndex(index + 1)
    }
    const handleClickSlidePrevious = () => {
        console.log("previous")
        if (index === 0) return setIndex(ArrayImg.length - 1)
				setIndex(index -1)
       
		}
    return (
			<section className="grid md:grid-cols-4 md:gap-4">
				<div className="relative col-span-4">
					<img src={ArrayImg[index]} alt="" className="aspect-[15/13] w-100" />
					<div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4">
						<button
							className="flex h-8 w-8  items-center justify-center rounded-full bg-white"
							onClick={handleClickSlidePrevious}
						>
							<PrevIcon></PrevIcon>
						</button>
						<button
							className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
							onClick={handleClickSlideNext}
						>
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

