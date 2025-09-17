"use client";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Home() {
  const [savedInput, setSavedInput] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState<{ title: string; note: string }[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  function saveInput(e: any) {
    e.preventDefault();
    const updatedNotes = [...savedNotes, { title, note: notes }];
    setSavedNotes(updatedNotes);
    localStorage.setItem("savedNotes", JSON.stringify(updatedNotes));

    setTitle("");
    setNotes("");
    setShowInput(false);
  }

  function toggleNote(index: number) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  useEffect(() => {
    const name = localStorage.getItem("username");
    if (name) setSavedInput(name);
    const stored = localStorage.getItem("savedNotes");
    if (stored) setSavedNotes(JSON.parse(stored));
  }, []);

  return (
    <div className={`container ${styles.homeContainer}`}>
      <Header />
      <div className={styles.greetingsContainer}>
        <h1 className={styles.greetings}>Welcome <code className={styles.greetings2}> {savedInput} </code></h1>
      </div>

      <div className={styles.notesContainer}>
        <div className={styles.savedNotesContainer}>
          {savedNotes.map((item, i) => (
            <div key={i} className={styles.noteCard}>
              <div
                className={styles.noteTitle}
                onClick={() => toggleNote(i)}
              >
                {item.title}
              </div>
              {expandedIndex === i && (
                <div className={styles.noteBody}>{item.note}</div>
              )}
            </div>
          ))}

          <div
            className={styles.addNoteButton}
            onClick={() => setShowInput(!showInput)}
          >
            Add Note +
          </div>
        </div>

        {/* Smooth transition for input UI */}
        <div
          className={`${styles.inputWrapper} ${showInput ? styles.show : ""}`}
        >
          <Box component="form" noValidate autoComplete="off">
            <div className={styles.inputBox}>
              <TextField
                label="Title"
                multiline
                maxRows={4}
                className={styles.titleInput}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              /> <br/> <br/>
              <TextField
                label="Note"
                multiline
                rows={4}
                className={styles.titleInput}
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
              />
            </div>
            <button onClick={saveInput} className={styles.getStarted}>
              Save Note
            </button>
          </Box>
        </div>
      </div>
      <Footer />
    </div>
  );
}
