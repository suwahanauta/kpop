'use client'

import Image from "next/image";

import { useEffect } from 'react';
import { GET } from "../api/route";

type GroupInfo = {
  id: number
  groupName: string
  imageUrl: string
}

export default function Home() {

  useEffect(() => {
    fetch('http://localhost:3000/api/get_groups', {method: 'GET'})
    .then((res) => console.log(res))
    .catch(() => alert("error"))
  }, [])

  const groups: GroupInfo[] = [{id: 1, groupName: "NewJeans", imageUrl: "/newjeans.jpg" }, { id: 2,groupName: "LE SSELAFIM", imageUrl: "/lesserafim.jpeg" }, { id: 3,groupName: "(G)I-DLE", imageUrl: "/gidol.jpg" }, { id: 4,groupName: "TWICE", imageUrl: "/twice.jpg" }]

  return (
    <div>

      <div className="h-[calc(100vh/10)] w-screen">
        <h1 className="font-bold text-[30px] text-center leading-[calc(100vh/10)]">Kpopグループ一覧</h1>
      </div>

      <div className="flex">

        {groups.map(
          (value) => {
            return <div key={value.id} className="h-[calc(100vw/4)] w-[calc(100vw/4)] p-[30px]">
              <img className="h-4/5 w-full" src={value.imageUrl} />
              <p className="h-1/5 w-full text-center text-[20px] leading-{h-5/1}">{value.groupName}</p>
            </div>
          }
        )}

      </div>

      <div className="h-[100px] w-[100px] bg-blue-300 absolute bottom-[60px] right-[60px] text-[60px] rounded-full">
        <a href="/groups/create" className="block text-center text-white">+</a>
      </div>

    </div>
  );
}

