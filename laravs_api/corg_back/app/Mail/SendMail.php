<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;
    public $title;
    public $customer_details;
    public $order_details;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($title, $customer_details, $order_details)
    { 
        // 
        $this->title = $title; 
        $this->customer_details= $customer_details; 
        $this->order_details = $order_details; 
    }

    // Read more: https://rabineupane.com.np/how-to-send-mail-in-laravel-6-api-with-gmail/#ixzz6yKC4lm7i

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // return $this->from("isdavayan@gmail.com")->view('emails.customer_mail');
        return $this->subject($this->title)
            ->view('emails.customer_mail');
        // return $this->view('view.name');
    }
}
