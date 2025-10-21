"use client";

import PersonDetail from "@/components/functional/person/PersonDetail";

import useUI from "@/store/hooks/useUI"

import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function PersonPage() {
  const params = useParams();
  const { id } = params;
  const { setTitle } = useUI();

  useEffect(() => {
    setTitle("Detail of Person ");
  }, []);

  if (!id) {
    return <div>No ID provided</div>;
  }

  return <PersonDetail id={Array.isArray(id) ? id[0] : id} />;
}