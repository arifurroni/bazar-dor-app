"use client";
import { useEffect, useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";
import logo from "../assets/logo.png"
import BanglaDate from "./BanglaDate";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
// import baseUrl from "@/services/baseUrl";

export default function Navbar({categories}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const [categories, setCategories] = useState([]);

  const router = useRouter();

  const { data: session } = authClient.useSession()
//   console.log(session);

    const handleSignOut = async () => {
        await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/sign-in"); // redirect to Sign In page
    },
  },
});
    }

    // useEffect(() => {
    //     fetch(`${baseUrl}/api/bazardor/categories`)
    //     .then(res=> res.json())
    //     .then(data=> setCategories(data))
    //     .catch(err=> console.log(err))
    // }, []);
    // console.log(categories);

  return (
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg py-2">
          <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
              <div className="flex items-center gap-4">
                  <button
                      className="md:hidden"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      aria-label="Toggle menu"
                      aria-expanded={isMenuOpen}
                  >
                      <span className="sr-only">Menu</span>
                      <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                          {isMenuOpen ? (
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                              />
                          ) : (
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6h16M4 12h16M4 18h16"
                              />
                          )}
                      </svg>
                  </button>
                  <div className="flex items-center gap-3">
                      {/* Need to add logo */}
                      <Image height={40} width={40} alt="Logo" src={logo} className="bg-[#05893E] p-2 rounded-xl" />
                      <div>
                        <Link href="/" className="font-bold text-xl">বাজার দর</Link>
                      <BanglaDate />
                      </div>
                      {/* Need to add Date */}

                  </div>
                  
              </div>
              <ul className="hidden items-center gap-4 md:flex">
                  <Link href="/" className="border-2 border-[#05893E] text-xs px-2 py-2">হোম</Link>
                  {/* <li>
                      <Link href="#">Features</Link>
                  </li>
                  <li>
                      <Link href="#" className="font-medium text-accent" aria-current="page">
                          Dashboard
                      </Link>
                  </li> */}

                    {
                        categories?.map(cat => <li key={cat?.id}><Link href={`/category/${cat?.slug}`} className="text-xs"><span>{cat?.icon}</span>{cat?.nameBn}</Link></li>)
                    }

                  {/* {
                    session?.user && <li>
                      <Link href="/profile">Profile</Link>
                  </li>
                  } */}
              </ul>
              <div className="hidden items-center gap-4 md:flex">
                {
                    session?.user && <>
                      <Link href="/profile" className="border-2 border-[#05893E] px-2 py-2 text-xs">প্রোফাইল</Link>
                  </>
                  }

                  {
                    session?.user ? <><button onClick={handleSignOut} className="bg-[#05893E] text-white rounded-xl px-2 py-2 text-sm">সাইন আউট</button></> : <><Link href="/sign-in">সাইন ইন</Link>
                  <Link href="/sign-up"><Button className="bg-[#05893E]">সাইন আপ</Button></Link></>
                  }
                   

              </div>
              {/* <div>
                {
                        categories.map(cat => <div key={cat.id} className="flex"><li><Link>{cat.nameBn}</Link></li></div>)
                    }
              </div> */}
          </header>
          {isMenuOpen && (
              <div className="border-t border-separator md:hidden">
                    {
                        categories?.map(cat => <li key={cat?.id}><Link href={`/category/${cat?.slug}`} className="text-xs"><span>{cat?.icon}</span>{cat?.nameBn}</Link></li>)
                    }
                  <ul className="flex flex-col gap-2 p-4">
                      <Link href="/" className="border-2 border-[#05893E] text-xs px-2 py-2">হোম</Link>
                      {/* <li>
                          <Link href="#" className="block py-2">
                              Features
                          </Link>
                      </li>
                      <li>
                          <Link href="#" className="block py-2 font-medium text-accent">
                              Dashboard
                          </Link>
                      </li> */}
                      {
                        session?.user && <li>
                          <Link href="/profile" className="block py-2 border-2 border-[#05893E] px-2 text-xs">
                              প্রোফাইল
                          </Link>
                      </li>
                      }
                      <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                          {
                            session?.user ? <><button onClick={handleSignOut} className="bg-[#05893E] text-white rounded-2xl p-1">সাইন আউট</button></> : <><Link href="/sign-in" className="block py-2">
                              সাইন ইন
                          </Link>
                          <Link href="/sign-up"><Button className="w-full bg-[#05893E]">সাইন আপ</Button></Link></>
                          }
                      </li>
                  </ul>
              </div>
          )}

      </nav>
  );
}