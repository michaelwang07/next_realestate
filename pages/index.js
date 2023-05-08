import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button, Divider } from '@chakra-ui/react';

const Banner = ({purpose, title1, title2, desc1, desc2, linkName, linkName2, buttonText, imageURL}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageURL} width={500} height={300} alt="banner" />
    <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1} <br /> {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBotton="3" paddingBottom="3" color="gray.700">
          {desc1} <br /> {desc2}
        </Text>
        <Button fontsize="xl" bg="blue.300" color="white">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
    </Box>
  </Flex>
)

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Banner purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Appartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="test"
        linkName2="/search?purpose=for-rent"
        imageURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner purpose="BUY A HOME"
        title1="Find, Buy  & Own Your"
        title2="Dream Home"
        desc1="Explore Appartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="test"
        linkName2="/search?purpose=for-sale"
        imageURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />

      <Banner purpose={'For Rent'}/>
    </div>
  )
}
