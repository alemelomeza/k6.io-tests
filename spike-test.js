import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 100 }, // below normal load.
        { duration: '1m', target: 100 },
        { duration: '10s', target: 1400 }, // spike to 1400 users.
        { duration: '3m', target: 1400 }, // stay at 1400 for 3m.
        { duration: '10s', target: 100 }, // scale down. Recovery stage.
        { duration: '3m', target: 100 },
        { duration: '10s', taget: 0 },
    ],
};

const BASE_URL = 'http://sinia-test.mma.gob.cl';

export default () => {
    http.get(BASE_URL);

    sleep(1);
}