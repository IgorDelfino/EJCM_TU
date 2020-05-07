<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\User;

class RegisterRequest extends FormRequest
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
            'email' => 'required|unique:users,email|email',
            'password' => 'required',
            'confirmPassword' => 'required|same:password',
            'name'=>'required',
        ];
    }
    public function messages(){
        return [
            'email.required' => 'email is required',
            'email.unique' => 'email must be unique',
            'email.email' => 'email not valid',
            'password.required' => 'password is required',
            'name.required' => 'name is required',
            'confirmPassword.required' => 'confim password is required',
            'confirmPassword.same' => 'field does not match with password'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
