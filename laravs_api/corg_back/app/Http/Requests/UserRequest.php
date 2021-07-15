<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ];
    }

    public function messages()
    {
        return [
            'firstName.required' => 'Firstname is required',
            'lastName.required' => 'Lastname is required',
            'email.required' => 'Email is required',
            'email.unique' => 'Email has already been taken',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Password must be the same',
        ];
    }
}
