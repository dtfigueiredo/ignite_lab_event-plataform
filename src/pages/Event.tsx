import { CardLesson } from "../components/CardLessons";
import { CardLink } from "../components/CardLink";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { VideoPlayer } from "../components/VideoPlayer";

export function EventPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <VideoPlayer />
        <Sidebar />
      </main>
      {/* <CardLesson /> */}
      {/* <CardLink /> */}
    </div>
  );
}
