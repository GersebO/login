
"use client";

import PersonList from "@/components/functional/person/PersonList";

import {useUI,useUser} from "@/store/hooks";

import { useEffect } from "react";

export default function PersonPage() {
  const { setTitle } = useUI();
  const { userGetAll } = useUser();
  useEffect(() => {
    setTitle("Person Management");
    userGetAll();
  }, [setTitle]);


  return <PersonList />;
}