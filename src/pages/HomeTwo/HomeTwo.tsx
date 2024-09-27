import { Container } from '@mui/material';
import {
    NewSloganDesignV2,
    MoveUpArrow,
    CircleWithTalkingHead,
    Footer,
    WelcomeComponent,
    CompanyCards,
    NewHeaderDesignV2,
    NewOverviewComponentV2,
    EcoAppNetwork,
    ContactUsForm
} from '../../components';
import './HomeTwo.scss';

const HomeTwo = () => {
    return (
        <>
            <Container maxWidth="xl">
                <NewHeaderDesignV2 />
                <NewSloganDesignV2 />
                <NewOverviewComponentV2 />
                <WelcomeComponent />
                <CompanyCards />
                {/* <CircleWithTalkingHead /> */}
                <EcoAppNetwork />
                <Footer />
                <MoveUpArrow />
            </Container>
        </>
    );
};

export default HomeTwo;
