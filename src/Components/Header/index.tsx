import { Effects, HeaderContent, LogoContainer } from "./styles"
import Effect from "../../assets/effect.svg"
import Effect2 from "../../assets/effect2.svg"
import Logo from "../../assets/logo.svg"

export function Header() {
	return (
		<HeaderContent>
			<Effects src={Effect} />
			<LogoContainer src={Logo} />
			<Effects src={Effect2}></Effects>
		</HeaderContent>
	)
}
