export default class InventoryItem {
    public sku: string;

    /**
     * Creates a new inventory item
     * @param sku - The SKU of the inventory item
     */
    constructor(sku: string) {
        this.sku = sku;
    }
} 