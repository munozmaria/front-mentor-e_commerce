import LogoSneakers from "@/assets/images/logo.svg"
import Avatar from "@/assets/images/image-avatar.png"
import MenuIcon from "@/components/icons/MenuIcon"


const MainHeader = () => {
	return (
        <header>
            <button className="md:hidden">
                <MenuIcon></MenuIcon>
            </button>
			<img src={LogoSneakers} alt="" />
			<nav className="hidden md:block">
				<a href="#">Collections</a>
				<a href="#">Men</a>
				<a href="#">Women</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</nav>
			<div>
				<button>Cart</button>
				<img src={Avatar} alt="" />
			</div>
		</header>
	)
}
export default MainHeader
