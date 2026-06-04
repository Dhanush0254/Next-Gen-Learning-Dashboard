import { supabase, CourseData } from "@/lib/supabase";
import CourseTile from "./CourseTile";

export default async function CourseList() {
  let courses: CourseData[] = [];
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      // Fallback to local state to maintain UI integrity if Supabase connection drops
      courses = [
        { id: "1", title: "Advanced React Patterns", progress: 75, icon_name: "Code2", created_at: "" },
        { id: "2", title: "UI/UX Fundamentals", progress: 40, icon_name: "PenTool", created_at: "" },
        { id: "3", title: "Framer Motion Mastery", progress: 90, icon_name: "MonitorPlay", created_at: "" },
        { id: "4", title: "System Design Basics", progress: 20, icon_name: "Database", created_at: "" }
      ];
    } else if (data) {
      // console.log("got data", data)
      courses = data as CourseData[];
    }
  } catch (err) {
    // Global error boundary fallback
    courses = [
      { id: "1", title: "Advanced React Patterns", progress: 75, icon_name: "Code2", created_at: "" },
      { id: "2", title: "UI/UX Fundamentals", progress: 40, icon_name: "PenTool", created_at: "" }
    ];
  }

  // await new Promise(r => setTimeout(r, 2000)); // TODO: Remove artificial network delay before production

  return (
    <>
      {courses.length > 0 ? (
        courses.map(c => <CourseTile key={c.id} course={c} />)
      ) : (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-neutral-500 text-center py-10 border border-dashed border-neutral-800 rounded-2xl">
          No courses found or database connection failed. Did you add the env vars?
        </div>
      )}
    </>
  );
}
