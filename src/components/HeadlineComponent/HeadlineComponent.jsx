import style from "./Headline.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function HeadlineComponent() {
  return (
    <>
      <Box
        component="section"
        sx={{
          textAlign: "center",
          p: 1,
          color: "#fff",
          fontSize: "14px",
          bgcolor: "#2AA7FF",
        }}
      >
        <Container maxWidth="lg">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Container>
      </Box>
    </>
  );
}

export default HeadlineComponent;
