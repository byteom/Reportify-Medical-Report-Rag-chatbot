"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Settings } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import ReportComponent from "@/components/ReportComponent";
import ChatComponent from "@/components/chatcomponent";
import Link from "next/link"; // Import Link for navigation

const Home = () => {
  const { toast } = useToast();
  const [reportData, setReportData] = useState("");

  const onReportConfirmation = (data) => {
    setReportData(data);
    toast({
      description: "Updated!",
    });
  };

  return (
    <div className="grid h-screen w-full" style={{ backgroundColor: "#0B132B" }}>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b px-4" style={{ backgroundColor: "#1C2541" }}>
          {/* Navigation Bar */}
          <nav className="flex-grow flex justify-center">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-white font-semibold hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/mental-health" className="text-white font-semibold hover:underline">
                  Mental Health
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" style={{ color: "#3A506B" }}>
                  <Settings />
                  <span className="sr-only">Settings</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh]" style={{ backgroundColor: "#1C2541" }}>
                <ReportComponent onReportConfirmation={onReportConfirmation} />
              </DrawerContent>
            </Drawer>
          </div>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "#0B132B" }}>
          <div className="hidden md:flex flex-col">
            <ReportComponent onReportConfirmation={onReportConfirmation} />
            {/* <SideComponent onReportConfirmation={onReportConfirmation} /> */}
          </div>
          <div className="lg:col-span-2">
            <ChatComponent reportData={reportData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;