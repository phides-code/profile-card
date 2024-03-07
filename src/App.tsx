import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import profileJson from './data/profile.json';
import { Profile } from './types';

const App = () => {
    const [isMobile, setisMobile] = useState<boolean>(false);

    const profile: Profile = profileJson;

    useEffect(() => {
        const detectMobile = () => {
            const mobileThreshold = 768; // Threshold for isMobile devices (adjust as needed)

            setisMobile(window.innerWidth < mobileThreshold);
        };

        detectMobile();
        // Function to check if the window is resized
        const handleResize = () => {
            detectMobile();
        };
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Wrapper>
            <Card isMobile={isMobile} profile={profile} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export default App;
