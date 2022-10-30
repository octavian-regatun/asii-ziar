import Image from "next/image";

export default function Editor(props) {
  const { data } = props;
  return (
    <div className="font-sans hover:bg-gray-50 hover:drop-shadow-lg hover:-translate-y-2 duration-500 w-40 rounded-lg text-black mx-2 my-3">
      <Image
        width="160"
        height="192"
        className="rounded-[15px] mx-auto mb-3"
        src={data.img}
        alt={"profile pic off " + data.name}
      />
      <div className="p-1">
        <h4 className="font-semibold pb-1">{data.name}</h4>
        <p className="text-xs">
          {data.role} {data.nrPosts} Posts
        </p>
        <p className="mt-2 text-xs">{data.text}</p>
      </div>
    </div>
  );
}
