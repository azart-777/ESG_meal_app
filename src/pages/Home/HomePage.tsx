import { ContactUsForm } from '../../components';
import TreeInfoComponent from '../../components/TreeInfoComponent/TreeInfoComponent';
import Footer from '../../components/Footer/Footer';
import { Header } from "../../components/Header/Header";
import { PromotionalBanner } from '../../components';
import { IconCardComponent } from '../../components';
import { MoveUpArrow } from '../../components';

const Home = () => {
    return (
        <>
            <Header />
            <PromotionalBanner/>
            <TreeInfoComponent />
            <IconCardComponent />
            <ContactUsForm />
            <Footer/>
            <MoveUpArrow />
        </>
    );
};

export default Home;
