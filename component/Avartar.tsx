"use client";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

export default function CustomAvatar() {
  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    const savedInput = localStorage.getItem("username");
    if (savedInput) setSavedName(savedInput);
  }, []);

 
  const getAvatarLetters = (name: string) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    if (parts.length === 1) {
      return parts[0].substring(0, 2).toUpperCase(); 
    } else {
      return (parts[0][0] + parts[1][0]).toUpperCase(); 
    }
  };

  const initials = getAvatarLetters(savedName);

  return <Avatar sx={{ bgcolor:"white", color:"rgba(158, 20, 20, 1)"}}>{initials}</Avatar>;
}
