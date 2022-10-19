import Image from "next/image";

export default function EditorsPage() {
    return (
        <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full max-h-[712px] overflow-hidden">
                <img className="w-full block overflow-hidden" src="https://i.postimg.cc/BQrQ3ws2/cover.jpg" alt=""/>
            </div>

            <div className="max-layout-width bg-gray-300 p-4">
                Editors Widget
                {/* Here the EditorsWidget */}
            </div>

            Footer
            {/* Here the Footer */}
        </div>
    );
}