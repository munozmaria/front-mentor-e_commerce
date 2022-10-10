import LogoSneakers from "@/assets/images/logo.svg"
import Avatar from "@/assets/images/image-avatar.png"
const MainHeader = () => {
	return (
		<header>
			<img src={LogoSneakers} alt="" />
			<nav>
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
