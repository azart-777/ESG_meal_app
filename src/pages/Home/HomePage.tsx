import { ContactUsForm } from '../../components';
import { MooveUpArrow } from '../../components';
import TreeInfoComponent from '../../components/TreeInfoComponent/TreeInfoComponent';
import { IconCardComponent } from '../../components/IconCardComponent/IconCardComponent';
import {Header} from "../../components/Header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <TreeInfoComponent />
            <IconCardComponent/>
            <ContactUsForm />

            <MooveUpArrow />
        </>
    );
};

export default Home;
