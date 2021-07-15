<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{
    public function redirectUrl(){

        return response()->json(['url' => Socialite::driver('google')->redirect()->getTargetUrl()]);
        
        // return Socialite::driver('google')->redirect();
        // return Response::json([
        //     'url' => Socialite::driver('google')->stateless()->redirect()->getTargetUrl(),
        // ]);
    }

    public function callbackUrl(){

        $googleUser = Socialite::driver('google')->stateless()->user();
        return response()->json($googleUser);
    }

    public function redirectFacebookUrl(){

        return response()->json(['url' => Socialite::driver('facebook')->redirect()->getTargetUrl()]);
        
    }

    public function callbackFacebookUrl(){

        $facebookUser = Socialite::driver('facebook')->stateless()->user();
        return response()->json($facebookUser);
    }

}
