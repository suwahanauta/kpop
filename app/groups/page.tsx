import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="h-[calc(100vh/10)] w-screen bg-yellow-100">
        <h1 className="font-bold text-[30px] text-center leading-[calc(100vh/10)]">Kpopグループ一覧</h1>
      </div>

      <div className="flex">

        <div className="h-[calc(100vw/4)] w-[calc(100vw/4)] p-[30px]">
          <img className="h-4/5 w-full" src='/newjeans.jpg' />
          <p className="h-1/5 w-full text-center text-[20px] leading-{h-5/1}">NewJeans</p>
        </div>

        <div className="h-[calc(100vw/4)] w-[calc(100vw/4)] p-[30px]">
          <img className="h-4/5 w-full" src='/lesserafim.jpeg' />
          <p className="h-1/5 w-full text-center text-[20px]">LE SSERAFIM</p>
        </div>

        <div className="h-[calc(100vw/4)] w-[calc(100vw/4)] p-[30px]">
          <img className="h-4/5 w-full" src='/gidol.jpg' />
          <p className="h-1/5 w-full text-center text-[20px]">(G)I-DLE</p>
        </div>

        <div className="h-[calc(100vw/4)] w-[calc(100vw/4)] p-[30px]">
          <img className="h-4/5 w-full" src='/twice.jpg' />
          <p className="h-1/5 w-full text-center text-[20px]">TWICE</p>
        </div>

      </div>

      <div className="h-[100px] w-[100px] bg-blue-300 absolute bottom-[60px] right-[60px] text-[60px] rounded-full">
        <p className="text-center text-white">+</p>
      </div>

    </div>

  );
}

