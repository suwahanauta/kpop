'use client'

import Image from "next/image";

import { useEffect, useState } from 'react';

import { GET } from "../api/route";

type GroupInfo = {
  name: string
  image_url: string
}

export default function Home() {


  let [state, setState] = useState<GroupInfo[]>([])

  state = []

  useEffect(() => {

    const fetchFirst = async () => {
      const res = await fetch('http://localhost:3000/api/get_groups', { method: 'GET' })
      const data = await res.json()
      setState(data.groups)
    }

    fetchFirst()

  }, [])

  return (
    <div>

      <div className="h-[calc(100vh/10)] w-screen">
        <h1 className="font-bold text-[30px] text-center leading-[calc(100vh/10)]">Kpopグループ一覧</h1>
      </div>

      <div className="flex">

        {state.map(
          (value, index) => {
            return <div key={index} className="h-[calc(100vw/4)] w-[calc(100vw/4)] p-[30px]">
              <img className="h-4/5 w-full" src={value.image_url} />
              <p className="h-1/5 w-full text-center text-[20px] leading-{h-5/1}">{value.name}</p>
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

