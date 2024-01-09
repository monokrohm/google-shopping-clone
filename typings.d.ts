export type SearchParams = {
    pages?: string;
    sortBy: string;
    minPrice?: string;
    maxPrice?: string;
}

export type PageResults= {
    content: Content;
    created_at: string;
    updated_at: string;
    page: number;
    url: string;
    job_id: string;
    status_code: number;
    parser_type: string;
}

export type Content = {
    url: string;
    page: number;
    results: Results;
    last_visible_page: number;
    parse_status_code: number;
}

export type Results = {
    paid: any[];
    filters: Filter[];
    organic: Organic[];
    search_information: {
        query: string;
        showing_results_for: string;
    }
}

export type Filter = {
    name: string;
    values: Value[];
}

export type Value = {
    url: string;
    value: string;
}

export type Organic = {
    pos: number;
    url: string;
    type: string;
    price: number;
    title: string;
    currency: string;
    merchant: {
        url: string;
        name: string;
    };
    price_str: string;
    product_id: string;
    pos_overall: number;
}

export type ProductData = {
    content: ProductContent;
    created_at: string;
    updated_at: string;
    page: number;
    url: string;
    job_id: string;
    status_code: number;
    parser_type: string;
}

export type ProductContent = {
    url: string;
    title: string;
    images: {
        full_size: string[];
        thumbnails: string[];
    },
    pricing: {
        online: [
            {
                price: number;
                seller: string;
                details: string;
                currency: string;
                condition: string;
                price_tax: number;
                price_total: number;
                seller_link: string;
                price_shipping: number;
            }
        ]
    };
    reviews: {
        rating: number;
        top_review: {
            text: string;
            title: string;
            author: string;
            rating: number;
            source: string;
        }
        rating_stars: number;
        reviews_count: number;
        reviews_by_stars: {
            [starRating]: {
                url: string;
                reviews_count: string;
            }
        }
    };
    highlights?: string[];
    description:string;
    specifications: [
        {
            items: [
                {
                    title: string;
                    value: string;
                }
            ],
            section_title: string;
        }
    ]
}