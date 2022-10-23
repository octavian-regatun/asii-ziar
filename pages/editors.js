import Footer from "../components/Footer";
import EditorsComponent from "../components/Editors";
import Image from "next/image";

const EditorsPage = () => {
    return (
        <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full h-[712px] overflow-hidden relative">
                <Image layout='fill' className="w-full absolute" src="https://i.postimg.cc/pTgFw4b9/370459.jpg" alt=""/>
                <div className="w-full h-[712px] absolute text-gray-100 flex flex-col justify-center items-center gap-3">
                    <div className="font-bold text-6xl">Editori</div>
                    <div className="text-3xl">Lorem ipsum dolor sit amet.</div>
                </div>
            </div>

            <div className="max-layout-width bg-slate-50 drop-shadow rounded-[20px] p-8">
                <EditorsComponent></EditorsComponent>
            </div>

            <div className="bg-gray-300 w-full">
                <Footer></Footer>
            </div>

        </div>
    );
}
export default EditorsPage;