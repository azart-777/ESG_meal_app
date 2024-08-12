import { ContactUsForm } from '../../components';
import TreeInfoComponent from '../../components/TreeInfoComponent/TreeInfoComponent';
import { IconCardComponent } from '../../components/IconCardComponent/IconCardComponent';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <TreeInfoComponent />
            <IconCardComponent/>
            <ContactUsForm />
            <Footer/>
        </>
    );
};

export default Home;
