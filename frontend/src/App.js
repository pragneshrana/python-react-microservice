import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputText, setInputText] = useState("");
  const [lengthResult, setLengthResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLengthResult(null);

    try {
      const response = await axios.post("http://localhost:8000/length", {
        text: inputText,
      });
      setLengthResult(response.data.length);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.detail);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-500 text-center mb-6">
          Text Length Calculator
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <textarea
            className="w-full border border-gray-600 rounded-lg p-3 text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Calculate Length
            </button>
          </div>
        </form>
        {lengthResult !== null && (
          <p className="mt-4 text-center text-green-400 font-medium">
            Length: {lengthResult}
          </p>
        )}
        {error && (
          <p className="mt-4 text-center text-red-500 font-medium">
            Error: {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
