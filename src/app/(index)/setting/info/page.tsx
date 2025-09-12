"use client";

import { getSetting } from "@/service/setting/setting-service";
import { Setting } from "@/service/types/ApiResponse";
import { get, set } from "lodash";
import { useEffect, useState } from "react";

export default function SettingPage() {
  const [data, setData] = useState<Setting | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    getSetting()
    .then((res) => {
      console.log("Setting data:", res);
      setData(res.result);
    })
  }, []);

  const handleCopy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!data) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-6">Setting</h1>

      {/* Connect URL */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-600 text-sm">Connect URL</p>
          <p className="font-mono">{data?.connectUrl || ""}</p>
        </div>
        <button
          onClick={() => handleCopy(data.connectUrl, "connect_url")}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {copied === "connect_url" ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Order Sheet ID */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">Order Sheet</p>
          <p className="font-mono">{`https://docs.google.com/spreadsheets/d/${data.orderSheetId}`}</p>
        </div>
        <button
          onClick={() => handleCopy(`https://docs.google.com/spreadsheets/d/${data.orderSheetId}`, "order_sheet_id")}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {copied === "order_sheet_id" ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
