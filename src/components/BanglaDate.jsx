
"use client";

import { useEffect, useState } from "react";

export default function BanglaDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      setDate(
        new Date().toLocaleDateString("bn-BD", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "Asia/Dhaka",
        })
      );
    };

    updateDate();

    const interval = setInterval(updateDate, 60_000);

    return () => clearInterval(interval);
  }, []);

  if (!date) return null;

  return (
    <p className="text-xs font-medium sm:text-sm">
      {date}
    </p>
  );
}