import Header from "./header/header";
import Footer from "./footer";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex min-h-screen w-full justify-center bg-cstm-bg pb-4">
      <div className="flex h-full w-full flex-col text-zinc-400">
        <Header />
        <main className="flex justify-center px-4 lg:mt-20">
          <div className="max-w-8xl">{children}</div>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
