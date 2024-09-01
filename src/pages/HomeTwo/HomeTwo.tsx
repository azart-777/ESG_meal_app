// import { NewSloganDesignV2, MoveUpArrow, CircleWithTalkingHead, Footer, WelcomeComponent, NewHeaderDesignV2 } from '../../components';
import { NewSloganDesignV2, MoveUpArrow, CircleWithTalkingHead, Footer} from '../../components';
import { EcoAppNetwork } from '../../components/EcoAppNetwork/EcoAppNetwork';
import { NewHeaderDesignV2 } from '../../components/NewHeaderDesignV2/NewHeaderDesignV2';
import { WelcomeComponent } from '../../components/WelcomeComponent/WelcomeComponent';
import './HomeTwo.scss';

const HomeTwo = () => {
    return (
        <>
            <NewHeaderDesignV2/>
            <NewSloganDesignV2/>
            <WelcomeComponent/>
            <CircleWithTalkingHead />
            <EcoAppNetwork/>
            <Footer/>
            <MoveUpArrow />
        </>
    );
};

export default HomeTwo;
