import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-[#ECF2F5] min-h-screen">
      <Header />
      <div className="flex flex-row w-full">
        {/* sidebar */}
        <div className="lg:w-[16.9%]">
          <Sidebar />
        </div>
        {/* Main Content */}
        <main className="w-full px-5 py-7">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
