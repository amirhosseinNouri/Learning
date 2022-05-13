import {
  VStack,
  Heading,
  Text,
  Button,
  AspectRatio,
  HStack,
  Image,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

function Cart() {
  const { toggleColorMode } = useColorMode();

  const backgroundColor = useColorModeValue('gray.50', 'whiteAlpha.50');

  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

  const handleToggleThemeClick = () => {
    toggleColorMode();
  };
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={backgroundColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If the price is too hard on your eyes,{' '}
          <Button
            variant="link"
            colorScheme="black"
            onClick={handleToggleThemeClick}
          >
            try changing the theme.
          </Button>
        </Text>
      </VStack>

      <HStack w="full" spacing={6}>
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/skateboard.jpg" alt="skateboard" />
        </AspectRatio>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          w="full"
          spacing={0}
        >
          <VStack w="full" alignItems="flex-start">
            <Heading size="md">Penny Board</Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>

      <VStack w="full" spacing={4} alignItems="stretch">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>

        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>

        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.00</Heading>
        </HStack>
      </VStack>

      <Divider />

      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$162.00</Heading>
      </HStack>
    </VStack>
  );
}

export default Cart;
