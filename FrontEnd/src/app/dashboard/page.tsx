"use client";

import React, { useEffect } from "react";
import DashboardTable from "@/component/DashboardTable";
import toast from "react-hot-toast";
import { apiFetch } from "../../_lib/helper";

type UrlData = {
    id: number;
    originalURL: string;
    shortURL: string;
    userId: number;
    countVisits: number;
    createdAt: string;
    updatedAt: string;
};

const Dashboard = () => {
    const [url, setUrl] = React.useState("");
    const [urlData, setUrlData] = React.useState<UrlData[]>([]);

    useEffect(() => {
        const fetchUrls = async () => {
            const res = await apiFetch("/api/urls/all");
            const data = await res.json();
            if (res.status == 200) {
                setUrlData(data.urls);
            }
        };
        fetchUrls();
    }, []);

    const ShortenerCreateHandler = async () => {
        if (!url) return;

        const res = await apiFetch("/api/urls/url-create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ originalURL: url }),
        });

        const data = await res.json();
        const id = toast.loading("Shortening URL...");
        if (res.status === 201) {
            setUrl("");
            setUrlData((prev) => [data.url, ...prev]);

            setTimeout(() => {
                toast.success("URL Shortened!", {
                    id,
                });
            }, 500);
        } else {
            setTimeout(() => {
                toast.error("Failed to shorten URL", {
                    id,
                });
                ShortenerCreateHandler();
            }, 500);
        }
    };

    const handleDelete = async (id: number) => {
        const res = await apiFetch(`/api/urls/delete/${id}`, {
            method: "DELETE",
        });

        if (res.status === 200) {
            setUrlData((prev) => prev.filter((url) => url.id !== id));
        }
    };
    return (
        <>
            <div className="w-full">
                <div className="flex flex-row items-center justify-end gap-x-6 pr-5 pb-5">
                    <input
                        type="text"
                        name="link"
                        id="link"
                        className="rounded-md border border-amber-500 bg-white px-4 py-2 focus:ring-2 focus:ring-amber-300 focus:outline-none"
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                        placeholder="Place your url here"
                    />
                    <button
                        className="cursor-pointer rounded-md bg-amber-500 px-4 py-2 text-white"
                        onClick={ShortenerCreateHandler}
                    >
                        Shorten
                    </button>
                </div>
                <DashboardTable urlData={urlData} onDelete={handleDelete} />
            </div>
        </>
    );
};

export default Dashboard;
