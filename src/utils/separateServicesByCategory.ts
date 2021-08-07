import { ECategory } from '../constants/enums/ECategory';
import { BeautyService } from './dataTypes';

const separeteServicesByCategory = (services : BeautyService[]) => {
    let servicesByCategory = [];
    const categories = Object.values(ECategory);

    for (let category of categories) {
        servicesByCategory.push({
            category,
            services: []
        });
    }

    for (let service of services) {
        let servicesToAdd = [] as any;
        
        switch (service.category) {
            case ECategory.AESTHETICS:
                servicesToAdd = servicesByCategory.find(service => service.category == ECategory.AESTHETICS);
                servicesToAdd.services.push(service);
                break;

            case ECategory.BARBER_SHOP:
                servicesToAdd = servicesByCategory.find(service => service.category == ECategory.BARBER_SHOP);
                servicesToAdd.services.push(service);
                break;

            case ECategory.FEMALE_DEPILATION:
                servicesToAdd = servicesByCategory.find(service => service.category == ECategory.FEMALE_DEPILATION);
                servicesToAdd.services.push(service);
                break;

            case ECategory.HAIR:
                servicesToAdd = servicesByCategory.find(service => service.category == ECategory.HAIR);
                servicesToAdd.services.push(service);
                break;

            case ECategory.MALE_DEPILATION:
                servicesToAdd = servicesByCategory.find(service => service.category == ECategory.MALE_DEPILATION);
                servicesToAdd.services.push(service);
                break;

            case ECategory.MASSAGE:
                servicesToAdd = servicesByCategory.find(service => service.category == ECategory.MASSAGE);
                servicesToAdd.services.push(service);
                break;

            case ECategory.NAILS:
                servicesToAdd = servicesByCategory.find(service => service.category == ECategory.NAILS);
                servicesToAdd.services.push(service);
                break;

            default:
                break;
        }
    }

    return servicesByCategory.filter(servicesCategory => servicesCategory.services.length > 0);
}

export { separeteServicesByCategory };