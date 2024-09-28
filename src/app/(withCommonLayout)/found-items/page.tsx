import Filter from "@/src/components/Modules/foundItem/Filter";
import PostCard from "@/src/components/UI/PostCard";
import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";

const FoundItem = async ({ searchParams }: { searchParams: any }) => {
  const params = new URLSearchParams(searchParams);
// console.log(params.get("category"));
  const { data } = await axiosInstance.get(`/items`, {
    params: {
      searchTerm: params.get("query"),
      category: params.get("category"),
    },
  });
  // console.log(data);
  const postData = data?.data;
  return (
    <div className="max-w-[720px] mx-auto my-5">
      <Filter />
      {postData?.map((item: IPost) => <PostCard post={item} key={item?._id} />)}
    </div>
  );
};

export default FoundItem;
