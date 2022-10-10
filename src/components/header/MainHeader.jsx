import LogoSneakers from "@/assets/images/logo.svg"
import Avatar from "@/assets/images/image-avatar.png"
import MenuIcon from "@/components/icons/MenuIcon"
import CartIcon from "@/components/icons/CartIcon"
import CloseIcon from "@/components/icons/CloseIcon"
import { useState } from "react"

const MainHeader = () => {

    const [navClass, setNavClass] = useState(
			"hidden font-bold md:mr-auto md:flex md:flex-row md:gap-4 md:static md:p-0 "
		)
  
	const handleOpenMenu = () => {
		setNavClass(
			"absolute top-0 left-0 flex h-full w-4/5  flex-col gap-y-[21px] bg-white p-8 font-bold md:mr-auto md:flex md:flex-row md:gap-4 md:static md:p-0"
		)
    }
    
    const handleCloseMenu = () => { 
        setNavClass(
					" hidden font-bold md:mr-auto md:flex md:flex-row md:gap-4 md:static md:p-0 "
				)
    }

	return (
		<header className=" container bg-slate-200 mx-auto flex items-center gap-8 px-4 py-8">
			<button className="md:hidden" onClick={handleOpenMenu}>
				<MenuIcon></MenuIcon>
			</button>
			<img
				src={LogoSneakers}
				alt="Logo sneakers"
				className="mr-auto mb-1 h-5 md:mr-0"
			/>
			<nav className={navClass}>
				<button className="mb-12 md:hidden" onClick={handleCloseMenu}>
					<CloseIcon></CloseIcon>
				</button>
				<a href="#">Collections</a>
				<a href="#">Men</a>
				<a href="#">Women</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</nav>
			<div className="flex gap-4">
				<button>
					<CartIcon></CartIcon>
				</button>
				<img src={Avatar} alt="" className="w-10" />
			</div>
		</header>
	)
}
export default MainHeader
