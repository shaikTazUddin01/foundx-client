import React, { Suspense } from "react";
import Container from "../../UI/Container";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { getRecentPost } from "@/src/services/RecentPost";
import Card from "../../UI/Card";


const RecentPost = async () => {
  const { data: recentPosts } = await getRecentPost();
  // console.log(recentPosts);
  return (
    <Container>
      <div className="section-title my-8  text-center">
        <h2 className="mb-2 text-2xl">Recently Found Items</h2>
        <p>A List of items that have been Recently found and reported</p>
      </div>

      {/* <Suspense fallback={<Loading />}> */}
        <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
          {recentPosts?.map((item: any) => <Card item={item}/>)}
        </div>
      {/* </Suspense> */}

      <div className="flex justify-center">
        <Link href={"/found-items"}>
          <Button className="rounded-md bg-default-900 text-default">
            See All
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default RecentPost;
