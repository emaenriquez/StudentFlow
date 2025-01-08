
import ImagenHeader from "../CarosuelSection/ImagenHeader";
import CarosuelSoftware from "../CarosuelSection/CarosuelSoftware";
import Navbar from "../NavBarSection/NavBar";
import Features from "../FeaturesSection/Features";
import Footer from "../FooterSection/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <ImagenHeader />
            <CarosuelSoftware />
            <Features />
            <Footer />
        </>
    );
};

export default Home;