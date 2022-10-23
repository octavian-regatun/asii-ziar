import Image from "next/image";

export default function Editor (props){
    const data=props.data;
    return (
        <div className=" font-sans drop-shadow-lg text-slate-600 hover:-translate-y-2 duration-500 bg-slate-100 w-40 rounded-lg text-black mx-2 my-3">
            <Image width='160' height='192' className="shadow-sm rounded-lg mx-auto mb-3" src={data.img} alt={"profile pic off "+ data.name}/>
            <div className="p-2 pt-1"> 
                <h4 className="font-semibold text-sm pb-1">{data.name}</h4>
                <p className="text-xs">{data.role} {data.nrPosts} Posts</p>
                <p></p>
                <p className="mt-2 text-xs">{data.text}</p>
             </div>
        </div>
    )
};
