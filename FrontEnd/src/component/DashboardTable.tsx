"use client";
import React from "react";

const DashboardTable = ({}) => {
    return (
        <div className="bg-neutral-primary-soft rounded-base border-default relative overflow-x-auto border shadow-xs">
            <table className="text-body w-full text-left text-sm rtl:text-right">
                <thead className="text-body bg-neutral-secondary-medium border-default-medium border-b text-sm text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <tr className="bg-neutral-primary-soft border-default hover:bg-neutral-secondary-medium border-b text-white">
                            <td
                                scope="row"
                                className="text-heading px-6 py-4 font-medium whitespace-nowrap"
                            >
                                Apple MacBook Pro 17"
                            </td>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">
                                <a
                                    href="#"
                                    className="text-fg-brand font-medium text-red-600 hover:underline"
                                >
                                    Delete
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav
                className="flex-column flex flex-wrap items-center justify-between p-4 text-white md:flex-row"
                aria-label="Table navigation"
            >
                <span className="text-body mb-4 block w-full text-sm font-normal md:mb-0 md:inline md:w-auto">
                    Showing{" "}
                    <span className="text-heading font-semibold">1-10</span> of{" "}
                    <span className="text-heading font-semibold">1000</span>
                </span>
                <ul className="flex -space-x-px text-sm">
                    <li>
                        <a
                            href="#"
                            className="text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading rounded-s-base box-border flex h-9 items-center justify-center border px-3 text-sm font-medium focus:outline-none"
                        >
                            Previous
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading box-border flex h-9 w-9 items-center justify-center border text-sm font-medium focus:outline-none"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading box-border flex h-9 w-9 items-center justify-center border text-sm font-medium focus:outline-none"
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            aria-current="page"
                            className="text-fg-brand bg-brand-softer border-default-medium hover:bg-brand-soft hover:text-fg-brand box-border flex h-9 w-9 items-center justify-center border text-sm font-medium focus:outline-none"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading box-border flex h-9 w-9 items-center justify-center border text-sm font-medium focus:outline-none"
                        >
                            ...
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading box-border flex h-9 w-9 items-center justify-center border text-sm font-medium focus:outline-none"
                        >
                            5
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading rounded-e-base box-border flex h-9 items-center justify-center border px-3 text-sm font-medium focus:outline-none"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardTable;
