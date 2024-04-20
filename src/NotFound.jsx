import { Card, Flex, Heading, Button, CardHeader } from "@chakra-ui/react";
import React from "react";


export default function NotFound() {
    const handleRefresh = () => {
        window.location.replace("/");
      };
    return (
        <Flex align="center" justify="center" flexDir={"column"} gap="1rem" bg="red.100" height={"100vh"}>
            <Card padding={"4rem"} dropShadow={"lg"} shadow={"xl"}>
                <CardHeader>
                <Heading size={"2xl"}>404 - Page Not Found</Heading>
                </CardHeader>
            
            <Button onClick={handleRefresh} colorScheme="teal" marginTop={"2rem"} bottom={"2px"} alignSelf={"center"}>Go Back to Home Page</Button>
            </Card>
           
        </Flex>
    );
}