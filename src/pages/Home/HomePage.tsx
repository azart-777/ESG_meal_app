import { ContactUsForm } from '../../components';
import { MooveUpArrow } from '../../components';
import TreeInfoComponent from '../../components/TreeInfoComponent/TreeInfoComponent';
import { IconCardComponent } from '../../components/IconCardComponent/IconCardComponent';
import { PromotionalBanner } from '../../components';
import { EarthImage } from '../../components';

const Home = () => {
    return (
        <>
            <PromotionalBanner/>
            <EarthImage />
            <TreeInfoComponent />
            <IconCardComponent/>
            <ContactUsForm />

            <MooveUpArrow />
        </>
    );
};

export default Home;
