"use client";

import { getPostBySlug } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";

type Props = {
  slug: string;
};

export default function Post({ slug }: Props) {
  const { data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
  });

  if (!data) return notFound();

  return (
    <div className="">
      <img src={data?.coverImage.url} alt="" className="bg-none rounded-lg md:mx-12" />
      <div className="p-8 rounded-xl mt-4 bg-slate-950 text-slate-400">
        <h1 className="text-4xl lg:text-6xl text-center leading-relaxed font-bold mt-5">
          {data?.title}
        </h1>
        <p className="my-5 text-center text-xl text-gray-400">{data?.subtitle}</p>
        <div className="my-5 flex items-center justify-center text-lg">
          {data?.author.profilePicture && (
            <img
              src={data?.author.profilePicture}
              alt={data?.author.name}
              className="rounded-full h-5 w-5 mr-5"
            />
          )}
          {data?.author.name}
        </div>
        <div
          className="blog-content text-xl leading-loose flex flex-col gap-5 mt-5"
          dangerouslySetInnerHTML={{ __html: data!.content.html }}
        ></div>
      </div>
    </div>
  );
}
