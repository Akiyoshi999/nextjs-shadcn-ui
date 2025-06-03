import Header from "./_components/header";
import Sidebar from "./_components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
