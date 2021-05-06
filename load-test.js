import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5m,
        { duration: '10m', target: 100 }, // stay at 100 uses for 10m.
        { duration: '5m', target: 0 }, // ramp-down to 0 users.
    ],
    thresholds:{
        http_req_duration: ['p(99)<1500'], // 99% of requests mus complete below 1.5s.
    },
};

const BASE_URL = 'http://sinia-test.mma.gob.cl';

export default () => {
    http.get(BASE_URL);

    sleep(1);
}