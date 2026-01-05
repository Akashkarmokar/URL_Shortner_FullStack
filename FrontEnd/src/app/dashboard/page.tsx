"use client";

import react from "react";
import DashboardTable from "@/component/DashboardTable";
import toast from "react-hot-toast";

const Dashboard = () => {
    return (
        <>
            <div className="w-full">
                <div className="flex flex-row items-center justify-end gap-x-6 pr-5 pb-5">
                    <input
                        type="text"
                        name="link"
                        id="link"
                        className="rounded-md border border-amber-500 px-4 py-2 focus:ring-2 focus:ring-amber-300 focus:outline-none"
                    />
                    <button
                        className="cursor-pointer rounded-md bg-amber-500 px-4 py-2 text-white"
                        onClick={() => {
                            const id = toast.loading("Shortening URL...");
                            setTimeout(() => {
                                toast.success("URL Shortened!", {
                                    id,
                                });
                            }, 2000);
                        }}
                    >
                        Shorten
                    </button>
                </div>
                <DashboardTable />
            </div>
        </>
    );
};

export default Dashboard;
