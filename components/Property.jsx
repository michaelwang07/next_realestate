import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Test, Avatar} from '@chakra-ui/react';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID} }) => (
  <Link href={`/property/${externalID}`} passHref>
    <p>Testing</p>
    {title}
  </Link>
)

export default Property;