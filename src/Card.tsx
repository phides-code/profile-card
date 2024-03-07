import styled from 'styled-components';
import { Profile } from './types';
import {
    BlueShadow,
    FollowButtonColor,
    PinkShadow,
    ProfilePictureBorder,
    ViewProfileButtonColor,
} from './theme';

interface CardProps {
    isMobile: boolean;
    profile: Profile;
}

const Card = ({ isMobile, profile }: CardProps) => {
    const mobile = isMobile.toString();

    return (
        <Wrapper $mobile={mobile}>
            <PhotoSection $mobile={mobile}>
                <ProfilePicShadow />
                <ProfilePicture
                    src={profile.profile_pic_url}
                    alt={profile.name}
                />
            </PhotoSection>
            <TextSection $mobile={mobile}>
                <Name>{profile.name}</Name>
                <Title>{profile.title}</Title>
                <Description>{profile.description}</Description>
                <StatsSection $mobile={mobile}>
                    <Followers $mobile={mobile}>
                        {profile.followers}
                        <div>Followers</div>
                    </Followers>
                    <Following $mobile={mobile}>
                        {profile.following}
                        <div>Following</div>
                    </Following>
                    <Projects $mobile={mobile}>
                        {profile.projects}
                        <div>Projects</div>
                    </Projects>
                </StatsSection>
                <ButtonsSection $mobile={mobile}>
                    <FollowButton $mobile={mobile}>Follow</FollowButton>
                    <ViewProfileButton $mobile={mobile}>
                        View Profile
                    </ViewProfileButton>
                </ButtonsSection>
            </TextSection>
        </Wrapper>
    );
};

interface StyledComponentProps {
    $mobile?: string;
}

const Wrapper = styled.div<StyledComponentProps>`
    display: flex;

    flex-direction: ${(props) => (props.$mobile === 'true' ? 'column' : 'row')};

    width: 100%;
    max-width: 40rem;
    background-color: rgba(255, 255, 255, 0.5);
    border: 0.6rem solid white;
    border-radius: 20px;
    padding: 1rem 0 0 0;
`;

const PhotoSection = styled.div<StyledComponentProps>`
    display: flex;
    flex: 1;

    justify-content: ${(props) =>
        props.$mobile === 'true' ? 'center' : 'flex-end'};
`;

const ProfilePicShadow = styled.div`
    position: relative;
    &::before {
        content: '';
        height: 7rem;
        width: 7rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 50%;
        z-index: -1;
        box-shadow: -150px 120px 100px 160px ${PinkShadow};
    }
`;

const ProfilePicture = styled.img`
    height: 7rem;
    width: 7rem;
    border: 0.4rem solid ${ProfilePictureBorder};
    border-radius: 50%;
`;

const TextSection = styled.div<StyledComponentProps>`
    display: flex;
    flex: 2;
    flex-direction: column;

    margin: ${(props) =>
        props.$mobile === 'true' ? '0 0.5rem' : '1rem 2rem 0 1rem'};
`;

const Name = styled.div`
    font-size: large;
    font-weight: bold;
`;
const Title = styled.div`
    color: grey;
    margin: 0.5rem 0;
`;
const Description = styled.div``;
const StatsSection = styled.div<StyledComponentProps>`
    display: flex;
    margin: 2rem 0;
    font-size: small;
`;

const Stat = styled.div<StyledComponentProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: ${(props) => (props.$mobile === 'true' ? '1' : undefined)};

    margin: ${(props) => (props.$mobile === 'true' ? undefined : '0 2rem 0 0')};
`;
const Followers = styled(Stat)``;
const Following = styled(Stat)`
    border-right: 1px solid black;
    border-left: 1px solid black;

    padding: ${(props) => (props.$mobile === 'true' ? undefined : '0 2rem')};
`;
const Projects = styled(Stat)``;
const ButtonsSection = styled.div<StyledComponentProps>`
    display: flex;

    flex-direction: ${(props) => (props.$mobile === 'true' ? 'column' : 'row')};

    align-items: center;
    margin: 0 0 2rem 0;
`;

const StyledButton = styled.button<StyledComponentProps>`
    width: ${(props) => (props.$mobile === 'true' ? '100%' : '7rem')};
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid black;
    &:hover {
        background-color: ${PinkShadow};
    }
`;
const FollowButton = styled(StyledButton)`
    margin: ${(props) =>
        props.$mobile === 'true' ? '0 0 0.5rem 0' : '0 1rem 0 0'};

    background-color: ${FollowButtonColor};
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -2;
        box-shadow: -10px -220px 100px 100px ${BlueShadow};
    }
`;
const ViewProfileButton = styled(StyledButton)`
    background-color: ${ViewProfileButtonColor};
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        box-shadow: 220px -90px 100px 100px ${ViewProfileButtonColor};
    }
`;

export default Card;
