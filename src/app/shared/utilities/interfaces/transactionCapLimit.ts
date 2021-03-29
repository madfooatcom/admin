export interface TransactionCapLimit {
    code:Number,
    transactionType: string,
    appliedOn: string,
}

export interface TransactionCapLimitObj {
    code:Number,
    transactionType: string,
    appliedOnCitizen: boolean,
    appliedOnNonCitizen: boolean,
    minAmount: Number,
    maxAmount: Number,
    dailyLimit: Number,
    weeklyLimit: Number,
    monthlyLimit: Number,
}
