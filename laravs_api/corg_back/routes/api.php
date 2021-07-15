<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SocialLoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MailController;

// use App\Http\Controllers\SocialController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/students', [StudentController::class, 'getAllStudents']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/resetpassword', [AuthController::class, 'resetpassword']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot', [AuthController::class, 'forgot']);
// Route::get('/forgot/{mail}', [MailController::class, 'resetFromEmail']);
Route::get('students/{id}', [StudentController::class, 'getStudent']);
Route::get('students/search/{student}', [StudentController::class, 'search']);

Route::get('/auth/google/url', [SocialLoginController::class, 'redirectUrl']);
Route::get('/auth/google/callback', [SocialLoginController::class, 'callbackUrl']);

Route::get('/auth/facebook/url', [SocialLoginController::class, 'redirectFacebookUrl']);
Route::get('/auth/facebook/callback', [SocialLoginController::class, 'callbackFacebookUrl']);

Route::get('/forgot/{mail}', [MailController::class, 'sendEmail']); 
// Route::group(['prefix' => 'v1'], function () { 
    // Route::get('sendmail', 'MailController@sendmail'); 
// });

// Route::get('/{website}', 'SocialFacebookController@redirect');
// Route::get('/{website}/callback', 'SocialFacebookController@callback');

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::resource('dashboard', DashboardController::class);
    Route::post('students', [StudentController::class, 'createStudent']);
    Route::put('students/{id}', [StudentController::class, 'updateStudent']);
    Route::delete('students/{id}', [StudentController::class, 'deleteStudent']);
    Route::post('/logout', [AuthController::class, 'logout']);
});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
