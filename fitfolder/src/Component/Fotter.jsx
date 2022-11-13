import { Box, Divider, Flex, Image, Popover, Text } from "@chakra-ui/react";

export default function Fotter()
{
    return (
        < Box bg="black"  height="500px" pl="80px" pr="80px">
        <Flex>
            <Box w="40%">
            
            <Image  height="80px" marginLeft="-180px" marginTop="35px" src="https://imgs.search.brave.com/8P0iR_trXwPK2PfuRglXkoNE0QhU7Mos9YwbXCZtNZ4/rs:fit:1185:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/MG94emRnUl9aVTdm/bENyU0FTZmtRQUFB/QSZwaWQ9QXBp" alt=""/></Box>
            <Box ml="50px" mt="30px">
                <Text color="white" fontWeight="bold" mt="20px">WORKOUTS</Text>
                <Text color="white"  mt="20px">WORKOUT VIDEOS</Text>
                <Text color="white"  mt="20px">CUSTOM WORKOUTS</Text>
                <Text fontWeight="bold" color="white"  mt="20px">PROGRAMS</Text>
                <Text color="white"  mt="20px">WORKOUT PROGRAMS</Text>
                <Text color="white"  mt="20px">MEAL PLANS</Text>
                <Text color="white"  mt="20px">PILOT PROGRAMS</Text>
                <Text color="white"  mt="20px">ROUTINES</Text>
            </Box>
            <Box ml="50px" mt="30px">
            <Text color="white" fontWeight="bold" mt="20px">HEALTHY LIVINGS</Text>
                <Text color="white"  mt="20px">FITNESS</Text>
                <Text color="white"  mt="20px">HEALTH </Text>
                
                <Text color="white"  mt="20px">NUTRITION</Text>
                <Text color="white"  mt="20px">HEALTHY RECIPIES</Text>
                <Text color="white"  mt="20px">EXPERTS</Text>
                
            </Box>
            <Box ml="50px" mt="30px">
            <Text color="white" fontWeight="bold" mt="20px">ABOUT</Text>
                <Text color="white"  mt="20px">CAREERS</Text>
                
                <Text color="white"  mt="20px">TUTORIALS</Text>
                <Text color="white"  mt="20px">OUR TEAMS</Text>
                <Text color="white"  mt="20px">B2B OPTIONS</Text>
            </Box>
            <Box ml="50px" mt="30px"><Text color="white" fontWeight="bold" mt="20px">MEMBERSHIPS</Text>
            <Text color="white" fontWeight="bold" mt="20px">BLOG</Text>
            <Text color="white" fontWeight="bold" mt="20px">COMMUNITY</Text>
            <Text color="white" fontWeight="bold" mt="20px">FB PLUS</Text>
            <Text color="white" fontWeight="bold" mt="20px">CONTACT</Text>
            <Text color="white" fontWeight="bold" mt="20px">FAQ</Text>
            <Text color="white" fontWeight="bold" mt="20px">STORE</Text></Box>
        </Flex>
        <Divider mt="20px" orientation='horizontal' />
        <Text color="white">Copyright © 2022 Fitness Blender. All rights reserved. Terms of Use Privacy Policy</Text>
        </Box >
    )
}