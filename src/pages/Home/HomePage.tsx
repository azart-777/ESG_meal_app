import { ContactUsForm, TreeInfoComponent, Header, PromotionalBanner, IconCardComponent, MoveUpArrow, Footer } from '../../components';
import './Home.scss';

const Home = () => {
    return (
        <>
            <Header/>
            <PromotionalBanner/>
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
