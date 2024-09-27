
// import { usegetSinglePost } from '@/src/hooks/useLostProduct';
import PostCard from '@/src/components/UI/PostCard';
import { getSingleRecentPost } from '@/src/services/RecentPost';


import React from 'react';

interface IProps{
    params:{
        item:string
    }
}


const page = async({params:{item}}:IProps) => {
// console.log('-->',item);
const { data } =await getSingleRecentPost(item)
// console.log("---->",data);

    return (
        <div className='max-w-[720px] mx-auto my-10'>
           <PostCard post={data} ></PostCard> 
        </div>
    );
};

export default page;