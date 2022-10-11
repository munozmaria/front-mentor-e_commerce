export default () => { 

    return (
			<section className="container mx-auto px-4">
				<p className="mb-3 font-bold uppercase tracking-wide text-orange-primary">
					Sneaker Company
				</p>
				<h2 className="mb-4 text-3xl  font-bold">
					Fall Limited Edition Sneakers
				</h2>
				<p className="mb-5 text-dark-grayish-blue">
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they’ll withstand everything
					the weather can offer.
				</p>
				<div className="grid grid-cols-3 items-center gap-4 font-bold">
					<span className="text-3xl  ">$125.00</span>
					<span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
						50%
					</span>
					<span className="mb-3 text-right text-lg text-grayish-blue line-through">
						{" "}
						$250.00
					</span>
				</div>

				<div className="grid grid-cols-3 font-bold">
					<div className="col-span-3">
						<button>-</button>
						<span>0</span>
						<button>+</button>
					</div>
					<button className="col-span-3 rounded-md bg-orange-primary py-3 text-white">
						<span>Add to cart</span>
					</button>
				</div>
			</section>
		)

}