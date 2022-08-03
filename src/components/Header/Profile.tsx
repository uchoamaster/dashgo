import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Carlos Uchôa</Text>
          <Text color="gray.300" fontSize="small">
            carlosjuchoa@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Carlos Uchôa"
        src="https://github.com/uchoamaster.png"
      />
    </Flex>
  );
}
