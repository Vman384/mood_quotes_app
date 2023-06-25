import React, { useState } from "react";
import styled from "@emotion/styled";
import Menu from "./components/Menu";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const MoodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const MoodButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  outline: none;
  color: ${({ isActive }) => (isActive ? "#5c5c5c" : "#ccc")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;

const moods = ["Happy", "Sad", "Angry", "Relaxed", "Anxious"];
const MoodInput = () =>{
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <Container>
      <MoodContainer>
        {moods.map((mood) => (
          <MoodButton
            key={mood}
            onClick={() => handleMoodClick(mood)}
            isActive={selectedMood === mood}
          >
            {mood}
          </MoodButton>
        ))}
      </MoodContainer>
      {/* <Container>
        <Menu />
        </Container> */}
    </Container>
  );

}
export default MoodInput;
