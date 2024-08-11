import { ContactUsForm } from '../../components';
import TreeInfoComponent from '../../components/TreeInfoComponent/TreeInfoComponent';
import { Header } from "../../components/Header/Header";
import { PromotionalBanner } from '../../components';
// import { EarthImage } from '../../components'; {/*Переписав компоненту, в PromotionalBanner*/}
import { IconCardComponent } from '../../components';
import { MoveUpArrow } from '../../components';

const Home = () => {
    return (
        <>
            <Header />
            <PromotionalBanner/>
            {/* <EarthImage /> */} {/*Переписав компоненту, в PromotionalBanner*/}
            <TreeInfoComponent />
            <IconCardComponent />
            <ContactUsForm />

            <MoveUpArrow />
        </>
    );
};

export default Home;
