import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
	faBuilding,
	faUpRightFromSquare,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons"
import {
	Bio,
	IconLink,
	Links,
	ProfileCardContainer,
	ProfileImage,
	ProfileInfo,
	Title,
} from "./styles"

export function ProfileCard() {
	return (
		<ProfileCardContainer>
			<ProfileImage src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'></ProfileImage>
			<ProfileInfo>
				<Title>
					<h2>Cameron Williamson</h2>
					<a>
						github <FontAwesomeIcon icon={faUpRightFromSquare} />
					</a>
				</Title>
				<Bio>
					Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
					viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
					pulvinar vel mass.
				</Bio>

				<Links>
					<div>
						<IconLink href='#'>
							<FontAwesomeIcon icon={faGithub} />
							Cameronwll
						</IconLink>
					</div>
					<div>
						<IconLink href='#'>
							<FontAwesomeIcon icon={faBuilding} />
							Empresa
						</IconLink>
					</div>
					<div>
						<IconLink href='#'>
							<FontAwesomeIcon icon={faUserGroup} />
							32 seguidores
						</IconLink>
					</div>
				</Links>
			</ProfileInfo>
		</ProfileCardContainer>
	)
}
