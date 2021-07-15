<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;
// use Illuminate\Support\Facades\Mail;
// use Mail;
// use App\Mail\SendMailable;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validated = $request->validate([
            'firstName' => 'required|string|min:2|max:30',
            'lastName' => 'required|string|min:2|max:30',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|min:5|confirmed',
        ]);
        $user = User::create([
            'firstName' => $validated['firstName'],
            'lastName' => $validated['lastName'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $myresponse = [
            'user' => $user,
            'token' => $token
        ];
        return response()->json($myresponse, 201);    
        
    }
    // public function authMail(){
    //     Mail::send(['text'=>'emails.name'],['name','Davo Davo'], function($message){
    //         $message->to('isdavayan@gmail.com','To Mr Davo')->subject('Test Email');
    //         $message->from('isdavayan.gmail.com','K Davo');
    //     })
    //     //     $name = 'Krunal';
    //     //     Mail::to('krunal@appdividend.com')->send(new SendMailable($name));
            
    //     //     return response()->json(['message' => 'Email was sent'], 201);
    //     // }
    // }
    public function login(Request $request) {
        $validated = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
        //check the email
        $user = User::where('email', $validated['email'])->first();
        
        //check the password
        if(!$user || !Hash::check($validated['password'], $user->password)) {
            return response()->json([
                'message' => 'Your details are Invalid'
            ], 401);
        } 

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->json($response, 201);
        
    }

    public function forgot(Request $request){
        // return response()->json($request);
        $validEmail = $request->validate([ 'email' => 'required|string' ]);

        $myuser = User::where('email', $validEmail['email'])->first();

        if (!$myuser) {
            return response()->json([
                'message' => 'Invalid Email'
            ], 401);
          
        }
        $userToken = $myuser->createToken('myapptoken')->plainTextToken;

        $myresponse = [
            'email' => $myuser->email,
            'message' => 'Kindly check into your email account to verify',
            'token' => $userToken
        ];

        return response()->json($myresponse, 201);

    }

    public function resetPassword(Request $request) {
        return response()->json($request);
        $validated = $request->validate([ 'password' => 'required|string|min:5|confirmed' ]);
        
        // $user = User::where([ 'email' => bcrypt($validated['password']) ]);

        // if (!$user) {
        //     return response()->json([
        //         'message' => 'Invalid Information'
        //     ], 401);      
        // }
        // $userToken = $user->createToken('myapptoken')->plainTextToken;

        // $myresponse = [
        //     'message' => 'Login to your profile',
        //     'token' => $userToken
        // ];
        // return response()->json($myresponse, 201);    
        
    }

    // public function mail(){
    //     $name = 'Krunal';
    //     Mail::to('krunal@appdividend.com')->send(new SendMailable($name));
        
    //     return response()->json(['message' => 'Email was sent'], 201);
    // }

    function logout(Request $request) {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }

    
    // public function mail()
    // {
    //     $name = 'Krunal';
    //     Mail::to('krunal@appdividend.com')->send(new SendMailable($name));
        
    //     return 'Email was sent';
    // }

}
