import { ContactUsForm, TreeInfoComponent, Header, PromotionalBanner, IconCardComponent, MoveUpArrow, CircleWithTalkingHead, Footer } from '../../components';
import './Home.scss';

const Home = () => {
    return (
        <>
            <Header/>
            <PromotionalBanner/>
            <CircleWithTalkingHead />
            <div className={"home-page__background-container"}>
                <TreeInfoComponent />
                <IconCardComponent />
                <ContactUsForm />
            </div>
            <Footer/>
            <MoveUpArrow />
        </>
    );
};

export default Home;
