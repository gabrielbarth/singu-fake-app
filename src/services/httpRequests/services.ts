import { api } from '../api';
import { ApiResponse, BeautyService } from '../../utils/dataTypes';

/* Returns all beauty services from api */
const getSevices = async () => {
    const response = await api.get('services');
    return response.data as ApiResponse<BeautyService[]>;
}

export { getSevices };

