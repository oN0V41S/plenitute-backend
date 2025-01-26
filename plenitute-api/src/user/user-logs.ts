export class UserLogs {
    UserModuleLog (message: string, data?:any){
        if(data!){
            return console.log(`Log: ${message} || data: ${data} || Module: UserModule`)
        }
        else{
            return console.log(`Log: ${message} || Module: UserModule`)
        }
    }
}