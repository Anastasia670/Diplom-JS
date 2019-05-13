'use strict'

class Profile {
    constructor({username, name: {firstName, lastName}, password}) {
        this.username = username;
        this.name = {
            firstName,
            lastName
        };
        this.password = password;

    };
    createUser(callback) {
        return ApiConnector.createUser({
            username: this.username,
            name: this.name,
            password: this.password,
        }, (err,data)=>{
            console.log(`User ${this.username} created`);
            callback(err, data);
        }
        );
    };
    autorizeUser(callback) {
        return ApiConnector.performLogin({
            username: this.username,
            password: this.password
        }, (err,data)=>{
            console.log(`Autorisation for ${this.username} is completed`);
            callback(err, data);
        }
        );

    };
    addMoney({currency, amount}, callback) {
        return ApiConnector.addMoney({
            currency,
            amount
        }, (err,data)=>{
            console.log(`Adding ${amount} of ${currency} to ${this.username}`);
            callback(err, data);
        }
        );

    };
    convertMoney({fromCurrency, targetCurrency, targetAmount}, callback) {
        return ApiConnector.convertMoney({
            fromCurrency,
            targetCurrency,
            targetAmount
        }, (err,data)=>{
            console.log(`Convertation ${fromCurrency} to ${targetCurrency} completed, 
                total: ${targetAmount} `);
            callback(err, data);
        }
        );

    };
    transferMoney({to, targetCurrency, amount}, callback) {
        return ApiConnector.transferMoney({
            to,
            amount
        }, (err,data)=>{
            console.log(`${amount} ${targetCurrency} transfered to ${to}`);
            callback(err, data);
        }
        );
    }
    ;

};
function getStocks(callback) {
    return ApiConnector.getStocks((err,data)=>{
        if (err) {
            console.log('Failed to get stocks info');
        } else {
            console.log('Getting stocks info');
            callback(err, data)
        }
    }
    )

};
function main() {
    const Ivan = new Profile({
        username: 'ivan007',
        name: {
            firstName: 'Ivan',
            lastName: 'Chernyshev'
        },
        password: 'ivanspass',
    })

    const Igor = new Profile({
        username: 'igorek',
        name: {
            firstName: 'Igor',
            lastName: 'Nikitin'
        },
        password: 'igorppass',

    })

    console.log(Ivan);
    console.log(Igor);
    Ivan.createUser((err,data)=>{
        if (err) {
            console.log(`Error during creating User`)
        } else {
            console.log(`User was created`);
            Ivan.autorizeUser((err,data)=>{
                if (err) {
                    console.log(`Error during autorization Uses`)
                } else {
                    console.log(`User was autorizated`);
                    Ivan.addMoney({
                        currency: 'EUR',
                        amount: 500000
                    }, (err,data)=>{
                        if (err) {
                            console.log(`Error during adding money`);
                        } else {
                            console.log(`Money is added to User`);
                            getStocks((err,data)=>{
                                if (err) {
                                    console.error('Error during getting stocks info');
                                } else {
                                    const course = data[99]
                                    Ivan.convertMoney({
                                        fromCurrency: 'EUR',
                                        targetCurrency: 'NETCOIN',
                                        targetAmount: 200000 * course.EUR_NETCOIN

                                    }, (err,data)=>{
                                        if (err) {
                                            console.log('Error during convert money')
                                        } else {
                                            console.log(`Convertation is completed`)
                                            Igor.createUser((err,data)=>{
                                                if (err) {
                                                    console.log(`Error during creating User`)
                                                } else {
                                                    console.log(`User was created`);
                                                    Ivan.transferMoney({
                                                        to: 'igorek',
                                                        targetCurrency: 'NETCOIN',
                                                        amount: 200000 * course.EUR_NETCOIN
                                                    }, (err,data)=>{
                                                        if (err) {
                                                            console.log('Error during transfer money')
                                                        } else {
                                                            console.log(`Money transfered to User`)
                                                        }
                                                    }
                                                    );
                                                }
                                            }
                                            )
                                        }
                                    }
                                    );
                                }
                            }
                            );
                        };
                    }
                    )
                }
            }
            )
        }
    }
    );
}

main();
