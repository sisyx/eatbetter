type WithdrawalType = {
    id: number,
    userId: number,
    user: any,
    amount: number,
    status: "Processing" | "Pending" | "Completed",
    requestedAt: string | null,
    approvedAt: string | null,
    adminNote: any
}

export type { WithdrawalType }