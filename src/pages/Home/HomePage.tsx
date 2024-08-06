import { ContactUsForm } from '../../components';
import TreeInfoComponent from '../../components/TreeInfoComponent/TreeInfoComponent';
import { IconCardComponent } from '../../components/IconCardComponent/IconCardComponent';
import PromotionalBanner from '../../components/PromotionalBanner/PromotionalBanner';
import EarthImage from '../../components/EarthImage/EarthImage';

const Home = () => {
    return (
        <>
            <PromotionalBanner/>
            <EarthImage />
            <TreeInfoComponent />
            <IconCardComponent/>
            <ContactUsForm />
        </>
    );
};

export default Home;
