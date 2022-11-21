import mainimg from '../../images/home.png';
import { Image, Box, Center, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Center>
        <Box boxSize="700px">
          <Center>
            <Text fontSize="35px">Welcome to PhoneBook!</Text>
          </Center>
          <Image src={mainimg} alt="contact list promo" />
        </Box>
      </Center>
    </>
  );
};
export default Home;
