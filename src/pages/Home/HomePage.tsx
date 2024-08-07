import { ContactUsForm } from '../../components';
import { MooveUpArrow } from '../../components';
import TreeInfoComponent from '../../components/TreeInfoComponent/TreeInfoComponent';
import { IconCardComponent } from '../../components/IconCardComponent/IconCardComponent';

const Home = () => {
    return (
        <>
            <TreeInfoComponent />
            <IconCardComponent/>
            <ContactUsForm />

            <MooveUpArrow />
        </>
    );
};

export default Home;
