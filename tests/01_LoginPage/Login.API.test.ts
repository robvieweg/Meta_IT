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
            'Authorization': 'Bearer ${token}', // Include the token in the Authorization header
        },
    });

    // Step 5: Assert the response from /home
    expect(homeResponse.status()).toBe(200);

    // Optionally, assert response body from /home
    const homeResponseBody = await homeResponse.json();
    // Example: Assert that the home page response includes expected data
    expect(homeResponseBody.message).toBe('Welcome to the homepage!'); // Modify according to your response
});