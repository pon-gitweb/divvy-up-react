import React from "react";
import { Text, HStack } from "@chakra-ui/react";

type Props = {
    order: {
        itemName: string;
        itemCost: number;
        itemQuantity: number;
    };
};

export default function OrderItem({ order }: Props) {
    return (
        <HStack>
            <Text>{order.itemQuantity}x</Text>
            <Text>{order.itemName}</Text>
            <Text>${order.itemCost.toFixed(2)}</Text>
        </HStack>
    );
}
