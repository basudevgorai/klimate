import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { Link } from "react-router-dom";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center flex flex-col md:flex-row items-center justify-center gap-4 text-gray-800 dark:text-gray-200">
          <p className="mb-0">Made with 💗 by Basudev Gorai</p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
        </div>
      </footer>
    </div>
  );
}
