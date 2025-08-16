import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  Button,
  Text,
  Flex,
  CloseButton,
  Portal,
  Dialog,
} from "@chakra-ui/react";
import { Edit, Trash } from "lucide-react";
import Header from "../components/ui/custom/Header";

export default function App() {
  // Load contacts from localStorage
  const [contacts, setContacts] = useState(() => {
    const contactsList = localStorage.getItem("contacts");
    return contactsList ? JSON.parse(contactsList) : [];
  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPhone, setEditPhone] = useState("");

  // Update localStorage
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = () => {
    if (!name.trim() || !phone.trim()) {
      alert("You must provide both name and phone number!");
      return;
    }
    setContacts([...contacts, { name, phone }]);
    setName("");
    setPhone("");
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditName(contacts[index].name);
    setEditPhone(contacts[index].phone);
  };

  const handleSaveEdit = () => {
    if (!name.trim() || !phone.trim()) {
      alert("You must provide both name and phone number!");
      return;
    }

    const updated = [...contacts];
    updated[editingIndex] = { name: editName, phone: editPhone };

    setContacts(updated);
    setEditingIndex(null);
    setEditName("");
    setEditPhone("");
  };

  const handleDelete = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header
        description="A simple contacts app using state and effect hooks."
        badgesIds={[5, 2, 9]}
      />
      <Flex
        maxW="550px"
        mt={2}
        p={5}
        borderWidth="1px"
        rounded="lg"
        direction="column"
      >
        <Box flex="1">
          <Heading mb={4}>Contacts</Heading>
          {/* Add Contact */}
          <VStack spacing="3" mb="6">
            <Input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button colorScheme="blue" onClick={handleAddContact} w="100%">
              Add Contact
            </Button>
          </VStack>

          {/* Contact List */}
          <VStack spacing="3" align="stretch">
            {contacts.map((contact, index) => (
              <HStack
                key={index}
                p="3"
                borderWidth="1px"
                rounded="md"
                justify="space-between"
              >
                <Box>
                  <Text fontWeight="bold">{contact.name}</Text>
                  <Text fontSize="sm" color="gray.600">
                    {contact.phone}
                  </Text>
                </Box>
                <HStack>
                  <Dialog.Root open={editingIndex === index}>
                    <Dialog.Trigger asChild>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEditClick(index)}
                      >
                        <Edit size="18" />
                      </Button>
                    </Dialog.Trigger>

                    {/* Edit Contact */}
                    <Portal>
                      <Dialog.Backdrop />
                      <Dialog.Positioner>
                        <Dialog.Content>
                          <Dialog.Header>
                            <Dialog.Title>Edit Contact</Dialog.Title>
                            <Dialog.CloseTrigger asChild>
                              <CloseButton
                                size="sm"
                                onClick={() => setEditingIndex(null)}
                              />
                            </Dialog.CloseTrigger>
                          </Dialog.Header>
                          <Dialog.Body>
                            <VStack spacing="3" align="stretch">
                              <Text fontSize="sm">Full Name</Text>
                              <Input
                                placeholder="Full Name"
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                mb="2"
                              />
                              <Text fontSize="sm">Phone Number</Text>
                              <Input
                                placeholder="Phone Number"
                                value={editPhone}
                                onChange={(e) => setEditPhone(e.target.value)}
                              />
                            </VStack>
                          </Dialog.Body>
                          <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                              <Button onClick={() => setEditingIndex(null)}>
                                Cancel
                              </Button>
                            </Dialog.ActionTrigger>
                            <Button colorScheme="blue" onClick={handleSaveEdit}>
                              Save
                            </Button>
                          </Dialog.Footer>
                        </Dialog.Content>
                      </Dialog.Positioner>
                    </Portal>
                  </Dialog.Root>

                  <Button
                    colorScheme="red"
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(index)}
                  >
                    <Trash size="18" />
                  </Button>
                </HStack>
              </HStack>
            ))}
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
