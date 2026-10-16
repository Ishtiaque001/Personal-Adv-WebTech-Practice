import { Controller,Get,Param,Delete } from '@nestjs/common';
import { ClientService } from './client.service.js';

@Controller("client")
export class ClientController {
  constructor(private readonly clientService: ClientService) {}


  @Get()
    getClient(): string {
      return this.clientService.getClient();
    }

      @Get(":id")
   getClientwithID(@Param("id") id :string ): string {
     return this.clientService.getClientwithID(id);
   }
    
   @Delete(":id")
   getClientDeleted(@Param("id") id: string):string {
     return this. clientService.getClientDeleted(id);
   }

  }



