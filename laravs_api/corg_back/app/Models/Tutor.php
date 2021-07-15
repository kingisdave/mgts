<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'firstName',
        'lastName',
        'jobTitle',
        'address',
        'courseNo',
        'gradeLevel'
    ];

    public function user(){
    	return $this->hasOne('App\Models\User');
    }
}
