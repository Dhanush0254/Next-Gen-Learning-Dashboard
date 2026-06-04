import { Suspense } from "react";
import BentoGrid from "@/components/BentoGrid";
import HeroCard from "@/components/HeroCard";
import ActivityChart from "@/components/ActivityChart";
import CourseList from "@/components/CourseList";
import LoadingTiles from "@/components/LoadingTiles";

export default function Home() {
  return (
    <div className="w-full h-full pb-20 md:pb-0">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      
      <BentoGrid>
        <HeroCard />
        <ActivityChart />
        
        {/* fetching from supabase here */}
        <Suspense fallback={<LoadingTiles />}>
          <CourseList />
        </Suspense>
      </BentoGrid>
    </div>
  );
}
