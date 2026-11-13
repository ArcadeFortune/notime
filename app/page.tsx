import { Button } from "@/components/button";
import Dialog from "@/components/dialog";
import NewTask from "@/components/new-task";

export default function Home() {
  return (
    <div className="flex h-full">
      <aside className="flex flex-col h-full max-h-full w-1/5 min-w-28 max-w-64 rounded border border-r-0 border-gray-300 shadow-sm">
        <div className="flex-1 flex flex-col p-2 overflow-auto scrollbar-thin scrollbar-thumb-gray-300">
          <Button variant="sidebar">NotiMe</Button>
          <Button variant="sidebar">All Notifications</Button>
          <hr className="my-2 text-gray-300" />
          <div className="text-xs px-2">Channels</div>
          <Button variant="sidebar">Gaming</Button>
          <Button variant="sidebar">Gaming</Button>
          <Button variant="sidebar">Gaming</Button>
          <Button variant="sidebar">Gaming</Button>
          <Button variant="sidebar">Gaming</Button>
          <Button variant="sidebar">Gaming</Button>
          <Button variant="sidebar">Gaming</Button>
          <Button variant="sidebar">Gaming</Button>
          <Button variant="sidebar">Gaming</Button>
          <Button variant="sidebar">Gaming</Button>
          <Button variant="sidebar">Gaming</Button>
          <Button variant="sidebar">Gaming</Button>
        </div>
        <div className="p-2 flex gap-2 rounded-t-lg border-t border-gray-300 shadow-sm items-center bg-white">
          <Button variant="sidebar" className="flex-1">
            Username
          </Button>
          <Button variant="sidebar">Settings</Button>
        </div>
      </aside>

      <div className="flex-1 p-4 rounded border border-gray-300 shadow-sm">
        <header className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Home</h1>
          <NewTask channels={[{ id: "1", name: "sdf" }]} />
        </header>
        <main>
          <div className="p-4 rounded border border-gray-300 shadow-sm">
            <h2 className="text-xl font-bold">New game released</h2>
            <span>Lorem Ipsum</span>
          </div>
        </main>
      </div>
    </div>
  );
}
