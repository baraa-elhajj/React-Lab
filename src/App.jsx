import { useState } from "react";
import "./App.css";
import appsMap from "./AppsMap";
import { Box, Flex, VStack, Button, Heading } from "@chakra-ui/react";

export default function App() {
  const [selectedApp, setSelectedApp] = useState(Object.keys(appsMap)[0]);

  return (
    <Flex minH="100vh">
      <Box w="200px" bg="teal.600" color="white" p={4} overflowY="auto">
        <Heading size="md" mb={4}>
          React Lab
        </Heading>
        {/* TODO: move to a list and fix overflow. */}
        <VStack align="stretch" spacing={2}>
          {Object.keys(appsMap).map((appName, index) => (
            <Button
              key={index}
              onClick={() => setSelectedApp(appName)}
              justifyContent="flex-start"
              variant="surface"
              border="2px solid transparent"
              borderColor={selectedApp === appName ? "teal.700" : ""}
            >
              {appName}
            </Button>
          ))}
        </VStack>
      </Box>

      <Box flex="1" p={8} overflow="hidden">
        <Heading size="xl" mb={4}>
          {selectedApp} App
        </Heading>
        {appsMap[selectedApp]}
      </Box>
    </Flex>
  );
}
