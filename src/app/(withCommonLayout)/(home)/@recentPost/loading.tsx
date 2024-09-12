
import React from "react";

import Container from "@/src/components/UI/Container";

import CardSkeletor from "@/src/components/UI/CardSkeletor";



const loading = async () => {
//   const { data: recentPosts } = await getRecentPost();
  // console.log(recentPosts);
  return (
    <Container>
      <div className="section-title my-8  text-center">
        <h2 className="mb-2 text-2xl">Recently Found Items</h2>
        <p>A List of items that have been Recently found and reported</p>
      </div>

      
      
        <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
          {[...Array(9)]?.map(() => <CardSkeletor></CardSkeletor>)}
        </div>
        
     

      
    </Container>
  );
};

export default loading;
