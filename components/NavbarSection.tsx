"use client";

import Image from "next/image";
import React, { useState } from "react";
// TW DROPDOWN
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import DownArrow from "./DownArrow";
import Link from "next/link";
import Button from "./Button";
import ReminderIcon from "./nav-icons/ReminderIcon";
import TodoIcon from "./nav-icons/TodoIcon";
import CalendarIcon from "./nav-icons/CalendarIcon";
import PlanningIcon from "./nav-icons/PlanningIcon";
import OpenMenuBtn from "./nav-icons/OpenMenuBtn";
import CloseMenuBtn from "./nav-icons/CloseMenuBtn";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
type Props = {};

const NavbarSection = (props: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="mx-8 my-5 flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-16">
          <Image src="/images/logo.svg" alt="logo-img" height={75} width={75} />
        </div>
        <div
          className={`${
            openMenu
              ? "absolute right-0 top-0 flex h-screen w-2/3 flex-col items-start gap-y-12 bg-white pl-10 pt-24 md:hidden"
              : "hidden md:flex"
          }`}
        >
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900">
                Features
                {/* <DownArrow fill="#fff" className="h-4 w-4" /> */}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#todolist"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <TodoIcon className="mr-3 inline-block" />
                        <span>Todo List</span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#calendar"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <CalendarIcon className="mr-3 inline-block" />
                        <span>Calendar</span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#reminders"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <ReminderIcon className="mr-3 inline-block" />
                        <span>Reminders</span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#planning"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <PlanningIcon className="mr-3 inline-block" />
                        <span>Planning</span>
                      </Link>
                    )}
                  </Menu.Item>
                  {/* <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form> */}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900">
                Company
                {/* <DownArrow fill="#fff" className="h-4 w-4" /> */}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#history"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        History{" "}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#ourteams"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Our Teams
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#blog"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Blog
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <Link href="/careers">
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900">
                Careers
                {/* <DownArrow fill="#fff" className="h-4 w-4" /> */}
              </Menu.Button>
            </Link>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <Link href="/about">
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900">
                About
                {/* <DownArrow fill="#fff" className="h-4 w-4" /> */}
              </Menu.Button>
            </Link>
          </Menu>
          {openMenu ? (
            <div className="md:hidden gap-y-8 flex flex-col items-center">
              <Button
                name="Login"
                className="rounded-xl px-5 py-2 font-semibold outline-1 outline-offset-2 hover:outline"
              />
              <Button
                name="Register"
                className="rounded-xl px-5 py-2 font-semibold outline-1 outline-offset-2 hover:outline"
              />
            </div>
          ) : (
            null
          )}
        </div>
      </div>
      <div className="hidden gap-x-5 md:flex">
        <Button
          name="Login"
          className="rounded-xl px-5 py-2 font-semibold outline-1 outline-offset-2 hover:outline"
        />
        <Button
          name="Register"
          className="rounded-xl px-5 py-2 font-semibold outline-1 outline-offset-2 hover:outline"
        />
      </div>

      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="absolute right-8 md:hidden"
      >
        {openMenu ? <CloseMenuBtn /> : <OpenMenuBtn />}
      </button>
    </nav>
  );
};

export default NavbarSection;
