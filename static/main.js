'use strict'


class Profile {
    constructor({username, name: {firstName, lastName}, password})
    {

        this.username = username;
        this.name = {
            firstName,
            lastName
        };

        this.password = password;
    }



    createUser(callback) {
        return ApiConnector.createUser({
            username: this.username,
            name: this.name,
            password: this.password,
        }, (err,data)=>{
            console.log(`User ${this.username} created`)
        }

        );
        callback(err, data);
    }



    autorizeUser(callback) {
        return ApiConnector.performLogin({
            username: this.username,
            password: this.password
        }, (err,data)=>{
            console.log(`Autorisation for ${this.username} is completed`)
        }
        )
        callback(err, data);
    }


    addMoney({currency, amount}, callback) {
        return ApiConnector.addMoney({
            currency,
            amount
        }, (err,data)=>{
            console.log(`Adding ${amount} of ${currency} to ${this.username}`)
        }
                );

        callback(err, data);
    }


    convertMoney({fromCurrency, targetCurrency, targetAmount}, callback) {
        return ApiConnector.convertMoney({
            fromCurrency,
            targetCurrency,
            targetAmount
        }, (err,data)=>{
            console.log(`Convertation ${fromCurrency} to ${targetCurrency} completed, 
                total: ${targetAmount} `)
        }
        );
        callback(err, data);
    }



    transferMoney({to, amount}, callback) {
        return ApiConnector.transferMoney({
            to,
            amount
        }, (err,data)=>{
            console.log(`${amount} transfered to ${to}`)
        }
        )
        callback(err, data);

    }
    ;
}

function getStocks() {

    return ApiConnector.getStocks( (err, data) => {

        if (err) {

            console.log('Failed to get stocks info');

        } else {

            console.log('Getting stocks info');
            const wallet = data[data.length - 1];
            console.log(wallet)
             }
   
    })

}


getStocks()

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
            console.log(`Error during creating ${this.username}`)
        } else {
            console.log(`User ${this.username} was created`);
        }
    }, Ivan.autorizeUser((err,data)=>{
        if (err) {
            console.log(`Error during autorization ${this.username}`)
        } else {
            console.log(`User ${this.username} was autorizated`);
        }
    },
    Ivan.addMoney({
        currency: 'EUR',
        amount: 500000
    }, (err,data)=>{
        if (err) {
            console.log(`Error during adding money to ${this.username}`);
        } else {
            console.log(`Added ${amount} ${currency} to ${this.username}`);
        }
        ;
    }, 
    Ivan.convertMoney({
        fromCurrency: 'EUR',
        targetCurrency: 'NETCOIN',
        targetAmount: 10000 }, (err,data)=>{
        if (err) {
            console.log('Error during convert money')
        } else {
            console.log(`${targetAmount} ${fromCurrency} convert to ${targetCurrency}`)
        }
    }, 
    Ivan.transferMoney({
        to: 'Igor',
        amount: 10000}, (err,data)=>{
           if (err) {
            console.log('Error during transfer money')
        } else {
            console.log(`${amount} transfer to ${to}`)
        }
    }

    )))));

    Igor.createUser((err,data)=>{
        if (err) {
            console.log(`Error during creating ${this.username}`)
        } else {
            console.log(`User ${this.username} was created`);
        }
    }
    )
}



main()

