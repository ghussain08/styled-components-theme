import React from "react";
import SiteContainer from "./elements/site-container";
import ThemeProvider from "./themes/theme-provider";
import Header from "./components/header";
import Button from "./elements/button";
import Box from "./elements/box";
function App() {
  return (
    <ThemeProvider>
      <SiteContainer>
        <h4>Click on theme switcher to change button themes</h4>
        <Header />
        <Box
          style={{
            display: "flex",
            padding: "4rem",
            justifyContent: "space-between",
            maxWidth: "500px",
            margin: "3rem auto",
            backgroundColor: "#f6f6f6",
          }}
        >
          <Button variant="primary">Primary button</Button>
          <Button variant="secondary">Secondary button</Button>
        </Box>
      </SiteContainer>
    </ThemeProvider>
  );
}

export default App;
