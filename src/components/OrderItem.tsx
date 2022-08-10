import React from "react";
import { Text, HStack } from "@chakra-ui/react";

type Props = {
    order: {
        name: string;
        cost: number;
        quantity: number;
    };
};

export default function OrderItem({ order }: Props) {
    return (
        <HStack>
            <Text>{order.quantity}x</Text>
            <Text>{order.name}</Text>
            <Text>${order.cost.toFixed(2)}</Text>
        </HStack>
    );
}
