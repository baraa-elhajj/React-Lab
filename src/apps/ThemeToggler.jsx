import { createContext, useContext, useState } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Header from "../components/ui/custom/Header";
import { Moon, Sun } from "lucide-react";

// 1. Create Theme Context
const ThemeContext = createContext();

// 2. Use custom useContext() hook
const useThemeContext = () => useContext(ThemeContext);

function Content() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Box p={4}>
      <Heading mb="4" size="md" display="flex" alignItems="center" gap={2}>
        Try switching the theme
        {theme === "light" ? (
          <Moon onClick={toggleTheme} size="20" />
        ) : (
          <Sun onClick={toggleTheme} size="20" />
        )}
      </Heading>

      <Box
        p="3"
        border="1px solid"
        borderColor="black"
        borderRadius="md"
        bg={theme === "light" ? "white" : "black"}
        color={theme === "light" ? "black" : "white"}
        transition="background 0.3s"
        maxW="xl"
      >
        <Text textStyle="sm">
          This is a React app with a custom theme context and Chakra UI
          components.
        </Text>
        <Text textStyle="sm">Current Theme: {theme}</Text>
      </Box>
    </Box>
  );
}

function ThemedButton() {
  const { theme } = useThemeContext();

  return (
    <Button
      ml="4"
      size="xs"
      onClick={() => alert("Hello!")}
      colorPalette={theme === "light" ? "blue" : "black"}
    >
      Say Hello!
    </Button>
  );
}

export default function ThemeToggler() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <>
      <Header
        description="A simple light/dark mode theme toggler demonstrating the use 
      of useContext() hook."
        badgesIds={[5, 6]}
      />
      {/* 3. Provide Theme Context for children*/}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Content />
        <ThemedButton />
      </ThemeContext.Provider>
    </>
  );
}
