import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '2m',  target: 400 }, // ramp up to 400 users.
        { duration: '3h56m', target: 400 }, // stay at 400 for ~4 hours.
        { duration: '2m', target: 0 }, // scale down. (optional)
    ],
};

const BASE_URL = 'http://sinia-test.mma.gob.cl';

export default () => {
    http.get(BASE_URL);

    sleep(1);
}