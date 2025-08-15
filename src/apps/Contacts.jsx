import { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Edit, Trash } from "lucide-react";
import Header from "../components/ui/custom/Header";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPhone, setEditPhone] = useState("");

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
    const updated = [...contacts];
    updated[editingIndex] = { name: editName, phone: editPhone };
    setContacts(updated);
    setEditingIndex(null);
    setEditName("");
    setEditPhone("");
  };

  const handleCancelEdit = () => {
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
        description="A simple contacts app using state and ref hooks."
        badgesIds={[5, 2, 8]}
      />
      <Flex maxW="550px" mt={2} p={5} borderWidth="1px" rounded="lg">
        {/* Contacts List */}
        <Box flex="1" pr={4}>
          <Heading mb={4}>Contacts</Heading>
          {/* Add contact form */}
          <VStack spacing={3} mb={6}>
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

          {/* Contact items */}
          <VStack spacing={3} align="stretch">
            {contacts.map((contact, index) => (
              <HStack
                key={index}
                p={3}
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
                  <Button
                    colorScheme="blue"
                    size="sm"
                    variant="ghost"
                    onClick={() => handleEditClick(index)}
                  >
                    <Edit size={18} />
                  </Button>
                  <Button
                    colorScheme="red"
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(index)}
                  >
                    <Trash size={18} />
                  </Button>
                </HStack>
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* Edit Panel */}
        {editingIndex !== null && (
          <Box
            flex="1"
            pl={4}
            borderLeftWidth="1px"
            borderColor="gray.200"
            ml={4}
          >
            <Heading mb={4}>Edit Contact</Heading>
            <VStack spacing={3}>
              <Input
                placeholder="Full Name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <Input
                placeholder="Phone Number"
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
              />
              <HStack w="100%">
                <Button w="50%" onClick={handleCancelEdit}>
                  Cancel
                </Button>
                <Button w="47%" colorScheme="blue" onClick={handleSaveEdit}>
                  Save
                </Button>
              </HStack>
            </VStack>
          </Box>
        )}
      </Flex>
    </>
  );
}
