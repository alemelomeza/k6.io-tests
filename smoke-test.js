import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 1, // 1 user looping for 1m.
    duration: '1m',

    thresholds: {
        http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s.
    },
};

const BASE_URL = 'http://sinia-test.mma.gob.cl';

export default () => {
    http.get(BASE_URL);

    sleep(1);
}