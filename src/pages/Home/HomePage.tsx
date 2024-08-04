import { ContactUsForm } from '../../components';
import TreeInfoComponent from '../../components/TreeInfoComponent/TreeInfoComponent';
import { IconCardComponent } from '../../components/IconCardComponent/IconCardComponent';
import PromotionalBanner from '../../components/PromotionalBanner/PromotionalBanner';

const Home = () => {
    return (
        <>
            <PromotionalBanner/>
            <TreeInfoComponent />
            <IconCardComponent/>
            <ContactUsForm />
        </>
    );
};

export default Home;
