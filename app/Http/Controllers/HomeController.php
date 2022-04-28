<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        $latestBlogs = Blog::orderBy("created_at", "desc")->limit(8)->get();
        $popBlogs = Blog::limit(8)->get();
        
        return view('welcome', ["latestBlogs" => $latestBlogs, "popBlogs" => $popBlogs]);
    }
}
