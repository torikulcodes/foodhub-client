import { Loader2 } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div>
      {" "}
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
