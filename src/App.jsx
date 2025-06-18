import { useState } from "react";
import "./App.css";
import appsMap from "./AppsMap";
import { Box, Flex, VStack, Button, Heading } from "@chakra-ui/react";

export default function App() {
  const [selectedApp, setSelectedApp] = useState(Object.keys(appsMap)[0]);

  return (
    <Flex minH="100vh">
      <Box w="200px" bg="teal.600" color="white" p={4}>
        <Heading size="md" mb={4}>
          React Lab
        </Heading>
        <VStack align="stretch" spacing={2}>
          {Object.keys(appsMap).map((appName) => (
            <Button
              key={appName}
              onClick={() => setSelectedApp(appName)}
              variant="ghost"
              colorScheme="teal"
              justifyContent="flex-start"
            >
              {appName}
            </Button>
          ))}
        </VStack>
      </Box>

      <Box flex="1" p={8}>
        <Heading size="lg" mb={4}>
          {selectedApp} App
        </Heading>
        {appsMap[selectedApp]}
      </Box>
    </Flex>
  );
}
