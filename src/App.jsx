import { useState } from "react";
import "./App.css";
import appsMap from "./AppsMap";
import { Box, Flex, VStack, Button, Heading } from "@chakra-ui/react";

export default function App() {
  const [selectedApp, setSelectedApp] = useState(Object.keys(appsMap)[0]);

  return (
    <Flex h="100vh">
      <Box
        h="100vh"
        w="200px"
        bg="teal.600"
        color="white"
        p={4}
        overflowY="auto"
      >
        <Heading size="md" mb="4">
          React Lab
        </Heading>
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

      <Box flex="1" overflow="auto" h="100vh" p={8}>
        <Heading size="xl" mb={4}>
          {selectedApp} App
        </Heading>
        {appsMap[selectedApp]}
      </Box>
    </Flex>
  );
}
