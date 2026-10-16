import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientService {
     getClient(){
        return "Got the client with no ID"
    }

    getClientwithID(id:string){
        return `Got client with id ${id}`;
    }
    getClientDeleted (id:string){
        return `Deleted the client of ID : ${id}`;
    }
}



 

