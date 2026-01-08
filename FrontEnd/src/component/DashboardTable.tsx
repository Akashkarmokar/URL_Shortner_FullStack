"use client";
import React, { useEffect, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import toast from "react-hot-toast";

type UrlData = {
    id: number;
    originalURL: string;
    shortURL: string;
    userId: number;
    countVisits: number;
    createdAt: string;
    updatedAt: string;
};

const DashboardTable = ({
    urlData,
    onDelete,
}: {
    urlData: UrlData[];
    onDelete: (id: number) => void;
}) => {
    const [origin, setOrigin] = useState("");

    useEffect(() => {
        setOrigin(window.location.origin);
    }, []);
    return (
        <>
            {urlData.length === 0 ? (
                <p className="text-center text-white">No URLs found.</p>
            ) : (
                <div className="bg-neutral-primary-soft rounded-base border-default relative overflow-x-auto border shadow-xs">
                    <table className="text-body w-full text-left text-sm rtl:text-right">
                        <thead className="text-body bg-neutral-secondary-medium border-default-medium border-b text-sm text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Short Url
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Click Count
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {urlData.map((value, index) => (
                                <tr
                                    key={index}
                                    className="bg-neutral-primary-soft border-default hover:bg-neutral-secondary-medium border-b text-white"
                                >
                                    <td
                                        scope="row"
                                        className="text-heading px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                        {value.originalURL}
                                    </td>
                                    {/* <td className="px-6 py-4">
                                <a
                                    href={`http://localhost:3000/r/${value.shortURL}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    {`http://localhost:3000/r/${value.shortURL}`}
                                </a>
                                <FaClipboardList />
                            </td> */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <a
                                                href={`http://localhost:3000/r/${value.shortURL}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="truncate text-blue-400 hover:underline"
                                                title={value.shortURL} // optional tooltip
                                            >
                                                {`http://localhost:3000/r/${value.shortURL}`}
                                            </a>
                                            <FaClipboardList
                                                className="text-white-500 cursor-pointer hover:text-gray-700"
                                                onClick={() => {
                                                    navigator.clipboard.writeText(
                                                        `http://localhost:3000/r/${value.shortURL}`
                                                    );
                                                    toast.success(
                                                        "Copied to clipboard!"
                                                    );
                                                }}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {value.countVisits}
                                    </td>
                                    <td className="px-6 py-4">
                                        {value.createdAt}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => onDelete(value.id)}
                                            className="text-fg-brand font-medium text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default DashboardTable;
