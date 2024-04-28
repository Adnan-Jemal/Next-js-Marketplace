import Sidebar from "@/components/account/Sidebar";
import AccountHeader from "@/components/account/AccountHeader";
import Navbar from "@/components/header/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="flex">
        <Sidebar />
        <div className="w-full h-full">
          <AccountHeader />
          {children}
        </div>
      </div>
    </div>
  );
}
