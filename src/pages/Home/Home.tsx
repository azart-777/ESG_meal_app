import {
    CompanyCards,
    AppHeader,
    Slogan,
    Overview,
    Welcome,
    WeDidIt,
    ContactUsForm,
    AppFooter,
    MoveUp,
    EcoAppNetworkV2,
} from "../../components";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <div className="top-light-ellipse"></div>
            <div className={"home-page__container"}>
                <AppHeader />
                <Slogan />
                <Overview />
                <Welcome />
                <CompanyCards />
                <WeDidIt />
            </div>
            <EcoAppNetworkV2 />
            <div className={"home-page__container"}>
                <ContactUsForm />
                <MoveUp />
                <AppFooter />
            </div>
        </>
    );
};

export default Home;
