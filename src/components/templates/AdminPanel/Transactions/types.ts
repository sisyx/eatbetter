type TransactionType = {
    id: number,
    userId: number,
    amount: number,
    authority: string,
    status: string,
    packageId: number,
    refID: string,
    cardPan: string,
    createdAt: string,
    updatedAt: string,
}

export type { TransactionType }