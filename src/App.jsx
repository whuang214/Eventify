import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import axios from "axios";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    // Send a POST request to the backend
    console.log(`Sending POST request with data: ${inputValue}`);
  };

  return (
    <Container maxWidth="md" className="container-margin">
      <Paper elevation={3} className="paper-custom">
        <Box textAlign="center" p={3}>
          <Typography variant="h3" component="h1" gutterBottom>
            Eventify
            <CalendarToday fontSize="large" style={{ marginLeft: "10px" }} />
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Create calendar events using natural language
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={3} className="paper-custom middle-paper">
        <Box
          p={3}
          flexGrow={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <TextField
            label="Paste event details"
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
          <Box textAlign="center" mt={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Create Event
            </Button>
          </Box>
        </Box>
      </Paper>
      <Paper elevation={3} className="paper-custom">
        <Box textAlign="center" p={3}>
          <Typography variant="h5" component="h3" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" gutterBottom>
            Created by{" "}
            <Link
              href="https://github.com/whuang214"
              target="_blank"
              rel="noopener noreferrer"
            >
              whuang214
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default App;
