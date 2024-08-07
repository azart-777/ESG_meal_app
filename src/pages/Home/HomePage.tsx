import { ContactUsForm } from '../../components';
import { MoveUpArrow } from '../../components';
import TreeInfoComponent from '../../components/TreeInfoComponent/TreeInfoComponent';
import { IconCardComponent } from '../../components/IconCardComponent/IconCardComponent';
import { Header } from "../../components/Header/Header";
import { PromotionalBanner } from '../../components';
import { EarthImage } from '../../components';

const Home = () => {
    return (
        <>
            <Header />
            <PromotionalBanner/>
            <EarthImage />
            <TreeInfoComponent />
            <IconCardComponent/>
            <ContactUsForm />

            <MoveUpArrow />
        </>
    );
};

export default Home;
