import Navbar from "@/components/navbar/Navbar.jsx";
import Footer from "@/components/footer/Footer.jsx";

const introducePage = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='flex justify-center fixed flex-col'>
                <Footer />
            </div>
        </div>
    );
};

export default introducePage;
