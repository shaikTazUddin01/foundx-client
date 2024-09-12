import Landing from "@/src/components/Modules/home/Landing";

import RecentPost from "@/src/components/Modules/home/RecentPost";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Landing />
      
        <RecentPost />
      
    </div>
  );
}
