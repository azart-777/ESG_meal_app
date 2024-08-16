import { ContactUsForm, TreeInfoComponent, Header, PromotionalBanner, IconCardComponent, MoveUpArrow, Footer } from '../../components';
import './Home.scss';

const Home = () => {
    return (
        <>
            <Header/>
            <PromotionalBanner/>
            <TreeInfoComponent />
            <IconCardComponent />
            <ContactUsForm />
            <Footer/>
                <div className={"home-page__background-container"}>
                    <TreeInfoComponent />
                    <IconCardComponent />
                    <ContactUsForm />
                </div>
            <MoveUpArrow />
        </>
    );
};

export default Home;
