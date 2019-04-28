'use strict'



class Profile { constructor({   username,   name: {firstName,lastName}, password    }) {

    this.username = username;
        this.name = {firstName, lastName};
        this.password = password;
    }
    
     createUser (callback){
        return ApiConnector.createUser({
            username: this.username,
            name: this.name,
            password: this.password,
        }), (err, data) =>{console.log(`User ${username} created`)};
        callback(err, data);
     }
     
    autorizeUser ({username, password }, callback){
        return ApiConnector.perfomeLogin({username, password}, (err, data)=>{ console.log (`Autorisation for ${username} is completed`)})
            callback(err, data);
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
            })};
     
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
            console.log(`Error during creating ${this.username}`)      
        } else{
            console.log(`User ${this.username} was created`);
            })
        }

            igor.createUser((err, data)=> {
                if (err) {
            console.log(`Error during creating ${this.username}`)      
        } else{
            console.log(`User ${this.username} was created`);
            })
        }
        

           ivan.addMoney({ currency: 'EUR', amount: 500000}, (err, data)=> {
        if (err) {
            console.log(`Error during adding money to ${this.username}`);
            } else {
                console.log(`Added ${amount} ${currency} to ${this.username}`);
            });
          }

          ivan.convertMoney({fromCurrency:'EUR', targetCurrency: 'NETCOIN', targetAmount: 10000},
            (err, data)=>){
            if (err) {
                console.log('Error during convert money')
            } else{ 
            console.log(`${targetAmount} ${fromCurrency} convert to ${targetCurrency}`) });
          }

          ivan.transferMoney({ to: 'Igor', amount: 10000 },(err, data)=>{
          if (err){
            console.log('Error during transfer money')
        } else{
            console.log(`${amount} transfer to ${to}`)
          }
        }

        }
