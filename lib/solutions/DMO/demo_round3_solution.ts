import InventoryItem from './inventory_item.ts';

export default class DemoRound3Solution {
    /**
     * Adds items to inventory
     * @param item - The inventory item to add
     * @param number - Number of items to add
     * @throws {Error} If the method is not implemented
     */
    inventory_add(item: InventoryItem, number: number): void {
        throw new Error("method not implemented");
    }

    /**
     * Gets the size of the inventory
     * @returns The number of items in inventory
     * @throws {Error} If the method is not implemented
     */
    inventory_size(): number {
        throw new Error("method not implemented");
    }

    /**
     * Gets an item from inventory by index
     * @param index - The index of the item to get
     * @returns The inventory item at the specified index
     * @throws {Error} If the method is not implemented
     */
    inventory_get(index: number): InventoryItem {
        throw new Error("method not implemented");
    }
} 