import {
    NewSloganDesignV2,
    MoveUpArrow,
    CircleWithTalkingHead,
    Footer,
    WelcomeComponent,
    NewHeaderDesignV2,
    NewOverviewComponentV2,
    EcoAppNetwork,
    ContactUsForm
} from '../../components';
import './HomeTwo.scss';

const HomeTwo = () => {
    return (
        <>
            <NewHeaderDesignV2/>
            <NewSloganDesignV2/>
            <NewOverviewComponentV2 />
            <WelcomeComponent />
            <CircleWithTalkingHead />
            <EcoAppNetwork/>
            <ContactUsForm />
            <Footer/>
            <MoveUpArrow />
        </>
    );
};

export default HomeTwo;
