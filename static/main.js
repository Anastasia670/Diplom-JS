'use strict'

class Profile{
  constructor(username, name {firstName, lastName}, password){
    this.username = username
    this.name = name {firstName, lastName}
    this.password = password
    }
     createUser (callback){
     	return ApiConnector.createUser({
            username: this.username
            name: this.name,
            password: this.password,
        }), (err, data) =>{console.log(`User ${username} created`)};
        callback(err, data);
     }
     
    autorizeUser ({ username, password }, callback){
        return ApiConnector.perfomeLogin({username, password}, (err, data)=>{
            console.log (`Autorisation for ${username} is completed`);
            callback(err, data)
        }
    }

    addMoney({ currency, amount }, callback) {
        return ApiConnector.addMoney({ currency, amount }, (err, data) => {
            console.log(`Adding ${amount} of ${currency} to ${this.username}`);
            callback(err, data);
        });
    }

    convertMoney ({ fromCurrency, targetCurrency, targetAmount }, callback){
        return ApiConnector.convertMoney({ fromCurrency, targetCurrency, targetAmount },(err, data)=>{
            console.log(`Convertation ${fromCurrency} to ${targetCurrency} completed, 
                total: ${targetAmount} `);
            callback(err, data);
        });
    }

    transferMoney ({ to, amount }, callback){
        return ApiConnector.transferMoney ({ to, amount },(err, data)=>{
            console.log(`${amount} transfered to ${to}`);
            callback(err, data);
            });
        }

        function getStocks(){
            return  ApiConnector.getStocks((err, data) =>{
        if (err) {
            console.log('Error');
        } else {
            console.log('Getting stocks info');
        }
    });
      
    }
}

function main(){
    const Ivan = new Profile({
                    username: 'ivan',
                    name: { firstName: 'Ivan', lastName: 'Chernyshev' },
                    password: 'ivanspass',
                })

        const Igor = new Profile({
                    username: 'igorek',
                    name: { firstName: 'Igor', lastName: 'Nikitin' },
                    password: 'igorppass',
                })

                
            ivan.createUser((err, data) => {
            if (err) {
            console.log('Error during creating Ivan')      
        } else{
            console.log(`User Ivan was created`);
            })
        }

            igor.createUser((err, data)=> {
                if (err) {
            console.log('Error during creating Igor')      
        } else{
            console.log(`User Igor was created`);
            })
        }
        

           ivan.addMoney({ currency: 'EUR', amount: 500000}, (err, data)=> {
        if (err) {
            console.log('Error during adding money to Ivan');
            } else {
                console.log(`Added 500000 EUR to Ivan`);
            });
          }

          ivan.convertMoney({fromCurrency:'EUR', targetCurrency: 'NETCOIN', targetAmount: 10000},
            (err, data)=>){
            if (err) {
                console.log('Error during convert money')
            } else{ 
            console.log('10000 EUR convert to NETCOIN') });
          }

        }
