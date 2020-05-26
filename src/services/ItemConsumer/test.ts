
import axios from 'axios';

import {ItemConsumer} from './index';


jest.mock('axios');

describe('ItemConsumer', () => {

    describe('#getItems', () => {

        const mockedAxios = axios as jest.Mocked<typeof axios>;

        test('Basic behavior', async () => {

            const data = [{
                title: 'iPhone 6S Oro',
                description: 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo ' +
                    'y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740.' +
                    ' Las descripciones las puedes encontrar en la web de apple. Esta libre.',
                price: '740',
                email: 'iphonemail@wallapop.com',
                image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png'
            }, {
                title: 'Polaroid 635',
                description: 'Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color.' +
                    ' Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes ' +
                    'instax 20 para hacer fotos. Tamaño M.',
                price: '50',
                email: 'cameramail@wallapop.com',
                image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png'
            }];

            mockedAxios.get.mockResolvedValue({data});

            const items = await new ItemConsumer().getItems();

            expect(items).toEqual(data.map((item, index) => ({...item, id: index})));

        });

    });

});
