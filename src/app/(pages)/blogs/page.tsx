import Posts from "@/components/posts";
import { getPosts } from "@/lib/request";
import { PostMetadata } from "@/lib/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    getNextPageParam: (
      lastPage: {
        node: PostMetadata;
        cursor: string;
      }[]
    ) =>
      lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });

  return (
    <main className="mt-24 mx-24 md:mx-32 dark">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Posts />
        </HydrationBoundary>
      </div>
    </main>
  );
}
