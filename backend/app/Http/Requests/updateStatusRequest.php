<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class updateStatusRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth('api')->check() && auth('api')->user()->role === 'employe';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'statuts' => 'required|in:en attente,en préparation,prête à livrer,livrée,annulée',
        ];
    }

    public function messages(): array
    {
        return [
            'statuts.required' => 'Le champ statut est obligatoire.',
            'statuts.in' => 'Le statut doit être : en attente, en préparation, livrée ou annulée .',
        ];
    }

}
