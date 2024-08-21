import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

export const questions = [
  {
    question: "How was your week overall?",
    options: [
      {
        icon: <ThumbUpIcon fontSize="large" />,
        label: "Good",
        value: "good",
      },
      {
        icon: <SentimentNeutralIcon fontSize="large" />,
        label: "Neutral",
        value: "neutral",
      },
      {
        icon: <ThumbDownIcon fontSize="large" />,
        label: "Bad",
        value: "bad",
      },
    ],
  },
  {
    question: "Would you recommend us?",
    options: [
      { icon: <ThumbUpIcon fontSize="large" />, label: "Yes", value: "yes" },
      { icon: <ThumbDownIcon fontSize="large" />, label: "No", value: "no" },
    ],
  },
  {
    question: "How satisfied are you with our service?",
    options: [
      {
        icon: <ThumbUpIcon fontSize="large" />,
        label: "Very Satisfied",
        value: "very_satisfied",
      },
      {
        icon: <SentimentNeutralIcon fontSize="large" />,
        label: "Satisfied",
        value: "satisfied",
      },
      {
        icon: <ThumbDownIcon fontSize="large" />,
        label: "Unsatisfied",
        value: "unsatisfied",
      },
    ],
  },
  {
    question: "How likely are you to use our service again?",
    options: [
      {
        icon: <ThumbUpIcon fontSize="large" />,
        label: "Very Likely",
        value: "very_likely",
      },
      {
        icon: <SentimentNeutralIcon fontSize="large" />,
        label: "Maybe",
        value: "maybe",
      },
      {
        icon: <ThumbDownIcon fontSize="large" />,
        label: "Not Likely",
        value: "not_likely",
      },
    ],
  },
  {
    question: "How would you rate the quality of our customer support?",
    options: [
      {
        icon: <ThumbUpIcon fontSize="large" />,
        label: "Excellent",
        value: "excellent",
      },
      {
        icon: <SentimentNeutralIcon fontSize="large" />,
        label: "Good",
        value: "good",
      },
      {
        icon: <ThumbDownIcon fontSize="large" />,
        label: "Poor",
        value: "poor",
      },
    ],
  },
  {
    question: "Would you consider recommending our service to others?",
    options: [
      {
        icon: <ThumbUpIcon fontSize="large" />,
        label: "Definitely",
        value: "definitely",
      },
      {
        icon: <SentimentNeutralIcon fontSize="large" />,
        label: "Maybe",
        value: "maybe",
      },
      { icon: <ThumbDownIcon fontSize="large" />, label: "No", value: "no" },
    ],
  },
];
