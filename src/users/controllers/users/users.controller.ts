import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { userInfo } from 'os';
import { createUserDto } from 'src/users/dto/users.dto';

@Controller('users') //decorator that defines the route for this controller
//@Controller() decorator helps us group related routes together and reduces repetitive code
export class UsersController {
    @Get() //HTTP GET request decorator .......decorators are functions
   getAllUsers(){
    return {
        username: 'Charity',
        email: 'charity@example.com',
    }

   } //define a method to get all users
   
   @Get('posts')
   getUsersPosts() {
       return [
           {
               id: 1,
               title: 'First Post',
               content: 'This is the content of the first post',
           },
           {
               id: 2,
               title: 'Second Post',
               content: 'This is the content of the second post',
           }, 
       ];
   }
   //nested routes
   @Get('posts/comments')
   GetUsersPostComments() {
    return {
        postId: 1,
        comments: [
            {
                id: 1,
                content: 'This is the first comment',
            },
            {
                id: 2,
                content: 'This is the second comment',
            },
        ],
    }
   }
   @Post() 
   createUser( @Req() request: Request, @Res() response: Response) {
         const user = request.body; //get the user data from the request body
         // Here you would typically save the user to a database
         response.status(201).json({
              message: 'User created successfully',
              user,
         });
         //return a response indicating success
   } //method to create user, takes in req and res which are of type Request and Response and their function is to handle HTTP requests and responses

   // using DTO to type annotate the user object
   @Post('create')
   createNewUser(@Body() userInfo: createUserDto) {
       // Here you would typically save the user to a database
       return {
           message: 'User created successfully',
           user: userInfo,
       };
   }

   //get user by id
    @Get(':id')
   getUserbyId(@Param('id') id: number) {
       return {
           id,
           username: 'jelimo',
           email: 'jelimo@example.com',
       };
   }
   } // class 
 