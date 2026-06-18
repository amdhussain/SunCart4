"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const { useSession } = authClient;

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-photos", label: "Products" },
    { href: "/profile", label: "My Profile" },
  ];

  return (
    <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50 border-b border-base-200">
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center">
        <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href))
                      ? "active"
                      : ""
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl text-primary gap-2">
          <span className="text-2xl">☀️</span>
          <span className="font-bold">SunCart</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium ${
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                    ? "text-primary bg-primary/10"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {session ? (
          <>
            <Link
              href="/profile"
              className="btn btn-ghost btn-circle avatar online"
              title={session.user.name}
            >
              <div className="w-10 rounded-full">
                <img
                  src={
                    session.user.image ||
                    `https://api.dicebear.com/7.x/initials/svg?seed=${session.user.name}`
                  }
                  alt={session.user.name}
                />
              </div>
            </Link>
            <button
              onClick={async () => {
                await authClient.signOut();
                location.reload();
              }}
              className="btn btn-outline btn-sm hidden sm:inline-flex"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/signin" className="btn btn-ghost btn-sm">
              Login
            </Link>
            <Link href="/signup" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
      </div>
    </nav>
  );
}
