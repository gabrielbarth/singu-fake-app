
type BeautyService = {
    _id: string;
    description: string;
    category: string;
    observation: string;
    imageUrl?: string;
};

type ApiResponse<T> = {
    data: T;
    errors: string | [],
    status: boolean
};

export { BeautyService, ApiResponse };