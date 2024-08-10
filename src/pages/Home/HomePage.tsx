import { ContactUsForm } from '../../components';
import TreeInfoComponent from '../../components/TreeInfoComponent/TreeInfoComponent';
import { Header } from "../../components/Header/Header";
import { PromotionalBanner } from '../../components';
import { EarthImage } from '../../components';
import { IconCardComponent } from '../../components';
import { MoveUpArrow } from '../../components';

const Home = () => {
    return (
        <>
            <Header />
            <PromotionalBanner/>
            <EarthImage />
            <TreeInfoComponent />
            <IconCardComponent />
            <ContactUsForm />

            <MoveUpArrow />
        </>
    );
};

export default Home;
