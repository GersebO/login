// /app/person/[id]/page.tsx
"use client";

import PersonDetail from "@/components/functional/person/PersonDetail";

export default function PersonDetailPage() {
  return (
    <div className="p-6">
      <PersonDetail />
    </div>
  );
}
