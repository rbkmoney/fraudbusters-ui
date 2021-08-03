export interface SearchHistoricalParams {
    continuationId?: string;
    size?: number;
    sortBy?: string;
    sortOrder: string;
    from?: string;
    to?: string;
    paymentId?: string;
    cardToken?: string;
    shopId?: string;
    partyId?: string;
    status?: string;
    fingerprint?: string;
    email?: string;
    terminal?: string;
    maskedPan?: string;
}
