<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\SocialAccount;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    public function loginUrl()
    {
        return Response::json([
            'url' => Socialite::driver('google')->stateless()->redirect()->getTargetUrl(),
        ]);
    }

    // public function googleLoginUrl()
    // {
    //     return Response::json([
    //         'url' => Socialite::driver('google')->stateless()->redirect()->getTargetUrl(),
    //     ]);
    // }

    public function loginCallback()
    {
        $googleUser = Socialite::driver('google')->stateless()->user();
        $user = null;

        DB::transaction(function () use ($googleUser, &$user) {
            $socialAccount = SocialAccount::firstOrNew(
                ['social_id' => $googleUser->getId(), 'social_provider' => 'google'],
                ['social_name' => $googleUser->getName()]
            );

            if (!($user = $socialAccount->user)) {
                $user = User::create([
                    'email' => $googleUser->getEmail(),
                    'name' => $googleUser->getName(),
                ]);
                $socialAccount->fill(['user_id' => $user->id])->save();
            }
        });

        return Response::json([
            'user' => new UserResource($user),
            'google_user' => $googleUser,
        ]);
    }
}
