import { AnimationCircuit } from '../../components/EcoAppNetwork/AnimationCircuit/AnimationCircuit';
import { EcoAppNetwork } from '../../components/EcoAppNetwork/EcoAppNetwork';
import { NewSloganDesignV2, MoveUpArrow, CircleWithTalkingHead, Footer, WelcomeComponent, NewHeaderDesignV2, NewOverviewComponentV2 } from '../../components';
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
            <AnimationCircuit/>
            <Footer/>
            <MoveUpArrow />
        </>
    );
};

export default HomeTwo;
