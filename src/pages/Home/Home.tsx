import {
    CompanyCards,
    NewHeaderDesignV2,
    NewSloganDesignV2,
    NewOverviewComponentV2,
    WelcomeComponent,
    WeDidIt,
    EcoAppNetwork,
    ContactUsForm,
    Footer,
    MoveUpArrow,
} from '../../components';
import './Home.scss';

const Home = () => {
    return (
        <>
            <div className={"home-page__container"}>
                <NewHeaderDesignV2 />
                <NewSloganDesignV2 />
                <NewOverviewComponentV2 />
                <WelcomeComponent />
                <CompanyCards />
                <WeDidIt/>
                {/*<EcoAppNetwork />*/}
                <ContactUsForm />
                <Footer />
                <MoveUpArrow />
            </div>
        </>
    );
};

export default Home;
