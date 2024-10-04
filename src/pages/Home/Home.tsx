import {
    CompanyCards,
    AppHeader,
    Slogan,
    Overview,
    Welcome,
    WeDidIt,
    EcoAppNetwork,
    ContactUsForm,
    AppFooter,
    MoveUp,
} from '../../components';
import './Home.scss';

const Home = () => {
    return (
        <>
            <div className={"home-page__container"}>
                <AppHeader />
                <Slogan />
                <Overview />
                <Welcome />
                <CompanyCards />
                <WeDidIt/>
                {/*<EcoAppNetwork />*/}
                <ContactUsForm />
                <MoveUp />
                <AppFooter />
            </div>
        </>
    );
};

export default Home;
