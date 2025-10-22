
"use client";

import PersonList from "@/components/functional/person/PersonList";

import { useUI, useUser } from "@/store/hooks";

import { useEffect } from "react";

export default function PersonPage() {
  const { setTitle } = useUI();
  const { userGetByCustomerId, user } = useUser();

  useEffect(() => {
    setTitle("Person Management");
    // Si ya hay un usuario en el store, solicitar las personas asociadas
    if (user?.id) {
      userGetByCustomerId(String(user.id));
    }
  }, [setTitle, user?.id, userGetByCustomerId]);

  return <PersonList />;
}