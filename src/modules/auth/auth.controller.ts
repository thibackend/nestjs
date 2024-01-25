import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
@Controller() 
export class AuthController{
    constructor(private AuthService: AuthService){ }
    @Post('signin')
    signin(){
        return this.AuthService.signin();
    }
}
