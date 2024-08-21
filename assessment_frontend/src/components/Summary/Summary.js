import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Summary.css";

const Summary = ({ answers, onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const data = { userName: name, answers };

    try {
      await axios.post("http://localhost:5000/api/submit-poll", data);
      toast.success(
        `Thank you ${name}, your response has been submitted successfully!`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      setTimeout(() => {
        onSubmit();
      }, 5000);
    } catch (error) {
      console.error("Error submitting poll:", error);
      toast.error("Something went wrong, please try again.", {
        position: "top-right",
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Box className="summary-container">
      <Card className="reveal-card">
        <CardContent>
          <Typography variant="h4" sx={{ marginBottom: 3 }}>
            Summary
          </Typography>
          {Object.entries(answers).map(([question, answer], index) => (
            <Typography key={index} variant="h6" sx={{ marginBottom: 1 }}>
              <strong>{question}:</strong> {answer}
            </Typography>
          ))}
          <TextField
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            sx={{ marginY: 3 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ width: "100%", padding: 1.5, fontSize: "1rem" }}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
      <ToastContainer />
    </Box>
  );
};

export default Summary;
