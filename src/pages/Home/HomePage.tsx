import { ContactUsForm, TreeInfoComponent, Header, PromotionalBanner, IconCardComponent, MoveUpArrow } from '../../components';
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
            <MoveUpArrow />
        </>
    );
};

export default Home;
