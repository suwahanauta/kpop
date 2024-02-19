import Image from "next/image";

export default function Home() {
  return (

    <div className="">
        <div>
          <p>グループ画像</p>

        </div>
        <div>
          <p>グループ名</p>
          <input></input>
        </div>
        <div>
          <button className="bg-pink-300 font-bold h-[calc(100vh/10)] w-[calc(100vw/4)] rounded-full absolute bottom-[100px] left-[calc(100vw/8*3)]">グループ作成</button>
        </div>
    </div>

  );
}

