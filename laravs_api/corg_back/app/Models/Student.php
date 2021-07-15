<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $table = 'students';

    protected $fillable = [
        'firstName', 
        'lastName',
        'matricNo',
        'faculty',
        'dept',
        'level',
        'currentCourses',
        'allCourses',
        'cgp',
    ];

    public function user(){
    	return $this->hasOne('App\Models\User');
    }
}
