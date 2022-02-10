import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import { FeedBackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedBackProvider>
      <div className="container">
        <Header />
        <FeedbackForm />
        <FeedbackList />
      </div>
    </FeedBackProvider>
  );
};

export default App;
