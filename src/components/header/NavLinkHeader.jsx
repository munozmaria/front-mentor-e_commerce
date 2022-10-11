const NavLinkHeader = ({ text }) => { 
    return (
			<a href="#" className="relative py-8 group">
				<span className="group-hover:text-orange-primary">{text}</span>
				<span className="absolute bottom-0 scale-x-0 left-0 block h-1 w-full group-hover:bg-orange-primary group-hover:scale-x-100 transition-all duration-700"></span>
			</a>
		)
}

export default NavLinkHeader;