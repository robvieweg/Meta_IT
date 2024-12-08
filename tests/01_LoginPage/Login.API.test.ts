import { test, expect, APIRequestContext, request} from '@playwright/test';

test('Test Case 1.4: Login with Valid Credentials API', async () => {
    const apiRequestContext: APIRequestContext = await request.newContext({
        baseURL: 'http://localhost:8000', 
    });

    const loginResponse = await apiRequestContext.post('/login', {
        data: {
            username: 'admin',
            password: 'admin321',
        },
    });

    expect(loginResponse.status()).toBe(200);
    const loginResponseBody = await loginResponse.json();
    const token = loginResponseBody.token;
    expect(token).toBeDefined();

    const homeResponse = await apiRequestContext.get('/home', {
        headers: {
            'Authorization': 'Bearer ${token}', 
        },
    });

    expect(homeResponse.status()).toBe(200);

    const homeResponseBody = await homeResponse.json();
    expect(homeResponseBody.message).toBe('Welcome to the homepage!');
});