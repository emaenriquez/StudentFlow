
import ImagenHeader from "../components/CarosuelSection/ImagenHeader";
import CarosuelSoftware from "../components/CarosuelSection/CarosuelSoftware";
import Navbar from "../components/NavBarSection/NavBar";
import Features from "../components/FeaturesSection/Features";
import Footer from "../components/FooterSection/Footer";

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