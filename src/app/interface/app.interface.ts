export interface Budget {
    budgetName: string ;
    clientName: string;
    webPageService: {
        active: boolean;
        numPages: number;
        numLanguage: number;
        total: number;
    };
    seoService: boolean;
    googleAdsService: boolean
    totalPrice: number
}
