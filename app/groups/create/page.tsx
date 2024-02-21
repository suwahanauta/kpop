'use client'

import Image from "next/image";

import { useRef } from "react";

export default function Home() {

    const textRef = useRef<HTMLInputElement>(null);

    const imageRef = useRef<HTMLInputElement>(null);

    return (
        <div>

            <div className="h-[100px] mt-[50px]">
                <p className="text-center font-bold text-[30px] leading-[100px]">↓グループ名を入力↓</p>
                <input ref={textRef} className="h-[50px] w-[calc(100vw/4)] rounded-lg border-[3px] border-pink-300 absolute top-[150px] left-[calc(100vw/8*3)]"></input>
            </div>

            <div className="h-[100px] mt-[100px]">
                <p className="text-center font-bold text-[30px] leading-[100px]">↓グループ画像を選択↓</p>
                <input ref={imageRef} className="bg-white text-[20px] rounded-lg p-[10px] border-[3px] border-pink-300 w-[calc(100vw/4)] absolute top-[350px] left-[calc(100vw/8*3)]" type="file"></input>
            </div>

            <div>
                <button onClick={() => { console.log(textRef.current?.value, imageRef.current?.value) }} className="bg-pink-300 font-bold h-[calc(100vh/10)] w-[calc(100vw/4)] rounded-full absolute bottom-[100px] left-[calc(100vw/8*3)] text-white text-[20px]">グループ作成</button>
            </div>

        </div>
    );
}