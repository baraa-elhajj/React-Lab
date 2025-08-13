import { useRef, useState } from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { Edit, Trash } from "lucide-react";
import Header from "../components/ui/custom/Header";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const nameRef = useRef(null);

  const handleAddContact = () => {
    if (!name.trim() || !phone.trim()) {
      alert("You must provide both name and phone number!");
      return;
    }
    if (editingIndex !== null) {
      const updated = [...contacts];
      updated[editingIndex] = { name, phone };
      setContacts(updated);
      setEditingIndex(null);
    } else {
      setContacts([...contacts, { name, phone }]);
    }
    setName("");
    setPhone("");
  };

  const handleEdit = (index) => {
    setName(contacts[index].name);
    setPhone(contacts[index].phone);
    setEditingIndex(index);
    nameRef.current.focus();
  };

  const handleDelete = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <>
      <Box maxW="500px" mx="auto" mt={10} p={5} borderWidth="1px" rounded="lg">
        <Heading mb={4}>Contacts</Heading>
        <VStack spacing={3}>
          <Input
            placeholder="Full Name"
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button colorPalette="blue" onClick={handleAddContact} w="100%">
            {editingIndex !== null ? "Save" : "Add Contact"}
          </Button>
        </VStack>

        <VStack spacing={3} mt={6} align="stretch">
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
                  colorPalette="blue"
                  size="sm"
                  variant="ghost"
                  onClick={() => handleEdit(index)}
                >
                  <Edit />
                </Button>
                <Button
                  colorPalette="red"
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDelete(index)}
                >
                  <Trash />
                </Button>
              </HStack>
            </HStack>
          ))}
        </VStack>
      </Box>
    </>
  );
}
