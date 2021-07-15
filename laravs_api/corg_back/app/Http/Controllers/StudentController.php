<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Student;

class StudentController extends Controller
{
    public function getAllStudents() {
        // Get all students
        // $students = Student::get()->toJson(JSON_PRETTY_PRINT);
        // return response($students, 200);
        $students = Student::all();
        if(count($students) > 0){
            return response($students, 200);
        } else {
            return response()->json([
                "message" => "Student not found"
            ], 404);
        }
    }

    public function createStudent(Request $request) {
        // Create a student record
        $this->validate($request, [
            'firstName' => 'required|max:50',
            'lastName' => 'required|max:50',
            'faculty' => 'required|max:50',
            'dept' => 'required|max:50',
            'level' => 'required',
        ]);

        $student = Student::create($request->all());
        if($student){
            return response()->json($student, 201);
        } else {
            return response()->json([
                "message" => "Student not Created"
            ], 404);
        }

        // $student = new Student;
        // $student->name = $request->name;
        // $student->course = $request->course;
        // $student->level = $request->level;
        // $student->save();

        // return response()->json([
        //     "message" => "New Student record created"
        // ], 201);

    }

    // public function getStudent(Student $student) {
    public function getStudent($id) {
        // Get a student record
        // return $student;
        $student = Student::find($id);
        if($student){
            return response($student, 200);
        } else {
            return response()->json([
                "message" => "Student not found"
            ], 404);
        }
        // if (Student::where('id', $id)->exists()) {
        //     $student = Student::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
        //     return response($student, 200);
        // } else {
        //     return response()->json([
        //         "message" => "Student not found"
        //     ], 404);
        // }
    }

    public function updateStudent(Request $request, $id) {
        // Update a student record
        $student = Student::find($id);
        if($student){
            $this->validate($request, [
                'firstName' => 'max:50',
                'lastName' => 'max:50',
                'faculty' => 'max:50',
                'dept' => 'max:50',
            ]);
            $student->update($request->all());
            return response()->json([
                "message" => "Record updated successfully"
            ], 200);
        } else {
            return response()->json([
                "message" => "Student not found"
            ], 404);
        }
        // if (Student::where('id', $id)->exists()) {
        //     $student = Student::find($id);

        //     $student->name = is_null($request->name) ? $student->name : $request->name;
        //     $student->course = is_null($request->course) ? $student->course : $request->course;
        //     $student->save();

        //     return response()->json([
        //         "message" => "records updated successfully"
        //     ], 200);
        // } else {
        //     return response()->json([
        //         "message" => "Student not found"
        //     ], 404);
        // }
    }

    public function deleteStudent ($id) {
        // Delete a student record
        $delStudent = Student::destroy($id);
        if($delStudent){
            return response()->json([
                "message" => "Record deleted"
            ], 202);
        } else {
            return response()->json([
                "message" => "Student not found"
            ], 404);
        }
        // if(Student::where('id', $id)->exists()) {
        //     $student = Student::find($id);
        //     $student->delete();

        //     return response()->json([
        //         "message" => "records deleted"
        //     ], 202);
        // } else {
        //     return response()->json([
        //         "message" => "Student not found"
        //     ], 404);
        // }
    }

    public function search ($student) {
        // Search for student record
        return Student::where('name', 'like', '%'.$student.'%')->get();

    }
  
}
