<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, "index"])->name("home");

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/admin', [AdminController::class, "index"])->name("admin");
Route::get('/admin/blogs', [AdminController::class, "adminblogs"])->name("adminblogs");

Route::get('/admin/addblog/', [AdminController::class, "addblog"])->name("createblog");
Route::post('/admin/addblog', [AdminController::class, "addblog_save"]);
Route::delete('/admin/blog/{blog}', [AdminController::class, "blog_delete"])->name("deleteblog");
Route::get('/admin/editblog/{blog}', [AdminController::class, "editblog"])->name("editblog");

require __DIR__.'/auth.php';
