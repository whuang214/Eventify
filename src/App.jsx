import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Link,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import axios from "axios";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    let data = inputValue.replace(/\n/g, "\\n");
    console.log(data);
    try {
      const response = await axios.post(
        `${API_URL}/createEvent`,
        { InputText: data },
        { responseType: "arraybuffer" }
      );

      const blob = new Blob([response.data], { type: "text/calendar" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "event.ics";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setSnackbarMessage("Download complete!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error downloading the file", error);
      setSnackbarMessage("Download failed. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : "Create Event"}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default App;
