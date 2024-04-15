"use client";
import { useEffect, useState } from "react";
import propertyLogo from "@/assets/images/town.png";
import bell from "@/assets/images/notification-bell.png";
import user from "@/assets/images/user.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Badge, Drawer, Dropdown, Button } from "antd";
import { Slant as Hamburger } from "hamburger-react";
import google from "@/assets/images/google.png";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  const items = [
    {
      label: <Link href="/">Profile</Link>,
      key: "0",
    },
    {
      label: <Link href="/">Saved Properties</Link>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Button
          onClick={() => {
            setOpen(false);
            signOut();
          }}
        >
          Signout
        </Button>
      ),
      key: "2",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full p-5 bg-blue-700 text-white border-b-[1px] border-gray-500">
      <div className="hidden md:flex justify-between w-[90%]">
        <Link href={"/"}>
          <div className="flex items-center w-full gap-3">
            <Image src={propertyLogo} alt="logo" width={40} priority />
            <h1 className={`text-3xl`}>Realty Studios</h1>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <div
            className={
              pathname === "/"
                ? "bg-slate-800 p-2 rounded-lg"
                : "p-2 rounded-lg hover:bg-slate-800"
            }
          >
            <Link href={"/"}>Home</Link>
          </div>
          <div
            className={
              pathname === "/properties"
                ? "bg-slate-800 p-2 rounded-lg"
                : "p-2 rounded-lg hover:bg-slate-800"
            }
          >
            <Link href={"/properties"}>Properties</Link>
          </div>
          {session && (
            <div
              className={
                pathname === "/properties/add"
                  ? "bg-slate-800 p-2 rounded-lg"
                  : "p-2 rounded-lg hover:bg-slate-800"
              }
            >
              <Link href={"/properties/add"}>Add Property</Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="flex items-center w-full gap-3">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <h1 className={`text-3xl`}>Realty Studios</h1>
        </div>
        <Drawer
          title="Basic Drawer"
          onClose={() => {
            setOpen(!open);
          }}
          open={isOpen}
        >
          <div
            className={
              pathname === "/"
                ? "bg-slate-800 p-2 rounded-lg"
                : "p-2 rounded-lg hover:bg-slate-800"
            }
          >
            <Link href={"/"}>Home</Link>
          </div>
          <div
            className={
              pathname === "/properties"
                ? "bg-slate-800 p-2 rounded-lg"
                : "p-2 rounded-lg hover:bg-slate-800"
            }
          >
            <Link href={"/properties"}>Properties</Link>
          </div>
          {session && (
            <div
              className={
                pathname === "/add"
                  ? "bg-slate-800 p-2 rounded-lg w-32"
                  : "w-32 p-2 rounded-lg hover:bg-slate-800"
              }
            >
              <Link href={"/add"} className="">
                Add Property
              </Link>
            </div>
          )}
        </Drawer>
      </div>
      <div className="flex items-center pl-3 pr-3 gap-16">
        {!session &&
          providers &&
          Object.values(providers).map((provider, index) => (
            <button
              key={index}
              onClick={() => signIn(provider.id)}
              className="bg-gray-800 flex items-center p-3 rounded-md gap-3 w-full"
            >
              <Image src={google} width={20} alt="login-img" />
              <h1>Login</h1>
            </button>
          ))}
        {session && (
          <>
            <Badge dot={true}>
              <Image
                src={bell}
                alt="notify-icon"
                width={30}
                className="cursor-pointer"
              />
            </Badge>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Image
                src={session.user.image || user}
                alt="notify-icon"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </Dropdown>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
