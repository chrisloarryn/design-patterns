// @ts-nocheck
(() => {
    //// array of temperatures in celsius
    const temperaturesCelsius = [33.6, 12.34];

    //// server ip address
    const serverIp = '123.123.123.123';

    //// Users list
    const users = [
        { id: 1, email: 'fernando@google.com' },
        { id: 2, email: 'juan@google.com' },
        { id: 3, email: 'melissa@google.com' },
    ];

    //// users email list
    const userEmails = users.map(user => user.email);

    //// video game boolean variables
    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    //// another examples
    //// initial time
    const startTime = new Date().getTime();
    ////....
    //// 3 doritos left
    ////...
    //// final time
    const endTime = new Date().getTime() - start;

    //// Functions
    // // get the books
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    //// get books from an url
    function getBooksByUrl(url: string) {
        throw new Error('Function not implemented.');
    }

    //// get square area based on a side
    function getSquareArea(side: number) {
        throw new Error('Function not implemented.');
    }

    //// prints the job
    function printJob() {
        throw new Error('Function not implemented.');
    }
})();
