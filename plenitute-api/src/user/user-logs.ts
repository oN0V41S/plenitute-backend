export class UserLogs {
    UserModuleLog (message: string, data?:any){
        if(data!){
            return console.log(`${message} || UserModule`)
        }else if(data) {
            return console.log(`${message} ${JSON.stringify(data)} || UserModule`)
        }
    }
}