import Image from "next/image";

export default function Editor (props){
    const data=props.data;
    return (
        <div className=" font-sans drop-shadow-sm text-slate-600 bg-slate-200 w-40 rounded-lg mx-1 my-2 text-black">
            <Image width='160' height='192' className="shadow-sm rounded-lg mx-auto mb-3" src={data.img} alt={"profile pic off "+ data.name}/>
            <div className="p-1 "> 
                <h4 className="font-semibold text-sm pb-1">{data.name}</h4>
                <p className="text-xs">{data.role} {data.nrPosts} Posts</p>
                <p></p>
                <p className="mt-2 text-xs">{data.text}</p>
             </div>
        </div>
    )
};
