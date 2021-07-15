<?php

namespace App\Http\Controllers;

use App\Mail\SendMail; 
use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Mail; 
use App\Models\User;

class MailController extends Controller { 
    
    public function resetFromEmail(Request $request) { 
       
        $title = 'Welcome to your password reset'; 
        $user_details = [ 
            'name' => 'Arogya', 
            'address' => 'kathmandu Nepal',     
            'email' => 'testemail@example.com' 
        ]; 
        $order_details = [ 
            'SKU' => 'D-123456', 
            'price' => '10000', 
            'order_date' => '2020-01-22', 
        ];
        $sendmail = Mail::to($user_details['email'])->send(new SendMail($title, $customer_details, $order_details)); 
        if (empty($sendmail)) {
            return response()->json([
                'message' => 'Mail Sent Sucssfully'
            ], 200); 
        }else{ 
            return response()->json([
                'message' => 'Mail Sent fail'
            ], 400); 
        } 
    }

    public function sendEmail() { 
        $title = '[Confirmation] Thank you for your order'; 
        $customer_details = [ 
            'name' => 'Arogya', 
            'address' => 'kathmandu Nepal', 
            'phone' => '123123123',
            'email' => 'testemail@example.com' 
        ]; 
        $order_details = [ 
            'SKU' => 'D-123456', 
            'price' => '10000', 
            'order_date' => '2020-01-22', 
        ];
        $sendmail = Mail::to($customer_details['email'])->send(new SendMail($title, $customer_details, $order_details)); 
        if (empty($sendmail)) {
            return response()->json([
                'message' => 'Mail Sent Sucssfully'
            ], 200); 
        }else{ 
            return response()->json([
                'message' => 'Mail Sent fail'
            ], 400); 
        } 
    } 
    
}

// Read more: https://rabineupane.com.np/how-to-send-mail-in-laravel-6-api-with-gmail/#ixzz6yK9s3Bhz