import Footer from "../components/Footer";
import EditorsComponent from "../components/Editors";

const EditorsPage = () => {
    return (
        <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full max-h-[712px] overflow-hidden">
                <img className="w-full block overflow-hidden" src="https://i.postimg.cc/pTgFw4b9/370459.jpg" alt=""/>
            </div>

            <div className="max-layout-width bg-gray-300 p-4">
                <EditorsComponent></EditorsComponent>
            </div>

            <Footer></Footer>
        </div>
    );
}
export default EditorsPage;