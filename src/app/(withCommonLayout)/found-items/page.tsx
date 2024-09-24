
import PostCard from "@/src/components/UI/PostCard";
import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";

const FoundItem = async () => {
  const { data } = await axiosInstance.get(`/items`);
  // console.log(data);
  const postData=data?.data
  return (
    <div className="max-w-[720px] mx-auto my-5">
      {postData?.map((item:IPost)=>(<PostCard post={item}  key={item?._id}/>))}
     
    </div>
  );
};

export default FoundItem;
