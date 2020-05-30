
import {AppItem} from '../../../src/model';


export const appItems: AppItem[] = [
    {
        title: 'Batidora',
        description: 'Está completamente nueva (no la he sacado de la caja). Me la regalaron pero no la quiero',
        price: 90,
        email: 'mixer@wallapop.com',
        image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/mixer.png'
    },
    {
        title: 'Mudanzas',
        description: 'Está completamente nueva (no la he sacado de la caja). Me la regalaron pero no la quiero',
        price: 90,
        email: 'moves@wallapop.com',
        image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/moves.png'
    },
    {
        title: 'Lavadora',
        description: 'Vendo lavadora comprada hace 1 año. Me cambio de piso y me urge venderla',
        price: 250,
        email: 'washer@wallapop.com',
        image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/washer.png'
    },
    {
        title: 'TV de 43 pulgadas',
        description: 'Televisor de 43 pulgadas. Funciona perfectamente. No tengo la base. Precio negociable',
        price: 400,
        email: 'tv@wallapop.com',
        image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/tv.png'
    },
    {
        title: 'Piso en Clot',
        description: '60m2, en pleno mercado del Clot. Piso muy acogedor, reformado. Ideal para parejas',
        price: 288000,
        email: 'flat@wallapop.com',
        image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/flat.png'
    }
].map((item, index) => ({...item, id: index}));
