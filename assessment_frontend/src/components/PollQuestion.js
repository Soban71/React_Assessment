import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import "./PollQuestion.css";

const PollQuestion = ({
  question,
  options,
  currentQuestion,
  totalQuestions,
  onAnswer,
}) => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Panel with Progress Indicator and Question */}
      <Grid
        item
        xs={6}
        sx={{
          backgroundColor: "#6200ea",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
          }}
        >
          {Array.from({ length: totalQuestions }).map((_, index) => (
            <div
              key={index}
              className={`circle ${index <= currentQuestion ? "filled" : ""}`}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor:
                  index <= currentQuestion
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                margin: "10px 0",
              }}
            />
          ))}
        </Box>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          {question}
        </Typography>
      </Grid>

      {/* Right Panel with Answer Options */}
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {options.map((option, index) => (
            <Button
              key={index}
              onClick={() => onAnswer(option.value)}
              sx={{ color: "grey", margin: "0 20px", textAlign: "center" }}
            >
              <Box>
                {option.icon}
                <Typography className="label" sx={{ marginTop: "8px" }}>
                  {option.label}
                </Typography>
              </Box>
            </Button>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default PollQuestion;
