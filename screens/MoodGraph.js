import React, { useState } from "react";
import styled from "@emotion/styled";
import Menu from "./components/Menu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #5c5c5c;
  margin-bottom: 2rem;
`;

const MoodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-bottom: 3rem;
`;

const MoodButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? "#5c5c5c" : "transparent")};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  outline: none;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#ccc")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  border-radius: 25px;
`;

const moods = ["Happy", "Sad", "Angry", "Relaxed", "Anxious"];

const DatePickerContainer = styled.div`
  margin-bottom: 3rem;
`;

const DatePicker = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const MoodGraph = () =>{
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Container>
      <Title>Select your mood</Title>
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
      <DatePickerContainer>
        <DatePicker type="date" value={selectedDate} onChange={handleDateChange} />
      </DatePickerContainer>
      <Container>
        <Menu />
      </Container>
    </Container>
  );
}

export default MoodGraph;
