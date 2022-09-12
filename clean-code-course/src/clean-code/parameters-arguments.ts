// @ts-nocheck
// Language: typescript

interface SendEmailOptions {
    toWhom: string;
    body: string;
    from: string;
    subject: string;
    apiKey: string;
    cc: string;
    bcc: string;
}

// GOOD
function sendEmail({ toWhom, body, from, subject }: SendEmailOptions): boolean {
    // ...
}

// NOT GOOD ENOUGH
function sendEmail(
    toWhom: string,
    body: string,
    from: string,
    subject: string,
    apiKey: string,
    cc: string,
    bcc: string,
): boolean {
    // ...
}
// NOT GOOD ENOUGH
function sendEmail(toWhom: string, subject: string, body: string, fromWhom: string): boolean {
    // ...
}
// GOOD
function sendEmail(toWhom: string, body: string, from: string): boolean {
    // ...
}
